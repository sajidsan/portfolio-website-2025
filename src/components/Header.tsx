
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className= "fixed top-0 w-full z-50 bg-white/40 backdrop-blur-sm text-neutral-900 overflow-visible">
            <div className="relative flex items-center py-4 px-4 sm:px-6 lg:px-8 w-full">
                <Link 
                    to="/" 
                    className="text-lg font-semibold hover:text-blue-700"
                    >
                    Sajid <span className="hidden sm:inline">Reshamwala</span>
                </Link>
                <button
                    aria-label="Toggle navigation"
                    className="sm:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 96 960 960"
                        fill="currentColor"
                        className="text-neutral-900"
                    >
                        <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                    </svg>
                </button>
                <nav className="hidden sm:flex items-center space-x-8 text-sm font-medium ml-auto">
                    <Link to="/about" className="hover:text-blue-700">About</Link>
                    <Link to="/" className="hover:text-blue-700">Projects</Link>
                    <a href="https://www.linkedin.com/in/sajidreshamwala" className="hover:text-blue-700" target="_blank" rel="noreferrer">LinkedIn</a>
                </nav>
                {isOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-lg sm:hidden">
                        <nav className="flex flex-col divide-y divide-neutral-200 text-sm font-medium">
                            <Link to="/about" className="px-4 py-3 hover:bg-neutral-50" onClick={() => setIsOpen(false)}>About</Link>
                            <Link to="/" className="px-4 py-3 hover:bg-neutral-50" onClick={() => setIsOpen(false)}>Projects</Link>
                            <a
                                href="https://www.linkedin.com/in/sajidreshamwala"
                                className="px-4 py-3 hover:bg-neutral-50"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setIsOpen(false)}
                            >
                                LinkedIn
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
