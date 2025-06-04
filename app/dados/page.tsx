"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface User {
  id: number
  name: string
  email: string
  phone: string
}

export default function Dados() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    setUsers(savedUsers)
  }, [])

  return (
    <div style={{ padding: "20px" }}>
      <h2>Usuários Cadastrados</h2>

      {users.length === 0 ? (
        <p>Nenhum usuário cadastrado</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.phone}
            </li>
          ))}
        </ul>
      )}

      <Link href="/">
        <button>Voltar</button>
      </Link>
    </div>
  )
}
