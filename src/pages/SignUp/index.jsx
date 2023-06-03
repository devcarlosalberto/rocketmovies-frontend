import { useState } from "react"
import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"

import { Container, Form, Background } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { api } from "../../services/api"

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState("")

    const navigate = useNavigate()

    async function handleSignUp(e) {
        e.preventDefault()

        setIsLoading(true)

        if (!name || name.trim() === "") {
            setIsLoading(false)
            return alert("Preencha seu nome.")
        }

        if (!email || email.trim() === "") {
            setIsLoading(false)
            return alert("Preencha seu e-mail.")
        }

        if (!password || password.trim() === "") {
            setIsLoading(false)
            return alert("Preencha sua senha.")
        }

        try {
            const data = { name, email, password }
            const result = await api.post("/users", data)
            alert(result.data.message)

            navigate("/")
        } catch (error) {
            if (error.response.data.message) {
                setIsLoading(false)
                return alert(error.response.data.message)
            } else {
                setIsLoading(false)
                return alert("Não foi possível criar sua conta.")
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Crie sua conta</h2>

                <Input
                    icon={FiUser}
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                />

                <Input
                    icon={FiMail}
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" type="submit" isLoading={isLoading} />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            <Background />
        </Container>
    )
}
