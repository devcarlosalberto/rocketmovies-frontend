import { BrowserRouter } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"

import { AppRoutes } from "./app.routes"
import { AuthRoutes } from "./auth.routes"

export function Routes() {
    const { user } = useAuth()
    const isAuthenticated = user ? true : false
    return (
        <BrowserRouter>
            { isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}
