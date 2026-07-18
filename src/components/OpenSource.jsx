import { useRef, useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"

const contributions = [
    {
        title: "Taskflow",
        description: "A general-purpose task-parallel programming system in C++ for writing high-performance parallel programs. Supports task dependency graphs, conditional tasking, GPU acceleration via CUDA, and a built-in profiler. Header-only, C++20, 12k+ stars.",
        url: "https://github.com/taskflow/taskflow",
        tags: ["c++", "cuda", "parallel-computing"],
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

export default function OpenSource() {
    return (
        <section id="open-source" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-edge">
            <RevealSection>
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-accent/60" />
                    <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Open Source</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-12">Contributions</h2>
            </RevealSection>

            {contributions.length === 0 ? (
                <RevealSection delay={100}>
                    <div className="rounded-2xl border border-edge bg-surface p-8 flex flex-col items-center gap-3 text-center">
                        <FaGithub className="w-8 h-8 text-faint" />
                        <p className="text-sm text-faint">Open source contributions coming soon.</p>
                    </div>
                </RevealSection>
            ) : (
                <div className="grid grid-cols-1 gap-5">
                    {contributions.map((item, i) => (
                        <RevealSection key={item.title} delay={i * 120}>
                            <div className="rounded-2xl border border-edge bg-surface p-7 sm:p-8 hover:border-edge-strong transition-colors flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-heading">{item.title}</h3>
                                    {item.url && (
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-accent transition-colors">
                                            <FaGithub className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm sm:text-base text-muted leading-relaxed">{item.description}</p>
                                {item.tags && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full border border-edge bg-chip text-muted">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </RevealSection>
                    ))}
                </div>
            )}
        </section>
    )
}
