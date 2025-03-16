import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import App from "./App.jsx"
import RootLayout from "./layout.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route path="/" element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
)
