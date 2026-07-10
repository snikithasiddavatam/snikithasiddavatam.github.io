import { useRef, useState, useEffect } from "react"

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
        <section id="research" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
            <RevealSection>
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-accent/60" />
                    <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Research</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-12">Current research</h2>
            </RevealSection>

            <div className="divide-y divide-white/[0.06] border-t border-b border-white/[0.06]">
                {research.map((item, i) => (
                    <RevealSection key={item.title} delay={i * 120}>
                        <div className="grid sm:grid-cols-[11rem_1fr] gap-3 sm:gap-8 py-9">
                            <div className="pt-1">
                                <span className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    {item.status}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-100 leading-snug mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    under <span className="text-gray-300 font-medium">{item.advisor}</span>
                                </p>
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>
        </section>
    )
}
