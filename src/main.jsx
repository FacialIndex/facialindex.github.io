import { lazy, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App.jsx"
import RootLayout from "./layout.jsx"
// import { About } from "./about/About.jsx"
import About from "./about/page.mdx"
// import { Home } from "./routes/home/Home.jsx"
// import About from "./about/page.mdx"

const Home = lazy(() => import("./routes/home/Home.jsx"));
// const About = lazy(() => import("./routes/about/About.jsx"));
// const Page = lazy(() => import("./pages/Page"));
// const NotFound = lazy(() => import("./pages/NotFound"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
