import { useEffect, useRef } from "react"

const CDN = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg"
const hobbies = [
    { img: `${CDN}/1f3a8.svg`, label: "painting"     },
    { img: `${CDN}/1f9f3.svg`, label: "traveling"    },
    { img: `${CDN}/1f93f.svg`, label: "scuba diving" },
    { img: "https://openmoji.org/data/color/svg/1F9C1.svg", label: "baking" },
    { img: `${CDN}/1f9f6.svg`, label: "crocheting"   },
]

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
        <section id="about" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
            <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-accent/60" />
                <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">About</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-10">About me</h2>

            <RevealSection>
                <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-3xl">
                    Hello! I&apos;m a{" "}
                    <strong className="font-semibold text-gray-200">Computer Science and Data Science</strong>{" "}
                    student at{" "}
                    <strong className="font-semibold text-gray-200">UW&ndash;Madison</strong>
                    , building at the intersection of performance and purpose — because powerful technology should protect as much as it advances.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed mb-16 max-w-3xl">
                    I&apos;ve qualified twice for the{" "}
                    <strong className="font-semibold text-gray-200">International Olympiad in Informatics Training Camp (IOITC)</strong>
                    , and I bring that competitive edge to everything I build. Currently, I&apos;m engineering AI and data systems at{" "}
                    <strong className="font-semibold text-gray-200">LayeredAI</strong>
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
                    <strong className="font-semibold text-gray-200">verification of task-parallel programming systems</strong>
                    {" "}under the mentorship of Dr. Tsung-Wei Huang. This summer, I&apos;m at the{" "}
                    <strong className="font-semibold text-gray-200">Center for High-Throughput Computing (CHTC)</strong>
                    {" "}working on HTCondor.
                </p>
            </RevealSection>

            {/* ── Hobbies ─────────────────────────────────────────────── */}
            <RevealSection>
                <p className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Outside the terminal</p>
                <div className="flex flex-wrap gap-3 mb-16">
                    {hobbies.map(({ img, label }) => (
                        <span
                            key={label}
                            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-gray-300"
                        >
                            <img src={img} alt="" className="w-5 h-5 object-contain" />
                            {label}
                        </span>
                    ))}
                </div>
            </RevealSection>

            {/* ── Tech stack ──────────────────────────────────────────── */}
            <RevealSection>
                <p className="font-mono text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">Tech I work with</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {techStack.map(({ category, items }) => (
                        <div key={category}>
                            <p className="text-sm font-semibold text-gray-200 mb-3">{category}</p>
                            <div className="flex flex-col gap-1.5">
                                {items.map((item) => (
                                    <span
                                        key={item}
                                        className="font-mono text-xs px-2.5 py-1 rounded-full w-fit border border-white/[0.08] bg-white/[0.03] text-gray-400"
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
