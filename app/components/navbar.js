
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigateTo = (p) => {
        router.push(p);
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-lg px-4 py-3 md:px-8 md:py-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img className="h-8 md:h-10 w-auto" src="/assets/logo-dark.webp" alt="Restaurant Logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8">
                        <button onClick={() => navigateTo('/')} className="text-gray-700 hover:text-amber-600 text-base lg:text-lg font-medium">Home</button>
                        <button onClick={() => navigateTo('/contact')} className="text-gray-700 hover:text-amber-600 text-base lg:text-lg font-medium">Contact</button>
                        <button onClick={() => navigateTo('/register')} className="text-gray-700 hover:text-amber-600 text-base lg:text-lg font-medium">Register</button>
                        <button onClick={() => navigateTo('/shop')} className="text-gray-700 hover:text-amber-600 text-base lg:text-lg font-medium">Shop</button>
                    </div>

                    {/* Cart and Mobile Menu */}
                    <div className="flex items-center space-x-3">
                        {/* Cart Icon - Desktop Only */}
                        <div className="hidden md:block">
                            <button className="relative bg-gray-800 text-white p-2 rounded-full">
                                <i className="fas fa-shopping-cart text-sm"></i>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button 
                                onClick={toggleMenu}
                                className="text-gray-700 p-2 text-xl"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? '✕' : '☰'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="space-y-2">
                            <button 
                                onClick={() => navigateTo('/')}
                                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base"
                            >
                                Home
                            </button>
                            <button 
                                onClick={() => navigateTo('/contact')}
                                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base"
                            >
                                Contact
                            </button>
                            <button 
                                onClick={() => navigateTo('/register')}
                                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base"
                            >
                                Register
                            </button>
                            <button 
                                onClick={() => navigateTo('/shop')}
                                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-amber-600 text-base"
                            >
                                Shop
                            </button>
                           
                            {/* Mobile Cart */}
                            <div className="px-3 py-2">
                                <button onClick={() => navigateTo('/cart')} className="flex items-center space-x-2 text-gray-700 hover:text-amber-600">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span>Cart (2)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}