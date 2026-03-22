import { FaRobot, FaCode, FaGlobe, FaDatabase, FaChartLine } from "react-icons/fa"

const experiences = [
    {
        company: "Layered AI",
        location: "Aurora, IL",
        role: "AI and Data Systems Intern",
        date: "Feb 2026 – Present",
        color: "rose",
        icon: FaRobot,
        bullets: [
            "Engineered agentic AI systems, including end-to-end Retrieval-Augmented Generation (RAG) pipelines, designing ingestion workflows, embedding generation, and vector-based semantic search architectures.",
        ],
    },
    {
        company: "Open Source Program Office (OSPO)",
        location: "Madison, WI",
        role: "Open Source Intern — Taskflow (C++ Parallel Programming Library)",
        subRole: "under the mentorship of Dr. Tsung-Wei Huang",
        date: "Dec 2025 – Present",
        color: "sky",
        icon: FaCode,
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
        color: "violet",
        icon: FaGlobe,
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
        color: "green",
        icon: FaDatabase,
        bullets: [
            "Selected as one of 45 students across the U.S. for the MongoDB Women in Computer Science (WiCS) Summit, an immersive program focused on software engineering, database technologies, and career development.",
        ],
    },
    {
        company: "Jane Street First-Year Trading and Technology Program",
        location: "New York, United States",
        role: "Selected Participant",
        date: "March 2025",
        color: "orange",
        icon: FaChartLine,
        bullets: [
            "Selected as one of 100 students across the U.S. and Canada for an immersive 3-day program centered on quantitative trading, algorithmic problem-solving, and functional programming.",
        ],
    },
]

const colorMap = {
    rose:   { dot: "bg-rose-400",   border: "border-rose-400/30",   badge: "bg-rose-900/40 text-rose-300",     company: "text-rose-300",   icon: "text-rose-400",   iconBg: "bg-rose-900/40" },
    sky:    { dot: "bg-sky-400",    border: "border-sky-400/30",    badge: "bg-sky-900/40 text-sky-300",       company: "text-sky-300",    icon: "text-sky-400",    iconBg: "bg-sky-900/40" },
    violet: { dot: "bg-violet-400", border: "border-violet-400/30", badge: "bg-violet-900/40 text-violet-300", company: "text-violet-300", icon: "text-violet-400", iconBg: "bg-violet-900/40" },
    green:  { dot: "bg-green-400",  border: "border-green-400/30",  badge: "bg-green-900/40 text-green-300",   company: "text-green-300",  icon: "text-green-400",  iconBg: "bg-green-900/40" },
    orange: { dot: "bg-orange-400", border: "border-orange-400/30", badge: "bg-orange-900/40 text-orange-300", company: "text-orange-300", icon: "text-orange-400", iconBg: "bg-orange-900/40" },
}

export default function Experience() {
    return (
        <section id="experience" className="max-w-3xl mx-auto px-8 py-24">
            <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

            <div className="relative">
                {/* vertical timeline line */}
                <div className="absolute left-8 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

                <div className="flex flex-col gap-10">
                    {experiences.map((exp, i) => {
                        const c = colorMap[exp.color]
                        const Icon = exp.icon
                        return (
                            <div key={i} className="relative flex gap-6 items-start">
                                {/* icon */}
                                <div className={`relative z-10 shrink-0 w-16 h-16 rounded-2xl ${c.iconBg} border ${c.border} flex items-center justify-center shadow-lg`}>
                                    <Icon className={`w-6 h-6 ${c.icon}`} />
                                </div>

                                {/* card */}
                                <div className={`flex-1 rounded-xl border ${c.border} bg-white/5 backdrop-blur-sm p-5 hover:bg-white/[0.07] transition-colors`}>
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                        <span className={`text-base font-semibold ${c.company}`}>{exp.company}</span>
                                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.badge} whitespace-nowrap`}>{exp.date}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 mb-1">{exp.location}</p>
                                    <p className="text-sm font-medium text-white/90">{exp.role}</p>
                                    {exp.subRole && (
                                        <p className="text-xs text-gray-500 italic mt-0.5 mb-1">{exp.subRole}</p>
                                    )}
                                    <ul className="mt-3 space-y-2">
                                        {exp.bullets.map((b, j) => (
                                            <li key={j} className="flex gap-2 text-sm text-gray-400 leading-relaxed">
                                                <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
