"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Cadastro() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !phone) {
      alert("Preencha todos os campos")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
    }

    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    setName("")
    setEmail("")
    setPhone("")
    alert("Usuário cadastrado!")
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastrar Usuário</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <br />

        <div>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <br />

        <div>
          <input placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <br />

        <button type="submit">Cadastrar</button>

        <Link href="/">
          <button>Voltar</button>
        </Link>
      </form>
    </div>
  )
}
