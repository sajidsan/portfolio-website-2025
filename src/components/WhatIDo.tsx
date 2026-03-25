import ScrollReveal from "@/components/ScrollReveal"
import { Brain, Users, Presentation, Library, GraduationCap, Microscope } from "lucide-react"

const items = [
    {
        icon: Brain,
        title: "Design Leadership",
        description:
            "A decade of design work at Google, Therachat, Jut, and Yahoo. I've been the first designer on a team. I've been the person fixing what came before. Both jobs are good.",
    },
    {
        icon: Microscope,
        title: "AI Product Design",
        description:
            "Building with AI before it was a job title. Launched co-creation programs for Bard and Gemini. Shipped Relay from a research project into something people actually used.",
    },
    {
        icon: Presentation,
        title: "Workshop Facilitation",
        description:
            "Sprints at Therachat. Co-creation programs across Google. Certified the designers who ran them. As designers, it's our job to make sure the room leaves knowing what to do next.",
    },
    {
        icon: Library,
        title: "Systems & Pattern Thinking",
        description:
            "I like building the thing that helps people build better things. Pattern Libraries for meeting the needs of emerging markets. Frameworks that outlast the project that made them.",
    },
    {
        icon: GraduationCap,
        title: "Teaching & Mentoring",
        description:
            "Graduate courses at Academy of Art University. Workshops at General Assembly. I teach the way I wish someone had taught me. Concrete. Useful. No jargon.",
    },
    {
        icon: Users,
        title: "Human-Centered Research",
        description:
            "Ethnographic research, usability testing, prototype evaluation. Started at Yahoo, never stopped. Watch what people do. That's the research.",
    },
]

export default function WhatIDo() {
    return (
        <section className="bg-white px-8 py-20 sm:px-16 sm:py-28 font-overused-grotesk">
            <div className="max-w-5xl mx-auto">
                <ScrollReveal delay={0.1}>
                    <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
                        The Short Version
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-lg text-neutral-600 max-w-2xl mb-16 leading-relaxed">
                        Designed, taught, and built across teams, industries, and time zones.
                        Google. Startups. Classrooms. I work with teams I can learn from.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
                    {items.map((item, i) => (
                        <ScrollReveal key={item.title} delay={0.1 + i * 0.07}>
                            <div className="border-l-2 border-indigo-600 pl-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <item.icon size={16} className="text-indigo-600 shrink-0" />
                                    <h3 className="text-base font-bold text-neutral-900">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-base text-neutral-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
