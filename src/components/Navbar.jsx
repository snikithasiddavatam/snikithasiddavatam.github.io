import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navLinks = [
    { label: "About",      href: "#about"      },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects"   },
    { label: "Contact",    href: "#contact"    },
]

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/[0.06] ${
            scrolled ? "bg-slate-950/80 backdrop-blur-md" : "bg-slate-950/20 backdrop-blur-sm"
        }`}>
            <div className="max-w-3xl mx-auto px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">

                    {/* Logo / name */}
                    <a href="#" className="text-base sm:text-lg font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
                        snikitha<span className="text-sky-400">.</span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-gray-400 hover:text-white text-sm transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuIsOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-950/95 backdrop-blur-sm border-t border-white/10">
                    <div className="flex flex-col px-6 py-3 gap-1">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="text-gray-300 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
