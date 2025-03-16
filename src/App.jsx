import RootLayout from "./layout"
import { Home } from "@/src/routes/home/Home"
import { components } from "./mdxComponents"
import { BrowserRouter, Route, Routes } from "react-router"
import { MDXProvider } from "@mdx-js/react"
import { lazy } from "react"

const About = lazy(() => import("./routes/about/page.mdx"))
const Contact = lazy(() => import("./routes/contact/page.mdx"))
const Markdown = lazy(() => import("./routes/markdown/page.mdx"))
const Sample = lazy(() => import("./routes/sample/page.mdx"))
const Table = lazy(() => import("./routes/table/page.mdx"))
const Theme = lazy(() => import("./routes/theme/page.mdx"))

function App() {
    return (
        <MDXProvider components={components}>
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route index path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/markdown" element={<Markdown />} />
                        <Route path="/sample" element={<Sample />} />
                        <Route path="/table" element={<Table />} />
                        <Route path="/theme" element={<Theme />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </MDXProvider>
    )
}

export default App
