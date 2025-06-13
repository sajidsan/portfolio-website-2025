
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '@/pages/HomePage'

export default function Header() {
    return (
        <header className= "fixed top-0 w-full z-50 bg-white/40 backdrop-blur-sm  text-neutral-900">
            <div className="flex items-center justify-between mx-auto px-4 sm:mx-32 sm:px-24 py-4">
            <Link 
                        to="/" 
                        className="text-lg font-semibold hover:text-blue-700">
                        Sajid Reshamwala
            </Link>
                
                <nav className="space-x-8">
                    <a href="#about" className="hover:text-blue-500">About</a>
                    <a href="#projects" className="hover:text-blue-700">Projects</a>
                    <a href="#contact" className="hover:text-blue-700">Contact</a>
                </nav>
            </div>
        </header>
    );
}