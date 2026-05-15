import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ArrowUpRight } from "lucide-react"

const links = [
    {
        label: "GitHub",
        sub: "snikithasiddavatam",
        href: "https://github.com/snikithasiddavatam",
        icon: FaGithub,
        color: "border-white/10 hover:border-white/25",
        iconColor: "text-gray-400 group-hover:text-white",
    },
    {
        label: "LinkedIn",
        sub: "snikitha-siddavatam",
        href: "https://www.linkedin.com/in/snikitha-siddavatam-88094421a/",
        icon: FaLinkedin,
        color: "border-sky-500/20 hover:border-sky-400/50",
        iconColor: "text-sky-500 group-hover:text-sky-300",
    },
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

export default function Contact() {
    const ref = useRef(null)
    useReveal(ref)

    return (
        <section id="contact" className="max-w-3xl mx-auto px-8 py-24">
            <div ref={ref} className="reveal">
                <h2 className="text-3xl font-bold text-white mb-3">Let&apos;s Connect</h2>
                <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
                    Open to internships, research collaborations, and interesting problems.
                    Reach out — I&apos;d love to chat.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {links.map(({ label, sub, href, icon: Icon, color, iconColor }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className={`group flex items-center justify-between px-5 py-4 rounded-xl border bg-white/[0.03] hover:bg-white/[0.07] transition-all ${color}`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className={`w-5 h-5 transition-colors ${iconColor}`} />
                                <div>
                                    <p className="text-sm font-medium text-white">{label}</p>
                                    <p className="text-xs text-gray-500">{sub}</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors shrink-0" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
