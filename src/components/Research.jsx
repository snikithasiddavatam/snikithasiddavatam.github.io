import Section from "./Section"

const research = [
    {
        title: "LLM Citation Hallucination",
        area: "Machine Learning",
        advisor: "Prof. Grigorios G. Chrysos",
        date: "May 2026 – Present",
    },
    {
        title: "Verification of Task-Parallel Systems",
        area: "High Performance Computing",
        advisor: "Dr. Tsung-Wei Huang",
        date: "Feb 2026 – Present",
    },
]

const talks = [
    {
        title: "Leveraging LLM to Generate Unittests for Notifiers in Taskflow",
        venue: "CppCon 2026, Main Program",
    },
]

export default function Research() {
    return (
        <Section id="research" title="Research">
            <div className="space-y-5">
                {research.map((r) => (
                    <div key={r.title} className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-8">
                        <p className="text-muted whitespace-nowrap">{r.date}</p>
                        <div>
                            <p>
                                <span className="text-heading font-semibold">{r.title}</span>
                                <span className="text-muted"> &middot; {r.area}</span>
                            </p>
                            <p><em>Advisor: {r.advisor}</em></p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="font-serif text-2xl text-heading mt-10 mb-3">Talks</h3>
            <ul className="space-y-2">
                {talks.map((t) => (
                    <li key={t.title}>
                        <span className="text-heading">&ldquo;{t.title}.&rdquo;</span>{" "}
                        <em className="text-muted">{t.venue}.</em>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
