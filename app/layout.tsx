import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cadastro de Usuários",
  description: "Aplicação simples para cadastro de usuários",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'