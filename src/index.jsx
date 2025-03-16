import { lazy, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App.jsx"
import RootLayout from "./layout.jsx"
// import { About } from "./about/About.jsx"
// import About from "./about/page.mdx"
import About from "./routes/about/page.mdx"
import Contact from "./routes/contact/page.mdx"
import Markdown from "./routes/markdown/page.mdx"
import { MDXProvider } from "@mdx-js/react"
import components from "./mdxComponents.jsx"
// import Sample from "./routes/sample/page.mdx"
// import Table from "./routes/table/page.mdx"
// import Theme from "./routes/theme/page.mdx"

// import { Home } from "./routes/home/Home.jsx"
const Home = lazy(() => import("./routes/home/Home.jsx"))
// const About = lazy(() => import("./routes/about/About.jsx"));
// const Page = lazy(() => import("./pages/Page"));
// const NotFound = lazy(() => import("./pages/NotFound"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
        {/* </MDXProvider> */}
    </StrictMode>
)
