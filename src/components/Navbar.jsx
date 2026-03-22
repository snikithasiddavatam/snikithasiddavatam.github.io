import { Menu } from "lucide-react"
import { X } from "lucide-react"
import { useState } from "react";
export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img />

                    </div>
                    <span className="text-lg sm:text-xl md:text-2xl font-medium">
                        <span>Snikitha </span>
                        <span>Siddavatam</span>
                    </span>

                </div>
                {/* Nav Links */}
                <div className="hidden md:flex items-center space-x-6 lg: space-x-8">
                    <a href="#about" className="text-gray-300 hover:text-white text-sm lg:text-base">About</a>
                    <a href="#experience" className="text-gray-300 hover:text-white text-sm lg:text-base">Experience</a>
                    <a href="#projects" className="text-gray-300 hover:text-white text-sm lg:text-base">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white text-sm lg:text-base">Contact</a>
                </div>

                <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                    {mobileMenuIsOpen ? (<X className="w-5 h-5 sm:w-6 sm:h-6" />):(
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                    )
                    }
    
                </button>
                
            </div>
            
        </div>
        {mobileMenuIsOpen && (
            <div className="md:hidden bg-slate-950/95 backdrop-blur-sm border-t border-white/10">
                <div className="flex flex-col px-4 py-3 space-y-1">
                    <a href="#about" onClick={() => setMobileMenuIsOpen(false)} className="text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">About</a>
                    <a href="#experience" onClick={() => setMobileMenuIsOpen(false)} className="text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">Experience</a>
                    <a href="#projects" onClick={() => setMobileMenuIsOpen(false)} className="text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">Projects</a>
                    <a href="#contact" onClick={() => setMobileMenuIsOpen(false)} className="text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-colors">Contact</a>
                </div>
            </div>
        )}
    </nav>
}