import HeaderMobile from "@/сomponents/headerMobile/HeaderMobile"

export const metadata = {
    title: "TRIFONOVA ALINA",
    description: "Generated by Next.js",
}

import "./global.css"

import { Montserrat } from "next/font/google"
import { Bebas_Neue } from "next/font/google"
import Header from "@/сomponents/header/Header"
import React from "react"

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-montserrat",
})

const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-bebas-neue",
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru" className={`${montserrat.variable} ${bebasNeue.variable}`}>
            <body style={{ margin: 0, fontFamily: "var(--font-montserrat)" }}>
                <HeaderMobile />
                <Header />
                {children}
            </body>
        </html>
    )
}
