import { Outlet, Link } from "react-router-dom"

import { Header } from "@/components/layout/header"
import { Body } from "@/components/layout/body"
import { Footer } from "@/components/layout/footer"

export default function RootLayout() {
    return (
        <div dir="ltr">
            <Header />
            <Body>
                {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
                <Outlet />
                {/* </ThemeProvider> */}
            </Body>
            <Footer />
        </div>
    )
}
