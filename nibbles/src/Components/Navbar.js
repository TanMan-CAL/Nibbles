import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className={`navbar ${isHomePage ? 'navbar-home' : 'navbar-regular'}`}>
            <h1>Title</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Page1">Page 1</Link>
                <Link to="/Page2">Page 2</Link>
                <Link to="/AboutUs">About Us</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
