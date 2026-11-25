import Section from "./Section"

const honors = [
    {
        title: "CppCon 2026, Main Program Speaker",
        date: "2026",
        note: "Presenting “Leveraging LLM to Generate Unittests for Notifiers in Taskflow.”",
    },
    {
        title: "Grace Hopper Celebration (GHC) 2026 Scholarship Recipient",
        org: "UW–Madison Computer Sciences Department",
        date: "2026",
        note: "Awarded the Computer Sciences departmental scholarship to attend the Grace Hopper Celebration, the world's largest gathering of women technologists.",
    },
    {
        title: "Y Combinator Startup School 2026",
        org: "San Francisco",
        date: "July 2026",
        note: "Selected participant.",
    },
    {
        title: "MongoDB Women in Computer Science Summit",
        org: "New York",
        date: "May 2025",
        note: "Selected as one of 45 students across the U.S. for an immersive program focused on software engineering, database technologies, and career development.",
    },
    {
        title: "Jane Street First-Year Trading and Technology Program",
        org: "New York",
        date: "March 2025",
        note: "Selected as one of 100 students across the U.S. and Canada for a 3-day program centered on quantitative trading, algorithmic problem-solving, and functional programming.",
    },
    {
        title: "ICPC Algo Queen Programming Cup, Gold Medal",
        date: "2023",
    },
    {
        title: "International Olympiad in Informatics Training Camp (IOITC) Qualifier",
        date: "2022 – 2023",
        note: "Top 6 in the country for two consecutive years.",
    },
]

export default function Honors() {
    return (
        <Section id="honors" title="Honors &amp; Achievements">
            <ul className="space-y-3">
                {honors.map((h) => (
                    <li key={h.title} className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-8">
                        <p className="text-muted whitespace-nowrap">{h.date}</p>
                        <div>
                        <span className="text-heading">{h.title}</span>
                        {h.org && <span className="text-muted"> &middot; {h.org}</span>}
                        {h.note && <p>{h.note}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
