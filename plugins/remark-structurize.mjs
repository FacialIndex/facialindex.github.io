const CODE_TABLE_QUOTE_LIST = new Set(["code", "table", "blockquote", "list", "mdxJsxFlowElement"])

export const remarkStructurize = (options) => {
    const opts = { codeblocks: true, ...options }
    const structurizedData = Object.create(null)
    let activeSlug = ""
    let skip = false
    let content = ""

    return (tree, file) => {
        walk(tree)
        save()
        file.data.structurizedData = structurizedData
    }

    function save() {
        const cleanedContent = content
            .trim()
            // Strip out large words starting from 50 chars since it can provoke out-of-memory while
            // indexing them, I took 50 chars since largest word in English has 45 characters
            // https://github.com/shuding/openhuman/issues/2077#issuecomment-1693671011
            .replace(/\w{50,}/g, "")
            // Replace by new line or new lines
            .replace(/\n+/g, "\n")
        if (activeSlug || cleanedContent) {
            structurizedData[activeSlug] = cleanedContent
        }
    }

    function walk(node) {
        let result = ""
        const { type } = node

        if (type === "heading") {
            skip = true
        }

        if (CODE_TABLE_QUOTE_LIST.has(type)) {
            result += "\n"
            if (!skip) content += "\n"
        }

        if ("children" in node) {
            for (const child of node.children) {
                result += walk(child)
            }
        } else if ((opts.codeblocks && type === "code") || ["text", "inlineCode", "tableCell"].includes(type)) {
            result += node.value
            if (!skip) content += node.value
        }

        if (CODE_TABLE_QUOTE_LIST.has(type) || ["listItem", "break"].includes(type)) {
            result += "\n"
            if (!skip) content += "\n"
        }

        if (type === "tableCell") {
            result += "\t"
            if (!skip) content += "\t"
        } else if (type === "heading") {
            skip = false
            if (node.depth > 1) {
                save()
                content = "" // reset content after h1 content
                activeSlug = node.data.hProperties.id + "#" + result
            }
        }
        return result
    }
}
