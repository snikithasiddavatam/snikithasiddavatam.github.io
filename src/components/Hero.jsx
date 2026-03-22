import { Github, Linkedin } from "lucide-react"

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-white">Hi, I'm Snikitha!</h1>
            <p className="text-gray-400 mt-4 text-center">I'm passionate about high-performance computing, autonomous intelligence & competitive programming.</p>
            <div className="flex items-center gap-4 mt-6">
                <a href="https://github.com/snikithasiddavatam" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/snikitha-siddavatam-88094421a/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                </a>
            </div>
        </div>
    )
}