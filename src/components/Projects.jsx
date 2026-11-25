import Section from "./Section"

const projects = [
    {
        title: "ARES: Autonomous AI Air Traffic Control System",
        subtitle: null,
        description:
            "A multi-agent AI system that autonomously manages air traffic with real-time conflict detection, predictive trajectory modeling, and automated clearances.",
        tags: ["React", "TypeScript", "Mapbox", "WebSocket", "Claude", "ElevenLabs"],
        github: "https://github.com/Tactacion/Ares-hackathon",
        demo: null,
        year: "Nov 2025",
        bullets: [
            "Built a 3D airspace visualization dashboard with 2-second WebSocket updates and NTSB-based risk scoring from 40,000+ incidents.",
            "Integrated Claude for coordinated agent reasoning and ElevenLabs for ATC-grade, urgency-adaptive voice communication.",
        ],
    },
]

export default function Projects() {
    return (
        <Section id="projects" title="Projects">
            <div className="space-y-7">
                {projects.map((p) => (
                    <div key={p.title} className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-8">
                        <p className="text-muted whitespace-nowrap">{p.year}</p>
                        <div>
                        <p>
                            <span className="text-heading font-semibold">{p.title}</span>
                            {p.github && (
                                <> &middot; <a href={p.github} target="_blank" rel="noreferrer" className="link">code</a></>
                            )}
                            {p.demo && (
                                <> &middot; <a href={p.demo} target="_blank" rel="noreferrer" className="link">demo</a></>
                            )}
                        </p>
                        {p.subtitle && <p><em>{p.subtitle}</em></p>}
                        <p className="mt-1">{p.description}</p>
                        {p.bullets && (
                            <ul className="mt-1 list-disc pl-5 space-y-1">
                                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                        )}
                        <p className="mt-1 text-muted text-base">{p.tags.join(" · ")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
