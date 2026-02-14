import { Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoutes"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<DashboardPage/>} />
            </Route>
            <Route path='*' element={<LoginPage />} />
        </Routes>
    )
}