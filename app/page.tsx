"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastro de Usuários</h1>

      <div>
        <Link href="/cadastro">
          <button>Cadastrar Usuário</button>
        </Link>

        <Link href="/dados">
          <button>Ver Usuários</button>
        </Link>
      </div>
    </div>
  )
}
