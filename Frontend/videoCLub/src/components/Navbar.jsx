import { useState } from "react";



function Navbar() {
    const [navbar, setNavbar] = useState(false);
	return (
    <div className='  '>
         <nav className="text-center bg-center  bg-[url(https://user-images.githubusercontent.com/116750999/217895729-10a5baf8-52af-4983-8d58-85a8625a540a.jpg)]  dark:bg-[url(https://user-images.githubusercontent.com/116750999/217899197-940cabaa-0cc7-460a-b168-2338e6f7559f.jpg)]">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                       <a href="#Aboutus" class="flex items-center">
                         <span class="self-center text-xl font-semibold whitespace-nowrap text-black">MovieDB</span>
                          </a>
                        <div className="md:hidden">
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black hover:text-black ">
                                <a href="#aboutus">Añadir pelicula</a>
                            </li>
                            <li className="text-black hover:text-black">
                                <a href="#rooms">Lista de peliculas</a>
                           
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navbar;