import Navbar from "./Navbar";
import logo from "../../img/logo.png";

function Header() {
    return (
        <header className='w-full z-10 h-12 flex justify-between p-8 bg-custom-darkblue'>
            <div className="flex gap-2 h-full justify-center items-center">
                <img src={logo} className="w-8 h-8 " alt="CostPilot Logo" />
                <h1 className="font-semibold text-2xl text-white tracking-wide">CostPilot</h1>
            </div>
            <Navbar />
        </header>
    )
}
export default Header