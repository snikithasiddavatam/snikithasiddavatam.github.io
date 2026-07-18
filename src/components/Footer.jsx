import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const links = [
    { href: "mailto:siddavatam@wisc.edu", icon: FaEnvelope, label: "Email" },
    { href: "https://github.com/snikithasiddavatam", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/snikitha-siddavatam-88094421a/", icon: FaLinkedin, label: "LinkedIn" },
]

export default function Footer() {
    return (
        <footer className="border-t border-edge">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="font-mono text-sm text-faint">
                    &copy; 2026 Snikitha Siddavatam &middot; designed &amp; coded in Spring 2026
                </p>
                <div className="flex items-center gap-3">
                    {links.map((link) => {
                        const LinkIcon = link.icon
                        return (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel="noreferrer"
                            aria-label={link.label}
                            className="w-10 h-10 rounded-xl border border-edge bg-chip flex items-center justify-center text-muted hover:text-heading hover:border-edge-strong transition-colors"
                        >
                            <LinkIcon className="w-4 h-4" />
                        </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}
