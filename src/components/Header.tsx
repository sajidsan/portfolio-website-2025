
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '@/pages/HomePage'

export default function Header() {
    return (
        <header className= "fixed top-0 z-50 bg-white text-neutral-900 border-neutral-200">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
                        to="/" 
                        className="text-lg font-semibold hover:text-blue-700">
                        Sajid Reshamwala
            </Link>
                
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-blue-500">About</a>
                    <a href="#projects" className="hover:text-blue-700">Projects</a>
                    <a href="#contact" className="hover:text-blue-700">Contact</a>
                </nav>
            </div>
        </header>
    );
}