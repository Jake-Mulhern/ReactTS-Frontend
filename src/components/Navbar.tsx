import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../App.types';

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    return (
        <nav className={`navbar ${className}`}>
            <ul className="nav-links">
                <li>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                    }
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/users" 
                    className={({ isActive }) => 
                    `nav-link ${isActive ? 'active' : ''}`
                    }
                >
                    Users
                </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
