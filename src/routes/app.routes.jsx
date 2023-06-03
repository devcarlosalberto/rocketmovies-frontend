import { Routes, Route } from "react-router-dom"

import { NewMovie } from "../pages/NewMovie"
import { Details } from "../pages/Details"
import { Profile } from "../pages/Profile"
import { Home } from "../pages/Home"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/newMovie" element={<NewMovie />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}
