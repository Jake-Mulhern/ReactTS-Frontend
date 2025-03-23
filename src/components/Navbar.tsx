import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarProps } from '../App.types';
import { AuthContext } from '../contexts/Authentication';

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
    const { user, setUser } = useContext(AuthContext);
    
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
                <li>
                    <NavLink
                        to="/tasks"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Tasks
                    </NavLink>
                </li>
            </ul>
            <p className="user-name" style={{ color: 'white' }}>{user?.name.first}</p>
        </nav>
    );
};

export default Navbar;
