import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ArrowUpRight } from "lucide-react"

const links = [
    {
        label: "GitHub",
        sub: "snikithasiddavatam",
        href: "https://github.com/snikithasiddavatam",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        sub: "snikitha-siddavatam",
        href: "https://www.linkedin.com/in/snikitha-siddavatam-88094421a/",
        icon: FaLinkedin,
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
        <section id="contact" className="max-w-6xl mx-auto px-6 sm:px-8 py-24 border-t border-white/[0.06]">
            <div ref={ref} className="reveal">
                <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-px bg-accent/60" />
                    <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Contact</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">Let&apos;s connect</h2>
                <p className="text-gray-400 mb-12 max-w-md leading-relaxed">
                    Open to internships, research collaborations, and interesting problems.
                    Reach out — I&apos;d love to chat.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {links.map((link) => {
                        const { label, sub, href } = link
                        const LinkIcon = link.icon
                        return (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noreferrer"
                            className="group flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.08] bg-surface hover:border-white/[0.18] transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <LinkIcon className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-100">{label}</p>
                                    <p className="font-mono text-xs text-gray-500">{sub}</p>
                                </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-accent transition-colors shrink-0" />
                        </a>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
