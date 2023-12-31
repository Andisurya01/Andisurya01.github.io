import { useNavigate } from "react-router-dom";
const Navbar = () => {

    const navigate = useNavigate();
    return (
        
        <nav className="bg-neutral-900 fixed  w-full z-20 top-0 left-0 ">
            <div className=" flex flex-wrap md:max-w-screen-xl items-center justify-between mx-auto p-4">
                <a onClick={() => navigate("/")} className="flex items-center ">
                    <span className=" self-center font-bebas text-2xl whitespace-nowrap text-stone-100">ANDI SURYA PRIYADI</span>
                </a>
                <div className="flex md:order-2">
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <a onClick={() => navigate("/About")} className="block py-2 pl-3 pr-4 text-stone-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-stone-600 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a onClick={() => navigate("/Contact")} className="block py-2 pl-3 pr-4 text-stone-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-stone-600 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;