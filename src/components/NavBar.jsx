import { Link } from "react-router-dom"
import "./nav.css"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to="/employees">Employees</Link>
                </li>
            </nav>
    )
}