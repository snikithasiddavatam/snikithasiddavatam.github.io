import { useEffect, useRef } from "react"

const experiences = [
    {
        company: "CHTC",
        location: "Madison, WI",
        role: "Research Software Engineer Fellow",
        date: "May 2026 – Present",
        bullets: [],
    },
    {
        company: "Layered AI",
        location: "Aurora, IL",
        role: "AI and Data Systems Intern",
        date: "Feb 2026 – May 2026",
        bullets: [
            "Engineered agentic AI systems, including end-to-end Retrieval-Augmented Generation (RAG) pipelines, designing ingestion workflows, embedding generation, and vector-based semantic search architectures.",
        ],
    },
    {
        company: "Open Source Program Office (OSPO)",
        location: "Madison, WI",
        role: "Open Source Intern — Taskflow (C++ Parallel Programming Library)",
        subRole: "under the mentorship of Dr. Tsung-Wei Huang",
        date: "Dec 2025 – May 2026",
        bullets: [
            "Researched concurrency correctness and scheduler nondeterminism in a production task-parallel runtime.",
            "Designed fuzzing-based tests generating 5,000+ randomized execution schedules, exposing race conditions in worker notification, sleep/wake transitions, and dynamic task availability.",
            "Analyzed thread-utilization behavior across 20+ scheduler configurations and workload profiles, identifying underutilized and oversubscribed-thread states to guide coverage metrics.",
        ],
    },
    {
        company: "Federation of Asian Biotech Associations (FABA)",
        location: "Hyderabad, India",
        role: "Software Engineer Intern",
        date: "July 2025 – Aug 2025",
        bullets: [
            "Reviewed and analyzed two website design prototypes, providing actionable suggestions to improve user experience and accessibility for 5,000+ annual visitors.",
            "Built internal dashboards with Python and SQL to analyze registration and sponsorship data, enabling data-driven marketing strategies that boosted participation by 30%.",
        ],
    },
    {
        company: "MongoDB Women in Computer Science Summit",
        location: "New York, United States",
        role: "Selected Participant",
        date: "May 2025",
        bullets: [
            "Selected as one of 45 students across the U.S. for the MongoDB Women in Computer Science (WiCS) Summit, an immersive program focused on software engineering, database technologies, and career development.",
        ],
    },
    {
        company: "Jane Street First-Year Trading and Technology Program",
        location: "New York, United States",
        role: "Selected Participant",
        date: "March 2025",
        bullets: [
            "Selected as one of 100 students across the U.S. and Canada for an immersive 3-day program centered on quantitative trading, algorithmic problem-solving, and functional programming.",
        ],
    },
]

function RevealSection({ children }) {
    const ref = useRef(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add("visible") },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])
    return <div ref={ref} className="reveal">{children}</div>
}

export default function Experience() {
    return (
        <section id="experience" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-edge">
            <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-accent/60" />
                <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-12">Where I&apos;ve worked</h2>

            <div className="divide-y divide-edge border-t border-b border-edge">
                {experiences.map((exp) => (
                    <RevealSection key={exp.company + exp.date}>
                        <div className="grid sm:grid-cols-[11rem_1fr] gap-3 sm:gap-8 py-9">
                            <div className="font-mono text-sm text-faint pt-1">{exp.date}</div>
                            <div>
                                <p className="font-mono text-xs tracking-[0.15em] text-accent uppercase mb-2">
                                    {exp.location}
                                </p>
                                <h3 className="text-xl font-bold text-heading leading-snug mb-1">
                                    {exp.company}
                                </h3>
                                <p className="text-sm font-medium text-body">{exp.role}</p>
                                {exp.subRole && (
                                    <p className="text-xs text-faint italic mt-0.5">{exp.subRole}</p>
                                )}
                                {exp.bullets.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {exp.bullets.map((b, j) => (
                                            <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                                                <span className="mt-2 w-1 h-1 rounded-full shrink-0 bg-accent/70" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>
        </section>
    )
}
