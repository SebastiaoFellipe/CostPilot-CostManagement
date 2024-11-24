import Navbar from "./Navbar";
import logo from "../../img/logo.png";
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className={`${isHomePage ? 'fixed top-0' : 'bg-custom-darkblue'} w-full z-10 h-12 flex justify-between p-8`}>
            <div className="flex gap-2 h-full justify-center items-center">
                <img src={logo} className="w-8 h-8 " alt="CostPilot Logo" />
                <h1 className="font-semibold text-2xl text-white tracking-wide">CostPilot</h1>
            </div>
            <Navbar />
        </header>
    )
}
export default Header