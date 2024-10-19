"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">MyWebsite</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                        <Link href="/dashboard" className="hover:text-gray-300">dashboard</Link>
                        <Link href="/profile" className="hover:text-gray-300">profile</Link>
                    </div>
                    <div className="flex md:hidden items-center">
                        <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
                        <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Dashboard</Link>
                        <Link href="/profile" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Profile</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
