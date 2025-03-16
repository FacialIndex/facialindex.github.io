// import { BrowserRouter, StaticRouter, Route, Routes } from "react-router-dom"
import RootLayout from "./layout"

import { Home } from "@/src/routes/home/Home"
// // Lazy load components
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Page = lazy(() => import("./pages/Page"));
// const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    )
}

export default App
