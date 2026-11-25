import Section from "./Section"

const contributions = [
    {
        title: "Taskflow",
        description: "A general-purpose task-parallel programming system in C++ for writing high-performance parallel programs. Supports task dependency graphs, conditional tasking, GPU acceleration via CUDA, and a built-in profiler. Header-only, C++20, 12k+ stars.",
        url: "https://github.com/taskflow/taskflow",
    },
]

export default function OpenSource() {
    return (
        <Section id="open-source" title="Open Source">
            <div className="space-y-5">
                {contributions.map((item) => (
                    <p key={item.title}>
                        <a href={item.url} target="_blank" rel="noreferrer" className="link font-semibold">
                            {item.title}
                        </a>
                        : {item.description}
                    </p>
                ))}
            </div>
        </Section>
    )
}
