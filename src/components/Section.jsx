export default function Section({ id, title, children }) {
    return (
        <section id={id} className="mt-16 scroll-mt-10">
            <h2 className="font-serif text-3xl text-heading mb-4">{title}</h2>
            {children}
        </section>
    )
}
