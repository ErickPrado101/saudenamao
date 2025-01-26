import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FuturoSaaS - Inovação Digital para o Futuro",
  description: "Transforme seu negócio com nossas soluções de SaaS e marketing digital de ponta.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="light">
      <body className={`${inter.className} bg-background text-text`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

