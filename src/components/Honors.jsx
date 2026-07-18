import { useRef, useState, useEffect } from "react"

const honors = [
    {
        title: "CppCon 2026 Speaker",
        date: "2026",
        note: "Presenting “Leveraging LLM to Generate Unittests for Notifiers in Taskflow” in the main program of CppCon, the largest C++ conference in the world.",
    },
    {
        title: "Grace Hopper Celebration (GHC) 2026 Scholarship Recipient",
        org: "UW–Madison Computer Sciences Department",
        date: "2026",
        note: "Awarded the Computer Sciences departmental scholarship to attend the Grace Hopper Celebration, the world's largest gathering of women technologists.",
    },
    {
        title: "Y Combinator Startup School 2026",
        date: "2026",
        note: "Selected participant.",
    },
    {
        title: "Jane Street First-Year Trading & Technology Program",
        date: "2025",
        note: "Selected as 1 of 100 students across the U.S. and Canada.",
    },
    {
        title: "ICPC Algo Queen Programming Cup — Gold Medal",
        date: "2023",
    },
    {
        title: "IOITC — International Olympiad in Informatics Training Camp",
        date: "2022–23",
        note: "Top 6 nationally, two consecutive years.",
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

export default function Honors() {
    return (
        <section id="honors" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-edge">
            <RevealSection>
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-accent/60" />
                    <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Honors &amp; Awards</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-12">Recognition</h2>
            </RevealSection>

            <div className="divide-y divide-edge border-t border-b border-edge">
                {honors.map((honor, i) => (
                    <RevealSection key={honor.title} delay={i * 120}>
                        <div className="grid sm:grid-cols-[11rem_1fr] gap-3 sm:gap-8 py-9">
                            <div className="font-mono text-sm text-faint pt-1">{honor.date}</div>
                            <div>
                                <h3 className="text-xl font-bold text-heading leading-snug mb-1">
                                    {honor.title}
                                </h3>
                                {honor.org && (
                                    <p className="text-sm font-medium text-body mb-2">{honor.org}</p>
                                )}
                                {honor.note && (
                                    <p className="text-sm text-muted leading-relaxed">{honor.note}</p>
                                )}
                            </div>
                        </div>
                    </RevealSection>
                ))}
            </div>
        </section>
    )
}
