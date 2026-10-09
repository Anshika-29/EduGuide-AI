
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <span className="brand-icon">🎓</span>
                <span className="brand-name">
                    EduGuide<span className="brand-ai"> AI</span>
                </span>
            </Link>

            <ul className="navbar-links">
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/lectures/search">Lectures</NavLink>
                </li>
                <li>
                    <NavLink to="/lectures/search">AI Summary</NavLink>
                </li>
                <li>
                    <NavLink to="/lectures/search">AI Chat</NavLink>
                </li>
                <li>
                    <a href="/#about">About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;