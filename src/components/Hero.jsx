import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ArrowDown } from "lucide-react"

const roles = [
    "Software Engineer",
    "AI Systems Builder",
    "Competitive Programmer",
    "Open Source Contributor",
    "Parallel Systems Researcher",
]

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0)
    const [displayed, setDisplayed] = useState("")
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const target = roles[roleIdx]
        let t
        if (!deleting && displayed.length < target.length) {
            t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75)
        } else if (!deleting && displayed.length === target.length) {
            t = setTimeout(() => setDeleting(true), 2200)
        } else if (deleting && displayed.length > 0) {
            t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
        } else {
            setDeleting(false)
            setRoleIdx((i) => (i + 1) % roles.length)
        }
        return () => clearTimeout(t)
    }, [displayed, deleting, roleIdx])

    return (
        <div className="flex flex-col items-center justify-center h-screen relative px-8 text-center">

            {/* ── Status badge ─────────────────────────────────────── */}
            <div className="anim-fade-in-1 mb-7 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/50 text-emerald-400 text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Currently at CHTC &middot; Research Software Engineer Fellow
            </div>

            {/* ── Name ─────────────────────────────────────────────── */}
            <h1 className="anim-fade-in-2 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-3">
                <span className="text-white">Snikitha</span>
                <br />
                <span className="text-shimmer">Siddavatam</span>
            </h1>

            {/* ── Typing role ───────────────────────────────────────── */}
            <div className="anim-fade-in-3 h-8 flex items-center justify-center mb-8">
                <span className="text-lg text-gray-400 font-mono">{displayed}</span>
                <span className="ml-0.5 w-0.5 h-5 bg-sky-400 animate-pulse inline-block" />
            </div>

            {/* ── Stats row ────────────────────────────────────────── */}
            <div className="anim-fade-in-4 flex items-center gap-6 sm:gap-10 mb-9">
                <div className="text-center">
                    <div className="text-2xl font-black text-white">2×</div>
                    <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">IOITC<br />Qualifier</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                    <div className="text-2xl font-black text-white">3</div>
                    <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">Industry<br />Internships</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                    <div className="text-base font-black text-white">UW–Madison</div>
                    <div className="text-[11px] text-gray-500 mt-0.5 leading-snug">CS &times; Data<br />Science</div>
                </div>
            </div>

            {/* ── CTA buttons ──────────────────────────────────────── */}
            <div className="anim-fade-in-5 flex items-center gap-3 mb-7">
                <a
                    href="#projects"
                    className="px-6 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                    View My Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-2.5 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                    Get in Touch
                </a>
            </div>

            {/* ── Social links ─────────────────────────────────────── */}
            <div className="anim-fade-in-6 flex items-center gap-5">
                <a
                    href="https://github.com/snikithasiddavatam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub className="w-5 h-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/snikitha-siddavatam-88094421a/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="w-5 h-5" />
                </a>
            </div>

            {/* ── Scroll indicator ─────────────────────────────────── */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 animate-bounce">
                <ArrowDown className="w-4 h-4" />
            </div>
        </div>
    )
}
