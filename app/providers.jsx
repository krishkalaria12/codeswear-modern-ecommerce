'use client'

import { ThemeProvider } from "next-themes"

function Providers({children}) {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            {children}
        </ThemeProvider>
    )
}

export default Providers