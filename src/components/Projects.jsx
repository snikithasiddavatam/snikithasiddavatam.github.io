import { useState, useRef, useEffect } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
    {
        title: "ARES — Aerial Risk Evaluation System",
        subtitle: "Autonomous Air Traffic Control powered by Multi-Agent AI",
        description:
            "Autonomous ATC system running 5 specialized AI agents in parallel — detecting separation violations, resolving conflicts, synthesizing voice clearances, forecasting weather risk, and optimizing arrival flows in real time.",
        tags: ["python", "react", "fastapi", "gpt-4", "websocket", "redis", "mapbox", "elevenlabs"],
        github: "https://github.com/Tactacion/Ares-hackathon",
        demo: null,
        year: "2025",
        bullets: [
            "Risk Detection · Conflict Resolution · Weather Advisory · Approach Sequencing · Voice Comms",
            "Live flight tracking via OpenSky Network with real-time risk scoring from NTSB incident data",
            "6-hour weather forecast timeline + conflict predictor at NOW / +5 / +10 / +15 min horizons",
        ],
    },
]

function RevealCard({ children, delay = 0 }) {
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
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            {children}
        </div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
            <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-accent/60" />
                <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12">Selected work</h2>

            <div className="grid grid-cols-1 gap-5">
                {projects.map((project, i) => (
                    <RevealCard key={project.title} delay={i * 120}>
                        <div className="rounded-2xl border border-white/[0.08] bg-surface p-7 sm:p-8 hover:border-white/[0.15] transition-colors">
                            <span className="font-mono text-xs text-gray-500">{project.year}</span>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-100 leading-snug mt-2">
                                {project.title}
                            </h3>

                            {project.subtitle && (
                                <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
                            )}

                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4 mb-4">
                                {project.description}
                            </p>

                            {project.bullets && (
                                <ul className="space-y-2 mb-6">
                                    {project.bullets.map((b, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                                            <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-accent/70" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="font-mono text-xs px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-gray-400"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-5">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition-colors"
                                    >
                                        <FaGithub className="w-4 h-4" />
                                        <span>Code</span>
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition-colors"
                                    >
                                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                        <span>Live</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </RevealCard>
                ))}
            </div>
        </section>
    )
}
