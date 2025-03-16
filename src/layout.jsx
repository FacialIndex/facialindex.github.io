import { Header } from "@/components/layout/header"
import { Body } from "@/components/layout/body"
import { Footer } from "@/components/layout/footer"

export default function RootLayout({ children }) {
    // dir="ltr"
    return (
        <div>
            <Header />
            <Body>
                {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
                {children}
                {/* </ThemeProvider> */}
            </Body>
            <Footer />
        </div>
    )
}
