import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();

    return (
        <ul className="flex space-x-4 h-full items-center text-custom-lightgray">
            <li>
                <Link to="/" 
                className={`hover:text-custom-yellow ${location.pathname === '/' ? 'text-custom-yellow' : ''}`}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/company" 
                className={`hover:text-custom-yellow ${location.pathname === '/company' ? 'text-custom-yellow' : ''}`}>
                    Company
                </Link>
            </li>
            <li>
                <Link to="/newproject" 
                className={`hover:text-custom-yellow ${location.pathname === '/newproject' ? 'text-custom-yellow' : ''}`}>
                    NewProject
                </Link>
            </li>
            <li>
                <Link to="/contact" 
                className={`hover:text-custom-yellow ${location.pathname === '/contact' ? 'text-custom-yellow' : ''}`}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}
export default Navbar