import { useState, useRef, useEffect } from "react"

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
    {
        title: "ARES — Aerial Risk Evaluation System",
        subtitle: "Autonomous Air Traffic Control powered by Multi-Agent AI",
        description:
            "Autonomous ATC system running 5 specialized AI agents in parallel — detecting separation violations, resolving conflicts, synthesizing voice clearances, forecasting weather risk, and optimizing arrival flows in real time.",
        tags: ["Python", "React", "FastAPI", "GPT-4", "WebSocket", "Redis", "Mapbox", "ElevenLabs"],
        color: "sky",
        size: "wide",
        github: "https://github.com/Tactacion/Ares-hackathon",
        demo: null,
        year: "2025",
        stat: { value: "5", label: "AI agents in parallel" },
        bullets: [
            "Risk Detection · Conflict Resolution · Weather Advisory · Approach Sequencing · Voice Comms",
            "Live flight tracking via OpenSky Network with real-time risk scoring from NTSB incident data",
            "6-hour weather forecast timeline + conflict predictor at NOW / +5 / +10 / +15 min horizons",
        ],
    },
]


const colorMap = {
    rose:   {
        border: "border-rose-500/25",
        glow:   "rgba(244,63,94,0.15)",
        badge:  "bg-rose-900/50 text-rose-300",
        title:  "text-rose-200",
        tag:    "bg-rose-950/60 text-rose-300 border border-rose-500/20",
        stat:   "text-rose-300",
        line:   "from-rose-500/60 to-transparent",
    },
    sky:    {
        border: "border-sky-500/25",
        glow:   "rgba(14,165,233,0.15)",
        badge:  "bg-sky-900/50 text-sky-300",
        title:  "text-sky-200",
        tag:    "bg-sky-950/60 text-sky-300 border border-sky-500/20",
        stat:   "text-sky-300",
        dot:    "bg-sky-400",
        line:   "from-sky-500/60 to-transparent",
    },
    violet: {
        border: "border-violet-500/25",
        glow:   "rgba(139,92,246,0.15)",
        badge:  "bg-violet-900/50 text-violet-300",
        title:  "text-violet-200",
        tag:    "bg-violet-950/60 text-violet-300 border border-violet-500/20",
        stat:   "text-violet-300",
        line:   "from-violet-500/60 to-transparent",
    },
    green:  {
        border: "border-green-500/25",
        glow:   "rgba(34,197,94,0.15)",
        badge:  "bg-green-900/50 text-green-300",
        title:  "text-green-200",
        tag:    "bg-green-950/60 text-green-300 border border-green-500/20",
        stat:   "text-green-300",
        line:   "from-green-500/60 to-transparent",
    },
    orange: {
        border: "border-orange-500/25",
        glow:   "rgba(249,115,22,0.15)",
        badge:  "bg-orange-900/50 text-orange-300",
        title:  "text-orange-200",
        tag:    "bg-orange-950/60 text-orange-300 border border-orange-500/20",
        stat:   "text-orange-300",
        line:   "from-orange-500/60 to-transparent",
    },
}

// ── mouse-tracking spotlight card ─────────────────────────────────────────
function ProjectCard({ project, visible }) {
    const cardRef = useRef(null)
    const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%", opacity: 0 })
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const c = colorMap[project.color]

    function handleMouseMove(e) {
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2
        setSpotlight({ x: `${x}px`, y: `${y}px`, opacity: 1 })
        setTilt({
            x: ((y - cy) / cy) * 6,
            y: -((x - cx) / cx) * 6,
        })
    }

    function handleMouseLeave() {
        setSpotlight((s) => ({ ...s, opacity: 0 }))
        setTilt({ x: 0, y: 0 })
    }

    const gridClass =
        project.size === "wide"
            ? "md:col-span-2"
            : project.size === "tall"
            ? "md:row-span-2"
            : ""

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: tilt.x === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
            }}
            className={`
                group relative overflow-hidden rounded-2xl border ${c.border}
                bg-[#0a0a0f] flex flex-col p-6 cursor-default
                ${gridClass}
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                transition-all duration-700
            `}
        >
            {/* mouse spotlight */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                style={{
                    opacity: spotlight.opacity,
                    background: `radial-gradient(300px circle at ${spotlight.x} ${spotlight.y}, ${c.glow}, transparent 70%)`,
                }}
            />

            {/* top colour line */}
            <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${c.line}`} />

            {/* header */}
            <div className="flex items-start justify-between gap-2 mb-5">
                <span className="text-[11px] text-gray-600 font-mono">{project.year}</span>
            </div>

            {/* title */}
            <h3 className={`text-xl font-bold leading-snug ${c.title}`}>
                {project.title}
            </h3>

            {/* subtitle */}
            {project.subtitle && (
                <p className="text-xs text-gray-500 mt-1 italic">{project.subtitle}</p>
            )}

            {/* stat callout */}
            {project.stat && (
                <div className="mt-3 mb-4">
                    <span className={`text-4xl font-black tracking-tight leading-none ${c.stat}`}>{project.stat.value}</span>
                    <span className="text-xs text-gray-500 ml-2">{project.stat.label}</span>
                </div>
            )}

            {/* description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {project.description}
            </p>

            {/* bullet points */}
            {project.bullets && (
                <ul className="space-y-1.5 mb-5">
                    {project.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-500 leading-relaxed">
                            <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${c.dot}`} />
                            {b}
                        </li>
                    ))}
                </ul>
            )}

            {/* tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                    <span key={tag} className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${c.tag}`}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* links */}
            <div className="flex items-center gap-4 mt-auto">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-white transition-colors group/link"
                    >
                        <FaGithub className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
                        <span>Code</span>
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-white transition-colors group/link"
                    >
                        <FaExternalLinkAlt className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
                        <span>Live</span>
                    </a>
                )}
            </div>
        </div>
    )
}

// ── scroll-reveal wrapper ──────────────────────────────────────────────────
function RevealCard({ project, delay }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={project.size === "wide" ? "md:col-span-2" : project.size === "tall" ? "md:row-span-2" : ""}
        >
            <ProjectCard project={project} visible={visible} />
        </div>
    )
}

// ── main section ───────────────────────────────────────────────────────────
export default function Projects() {
    return (
        <section id="projects" className="max-w-3xl mx-auto px-8 py-24">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                <p className="text-sm text-gray-600">Things I&apos;ve built — from systems to intelligence.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {projects.map((project, i) => (
                    <RevealCard key={project.title} project={project} delay={i * 120} />
                ))}
            </div>
        </section>
    )
}
