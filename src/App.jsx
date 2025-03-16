// import { BrowserRouter, StaticRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout"

import { Home } from "@/src/routes/home/Home"
import components from "./mdxComponents"
import { BrowserRouter, Route, Routes } from "react-router"
import { MDXProvider } from "@mdx-js/react"
// // Lazy load components
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Page = lazy(() => import("./pages/Page"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// import { About } from "./about/About.jsx"
// import About from "./about/page.mdx"
import About from "./routes/about/page.mdx"
import Contact from "./routes/contact/page.mdx"
import Markdown from "./routes/markdown/page.mdx"
// import Sample from "./routes/sample/page.mdx"
// import Table from "./routes/table/page.mdx"
// import Theme from "./routes/theme/page.mdx"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index path="/" element={<Home />} />

                    <Route
                        path="/about"
                        element={
                            <MDXProvider components={components}>
                                <About />{" "}
                            </MDXProvider>
                        }
                    />

                    <Route path="/contact" element={<Contact />} />
                    <Route path="/markdown" element={<Markdown />} />
                    {/* <Route path="/sample" element={<Sample />} />
                    <Route path="/table" element={<Table />} />
                    <Route path="/theme" element={<Theme />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
