import { useRef, useState, useEffect } from "react"

const talks = [
    {
        title: "Leveraging LLM to Generate Unittests for Notifiers in Taskflow",
        venue: "CppCon 2026",
        detail: "Main Program Speaker",
        note: "Accepted to the main program of CppCon, the largest C++ conference in the world.",
    },
]

const research = [
    {
        title: "Verification of Task-Parallel Programming Systems",
        advisor: "Dr. Tsung-Wei Huang",
        status: "Ongoing",
    },
    {
        title: "LLM Citation Hallucinations",
        advisor: "Dr. Grigoris Chrysos",
        status: "Ongoing",
    },
]

function RevealSection({ children, delay = 0 }) {
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

export default function Research() {
    return (
        <section id="research" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-edge">
            <RevealSection>
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-accent/60" />
                    <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Research</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-12">Research &amp; talks</h2>
            </RevealSection>

            <div className="divide-y divide-edge border-t border-b border-edge">
                {research.map((item, i) => (
                    <RevealSection key={item.title} delay={i * 120}>
                        <div className="grid sm:grid-cols-[11rem_1fr] gap-3 sm:gap-8 py-9">
                            <div className="pt-1">
                                <span className="inline-flex items-center gap-2 font-mono text-xs text-emerald-600 dark:text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                                    {item.status}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-heading leading-snug mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted">
                                    under <span className="text-body font-medium">{item.advisor}</span>
                                </p>
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>

            {/* ── Talks ───────────────────────────────────────────────── */}
            <RevealSection>
                <p className="font-mono text-xs tracking-[0.2em] text-faint uppercase mt-16 mb-6">Talks</p>
            </RevealSection>
            <div className="grid grid-cols-1 gap-5">
                {talks.map((talk, i) => (
                    <RevealSection key={talk.title} delay={i * 120}>
                        <div className="rounded-2xl border border-edge bg-surface p-7 sm:p-8 hover:border-edge-strong transition-colors">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span className="font-mono text-sm text-faint">{talk.venue}</span>
                                <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent">
                                    {talk.detail}
                                </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-heading leading-snug mb-3">
                                {talk.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted leading-relaxed">{talk.note}</p>
                        </div>
                    </RevealSection>
                ))}
            </div>
        </section>
    )
}
