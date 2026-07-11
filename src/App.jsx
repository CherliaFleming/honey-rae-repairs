import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./views/ApplicationViews.jsx"
import { Login } from "./components/auth/Login.jsx"
import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar.jsx"
import "./App.css"

export const App = () => {
  return (
    <div className="tickets-container">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </div>
  )
}