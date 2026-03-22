const CDN = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg"
const hobbies = [
    { img: `${CDN}/1f3a8.svg`, label: "I love to paint",     anim: "anim-wobble"        },
    { img: `${CDN}/1f9f3.svg`, label: "I love to travel",    anim: "anim-bounce-gentle" },
    { img: `${CDN}/1f93f.svg`, label: "I love scuba diving", anim: "anim-float"         },
    { img: "https://openmoji.org/data/color/svg/1F9C1.svg", label: "I bake", anim: "anim-bounce-gentle" },
    { img: `${CDN}/1f9f6.svg`, label: "I crochet",           anim: "anim-sway"          },
]

export default function About() {
    return (
        <section id="about" className="max-w-3xl mx-auto px-8 py-24">
            <h2 className="text-3xl font-bold text-white mb-8">About</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hello! I&apos;m a{" "}
                <span className="bg-green-900/50 text-green-300 rounded px-1">Computer Science and Data Science</span>{" "}
                student at{" "}
                <span className="bg-purple-900/50 text-purple-300 rounded px-1">UW-Madison</span>
                , building at the intersection of performance and purpose — because powerful technology should protect as much as it advances.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-16">
                I&apos;ve qualified twice for the{" "}
                <span className="bg-orange-900/40 text-orange-300 rounded px-1">International Olympiad in Informatics Training Camp (IOITC)</span>
                , and I bring that competitive edge to everything I build. Currently, I&apos;m engineering AI and data systems at{" "}
                <span className="bg-rose-900/50 text-rose-300 rounded px-1">LayeredAI</span>
                , contributing to{" "}
                <span className="bg-sky-900/50 text-sky-300 rounded px-1">Taskflow</span>
                {" "}— a modern C++ framework for general-purpose task-parallel programming — through the Open Source Program Office, and conducting research on the{" "}
                <span className="bg-violet-900/50 text-violet-300 rounded px-1">verification of task-parallel programming systems</span>
                {" "}under the mentorship of Dr. Tsung-Wei Huang. This summer, I&apos;m heading to the{" "}
                <span className="bg-teal-900/50 text-teal-300 rounded px-1">Center for High-Throughput Computing (CHTC)</span>
                {" "}to work on HTCondor.
            </p>

            {/* Hobbies */}
            <div className="grid grid-cols-5 gap-6">
                {hobbies.map(({ img, label, anim }, i) => {
                    const isEven = i % 2 === 0
                    const visual = <img src={img} alt={label} className={`w-16 h-16 object-contain drop-shadow-md ${anim}`} />
                    return (
                        <div key={i} className="flex flex-col items-center gap-3">
                            {isEven ? (
                                <>
                                    {visual}
                                    <span style={{ fontFamily: "'Nunito', sans-serif" }} className="text-base font-semibold text-gray-300 text-center leading-snug">{label}</span>
                                </>
                            ) : (
                                <>
                                    <span style={{ fontFamily: "'Nunito', sans-serif" }} className="text-base font-semibold text-gray-300 text-center leading-snug">{label}</span>
                                    {visual}
                                </>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
