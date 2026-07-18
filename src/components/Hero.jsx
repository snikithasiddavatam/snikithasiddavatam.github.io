import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-6 sm:px-8 pt-40 pb-28">
            <div className="max-w-3xl">
                <span className="anim-fade-in-1 inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    CppCon 2026 Speaker
                </span>

                <h1 className="anim-fade-in-1 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none mb-8">
                    <span className="text-accent">Snikitha</span>{" "}
                    <span className="text-heading">Siddavatam</span>
                </h1>

                <p className="anim-fade-in-2 text-xl sm:text-2xl text-body mb-7">
                    Undergraduate at <strong className="font-semibold text-heading">UW&ndash;Madison</strong>, studying CS &amp; Data Science.
                </p>

                <p className="anim-fade-in-3 text-base sm:text-lg text-muted leading-relaxed mb-10">
                    I build at the intersection of{" "}
                    <strong className="font-semibold text-strong">parallel systems and AI</strong> — currently a{" "}
                    <strong className="font-semibold text-strong">Research Software Engineer Fellow at CHTC</strong>{" "}
                    working on HTCondor, and a contributor to{" "}
                    <a
                        href="https://github.com/taskflow/taskflow"
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors"
                    >
                        Taskflow
                    </a>{" "}
                    under Dr. Tsung-Wei Huang, researching the verification of task-parallel programming
                    systems — work I&apos;ll be presenting at{" "}
                    <strong className="font-semibold text-strong">CppCon 2026 (Main Program)</strong>.
                    Before college, I spent a lot of time on programming contests, including{" "}
                    <strong className="font-semibold text-strong">2&times; IOITC qualifications</strong>.
                </p>

                {/* ── Links ─────────────────────────────────────────── */}
                <div className="anim-fade-in-4 flex flex-wrap items-center gap-3">
                    <a
                        href="https://github.com/snikithasiddavatam"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-ink text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/snikitha-siddavatam-88094421a/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-edge-strong bg-chip text-sm font-medium text-strong hover:bg-chip-hover transition-colors"
                    >
                        <FaLinkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}
