import { useState } from "react"
import { FiLock, FiMail } from "react-icons/fi"
import { Link } from "react-router-dom"

import { Container, Form, Background } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Loader } from "../../components/Loader"

import { useAuth } from "../../hooks/useAuth"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const { signIn } = useAuth()

    async function handleSignIn(e) {
        e.preventDefault()

        setIsLoading(true)

        let errorMessage

        if (!email || email.trim() === "") {
            setIsLoading(false)
            return alert("Preencha o e-mail.")
        }

        if (!password || password.trim() === "") {
            setIsLoading(false)
            return alert("Preencha a senha.")
        }

        setIsLoading(false)
        signIn({ email, password })
    }

    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                <h1>RocketMovies</h1>
                <span>Aplicação para acompanhar tudo que assistir.</span>

                <h2>Faça seu login</h2>

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

                <Button title="Entrar" isLoading={isLoading} type="submit" />

                <Link to="/register">Criar conta</Link>
            </Form>

            <Background />
        </Container>
    )
}
