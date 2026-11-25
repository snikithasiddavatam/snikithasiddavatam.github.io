import Section from "./Section"

const experiences = [
    {
        company: "Center for High Throughput Computing (CHTC)",
        location: "Madison, WI",
        role: "Research Computing Fellow",
        date: "May 2026 – Aug 2026",
    },
    {
        company: "Layered AI",
        location: "Aurora, IL",
        role: "AI and Data Systems Intern",
        date: "Feb 2026 – May 2026",
    },
    {
        company: "Open Source Program Office (OSPO)",
        location: "Madison, WI",
        role: "Open Source Intern, Taskflow (C++ Parallel Programming Library)",
        subRole: "under the mentorship of Dr. Tsung-Wei Huang",
        date: "Dec 2025 – May 2026",
    },
    {
        company: "Federation of Asian Biotech Associations (FABA)",
        location: "Hyderabad, India",
        role: "Software Engineer Intern",
        date: "July 2025 – Aug 2025",
    },
]

export default function Experience() {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-5">
                {experiences.map((exp) => (
                    <div key={exp.company + exp.date} className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-8">
                        <p className="text-muted whitespace-nowrap">{exp.date}</p>
                        <div>
                        <p>
                            <span className="text-heading font-semibold">{exp.company}</span>
                            <span className="text-muted"> &middot; {exp.location}</span>
                        </p>
                        <p>
                            <em>{exp.role}</em>
                        </p>
                        {exp.subRole && <p className="text-muted">{exp.subRole}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
