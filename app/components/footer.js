

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-8">
                    
                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.
                        </p>
                        
                        <div className="flex space-x-3 mt-6">
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white text-sm w-8 h-8 flex items-center justify-center">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white text-sm w-8 h-8 flex items-center justify-center">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white text-sm w-8 h-8 flex items-center justify-center">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-white text-sm w-8 h-8 flex items-center justify-center">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white">Company Profile</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li><a href="#" className="hover:text-white">Career</a></li>
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start space-x-3">
                                <div className="bg-amber-400 p-2 rounded flex-shrink-0 mt-1">
                                    <i className="fas fa-map-marker-alt text-white text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-sm">175 10h Street, Office 375</p>
                                    <p className="text-sm">Berlin, De 21562</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="bg-amber-400 p-2 rounded flex-shrink-0">
                                    <i className="fas fa-phone text-white text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-sm">+123 34598768</p>
                                    <p className="text-sm">+554 34598734</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="bg-amber-400 p-2 rounded flex-shrink-0">
                                    <i className="fas fa-envelope text-white text-sm"></i>
                                </div>
                                <p className="text-sm">food@restan.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Join our subscribers list to get the latest news and special offers.
                        </p>
                        
                        <div className="space-y-3">
                            <div className="flex items-end">
                                <input 
                                    type="email" 
                                    placeholder="Your Email"
                                    className="flex-1 px-0 py-2 bg-transparent border-0 border-b-2 border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-amber-600"
                                />
                                <button className="px-3 py-2 ml-3 bg-amber-600 hover:bg-amber-700 text-white rounded">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <input 
                                    type="checkbox" 
                                    id="privacy" 
                                    className="w-4 h-4 text-amber-600 bg-gray-800 border-gray-600 rounded focus:ring-amber-600"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-300">
                                    I agree to the Privacy Policy
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center">
                    <img className="h-6 md:h-8 mb-4 mx-auto w-auto" src="/assets/logo-light.webp" alt="Restaurant Logo" />
                    <p className="text-gray-400 text-xs md:text-sm">
                        &copy; Copyright 2025 RESTAN. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

