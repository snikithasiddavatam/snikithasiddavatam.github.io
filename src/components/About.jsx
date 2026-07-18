import { useEffect, useRef } from "react"

const techStack = [
    { category: "Languages",    items: ["Python", "C++", "JavaScript", "SQL"] },
    { category: "Frameworks",   items: ["React", "FastAPI", "Tailwind CSS", "Vite"] },
    { category: "Tools & Infra", items: ["Redis", "WebSocket", "Git", "OpenSky API"] },
    { category: "AI & Data",    items: ["RAG Pipelines", "Vector Search", "GPT-4 API", "ElevenLabs"] },
]

function useReveal(ref) {
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) el.classList.add("visible") },
            { threshold: 0.1 }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [ref])
}

function RevealSection({ children, className = "" }) {
    const ref = useRef(null)
    useReveal(ref)
    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    )
}

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-edge">
            <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-accent/60" />
                <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">About</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-10">About me</h2>

            <RevealSection>
                <p className="text-lg text-muted leading-relaxed mb-6 max-w-3xl">
                    Hello! I&apos;m a{" "}
                    <strong className="font-semibold text-strong">Computer Science and Data Science</strong>{" "}
                    student at{" "}
                    <strong className="font-semibold text-strong">UW&ndash;Madison</strong>
                    , building at the intersection of performance and purpose — because powerful technology should protect as much as it advances.
                </p>
                <p className="text-lg text-muted leading-relaxed mb-16 max-w-3xl">
                    I&apos;ve qualified twice for the{" "}
                    <strong className="font-semibold text-strong">International Olympiad in Informatics Training Camp (IOITC)</strong>
                    , and I bring that competitive edge to everything I build. Currently, I&apos;m engineering AI and data systems at{" "}
                    <strong className="font-semibold text-strong">LayeredAI</strong>
                    , contributing to{" "}
                    <a
                        href="https://github.com/taskflow/taskflow"
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors"
                    >
                        Taskflow
                    </a>
                    {" "}— a modern C++ framework for general-purpose task-parallel programming — through the Open Source Program Office, and conducting research on the{" "}
                    <strong className="font-semibold text-strong">verification of task-parallel programming systems</strong>
                    {" "}under the mentorship of Dr. Tsung-Wei Huang. This summer, I&apos;m at the{" "}
                    <strong className="font-semibold text-strong">Center for High-Throughput Computing (CHTC)</strong>
                    {" "}working on HTCondor.
                </p>
            </RevealSection>

            {/* ── Tech stack ──────────────────────────────────────────── */}
            <RevealSection>
                <p className="font-mono text-xs tracking-[0.2em] text-faint uppercase mb-6">Tech I work with</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {techStack.map(({ category, items }) => (
                        <div key={category}>
                            <p className="text-sm font-semibold text-strong mb-3">{category}</p>
                            <div className="flex flex-col gap-1.5">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="font-mono text-xs px-2.5 py-1 rounded-full w-fit border border-edge bg-chip text-muted"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </RevealSection>
        </section>
    )
}
