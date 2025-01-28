import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saúde na Mão - Inovação em SaaS e Marketing Digital para Saúde",
  description: "Soluções futuristas de SaaS e marketing digital para revolucionar o setor de saúde.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-[#000F24] text-white`}>{children}</body>
    </html>
  )
}

