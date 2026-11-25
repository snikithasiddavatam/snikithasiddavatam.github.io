import { useState, useEffect } from "react"
import profile from "../assets/profile.jpg"

const getInitialTheme = () => {
    if (typeof window === "undefined") return "light"
    return (
        localStorage.theme ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    )
}

const navLinks = [
    { label: "Education",   href: "#education"   },
    { label: "Research",    href: "#research"    },
    { label: "Experience",  href: "#experience"  },
    { label: "Projects",    href: "#projects"    },
    { label: "Open Source", href: "#open-source" },
    { label: "Honors",      href: "#honors"      },
    { label: "Contact",     href: "#contact"     },
]

export default function Navbar() {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark")
        localStorage.theme = theme
    }, [theme])

    return (
        <aside className="mb-10 lg:mb-0">
            <div className="lg:sticky lg:top-14 flex flex-row lg:flex-col gap-6 items-start">
                <img
                    src={profile}
                    alt="Snikitha Siddavatam"
                    className="w-24 sm:w-32 lg:w-48 aspect-square object-cover object-[50%_45%] rounded-full shrink-0"
                />
                <div>
                    <h1 className="font-serif text-4xl sm:text-5xl text-heading leading-tight">
                        Snikitha Siddavatam
                    </h1>
                    <p className="text-muted mt-1">CS &amp; Data Science, UW&ndash;Madison</p>
                    <nav className="mt-5 flex flex-wrap lg:flex-col gap-x-5 gap-y-1 text-sm uppercase tracking-wider">
                        {navLinks.map(({ label, href }) => (
                            <a key={label} href={href} className="link">
                                {label}
                            </a>
                        ))}
                    </nav>
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        className="mt-5 text-sm text-muted hover:text-accent transition-colors"
                    >
                        {theme === "dark" ? "light mode" : "dark mode"}
                    </button>
                </div>
            </div>
        </aside>
    )
}
