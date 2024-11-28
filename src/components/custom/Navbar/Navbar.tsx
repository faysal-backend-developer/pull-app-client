// components/Navbar.tsx
"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons for Menu and X
import Link from 'next/link';

const Navbar: React.FC = () => {
    const routers = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/about",
            name: "About",
        }
    ]
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Toggle the menu open/close on mobile
    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };
    return (
        <nav className="flex justify-between items-center p-4 border-b ">
            {/* Left side - Logo */}
            <div className="text-xl font-semibold">MyBrand</div>

            {/* Right side - Mobile menu icon (hidden on desktop, shown on mobile) */}
            <div className="block lg:hidden">
                <button
                    onClick={toggleNav}
                    className="text-2xl transition-transform transform duration-300"
                >
                    {/* Display X icon when menu is open, Menu icon when closed */}
                    {isNavOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 " />
                    )}
                </button>
            </div>
            {/* Fullscreen Mobile Menu - Hidden by default */}
            <div
                className={`lg:hidden fixed inset-0 bg-black bg-opacity-95 text-white transition-all duration-500 transform ${isNavOpen ? 'opacity-100 z-50 translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
                    }`}
            >
                <div className="flex justify-end items-start p-4 lg:hidden">
                    <button
                        onClick={toggleNav}
                        className="text-2xl transition-transform transform duration-300"
                    >
                        {/* Display X icon when menu is open, Menu icon when closed */}
                        {isNavOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : ""}
                    </button>
                </div>
                <div className=' flex flex-col justify-center items-center h-full'>
                    <ul className="space-y-6 text-2xl">
                        {
                            routers.map((el, i) => {
                                return <li onClick={() => setIsNavOpen(false)} key={i}> <Link href={el?.path}>{el?.name}</Link> </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            {/* Desktop menu (always visible on desktop) */}
            <ul className='hidden lg:flex space-x-6'>
                {
                    routers.map((el, i) => {
                        return <li onClick={() => setIsNavOpen(false)} key={i}> <Link href={el?.path}>{el?.name}</Link> </li>
                    })
                }
            </ul>
        </nav>
    );
};
export default Navbar;

