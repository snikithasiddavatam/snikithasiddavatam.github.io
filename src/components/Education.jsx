import Section from "./Section"

export default function Education() {
    return (
        <Section id="education" title="Education">
            <div className="sm:grid sm:grid-cols-[13rem_1fr] sm:gap-8">
                <p className="text-muted whitespace-nowrap">Expected May 2027</p>
                <div>
                    <p>
                        <span className="text-heading font-semibold">University of Wisconsin&ndash;Madison</span>
                    </p>
                    <p>
                        <em>B.S. in Computer Science and Data Science</em>
                    </p>
                </div>
            </div>
        </Section>
    )
}
