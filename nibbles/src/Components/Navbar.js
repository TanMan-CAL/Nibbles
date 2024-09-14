import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className={`navbar ${isHomePage ? 'navbar-home' : 'navbar-regular'}`}>
            <h1>Nibbles</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Recipies">Recipies</Link>
                <Link to="/Ingredients">Ingredients</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
