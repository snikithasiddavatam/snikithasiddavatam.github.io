import Section from "./Section"

export default function Contact() {
    return (
        <Section id="contact" title="Contact">
            <p>
                Email: <a href="mailto:siddavatam@wisc.edu" className="link">siddavatam@wisc.edu</a>
            </p>
            <p>
                GitHub:{" "}
                <a href="https://github.com/snikithasiddavatam" target="_blank" rel="noreferrer" className="link">
                    snikithasiddavatam
                </a>
            </p>
            <p>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/snikitha-siddavatam-88094421a/" target="_blank" rel="noreferrer" className="link">
                    snikitha-siddavatam
                </a>
            </p>
        </Section>
    )
}
