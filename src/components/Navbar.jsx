import { Menu, X, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark"
    return (
        localStorage.theme ??
        (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    )
}

const navLinks = [
    { label: "About",       href: "#about"        },
    { label: "Experience",  href: "#experience"   },
    { label: "Projects",    href: "#projects"     },
    { label: "Open Source", href: "#open-source"  },
    { label: "Research",    href: "#research"     },
    { label: "Honors & Awards", href: "#honors"   },
    { label: "Contact",     href: "#contact"      },
]

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.theme = theme
    }, [theme])

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-edge ${
            scrolled ? "bg-ink/85 backdrop-blur-md" : "bg-ink/30 backdrop-blur-sm"
        }`}>
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo / name */}
                    <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <span className="w-8 h-8 rounded-lg bg-heading text-ink font-mono font-semibold text-xs flex items-center justify-center">
                            SS
                        </span>
                        <span className="font-mono text-sm text-heading tracking-tight">
                            Snikitha&apos;s Website
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="text-muted hover:text-heading text-sm transition-colors underline-offset-8 decoration-2 decoration-accent hover:underline"
                            >
                                {label}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 rounded-lg text-muted hover:text-heading hover:bg-chip-hover transition-colors"
                        >
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="md:hidden flex items-center gap-1">
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            className="p-2 text-muted hover:text-heading transition-colors"
                        >
                            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            className="p-2 text-muted hover:text-heading transition-colors"
                            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuIsOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile drawer */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-ink/95 backdrop-blur-sm border-t border-edge">
                    <div className="flex flex-col px-6 py-3 gap-1">
                        {navLinks.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setMobileMenuIsOpen(false)}
                                className="text-body hover:text-heading text-sm py-2 px-3 rounded-lg hover:bg-chip-hover transition-colors"
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
