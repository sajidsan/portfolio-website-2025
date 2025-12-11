import { motion } from "framer-motion"
import HeaderBackground from "@/components/HeaderBackground"

export default function AboutPage() {
    return (
        <section className="relative w-full min-h-screen bg-white text-neutral-900 pt-28 pb-20 px-6 sm:px-12 overflow-hidden">
            <HeaderBackground className="inset-0 opacity-60" variantOverride="svg" scheme="about" />
            <div className="relative max-w-4xl mx-auto space-y-6 z-10">
                <motion.h1
                    className="text-4xl sm:text-5xl font-semibold leading-tight"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    About me? <br className="hidden sm:block" /> I'm blushing.
                </motion.h1>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
                >
                    <p className="text-lg leading-relaxed text-neutral-800">
                        Hi, I am Sajid, a designer and workshop builder in Durham, North Carolina. I help teams turn early
                        ideas into clear and usable systems. Over the past decade I have led cross functional design work at
                        Google, Therachat, Jut, and Yahoo.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-800">
                        At Google, I helped productize Relay, a generative UI project, and launched the Bard and Gemini
                        co design program, which grew into twelve engagements across the company. I also created the
                        Next Billion Users Pattern Library to help teams share solutions more effectively. Before that,
                        I guided Therachat through a successful product pivot and designed developer tools at Jut.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-800">
                        I focus on building tools, systems, and programs that make it easier for teams to collaborate and
                        make progress. I’ve also taught graduate courses at the Academy of Art University in San Francisco
                        and led classes at General Assembly.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-800">
                        In my free time, I study jazz at North Carolina Central University. Across design, music, and
                        drawing, I keep returning to the idea that structure creates freedom and that steady practice
                        changes how you see the world.
                    </p>
                    <p className="text-lg leading-relaxed text-neutral-800">
                        If you want to talk design leadership, AI driven systems, or jazz, feel free to reach out on{" "}
                        <a
                            href="https://www.linkedin.com/in/sajidreshamwala"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-700 underline-offset-4 hover:underline"
                        >
                            LinkedIn
                        </a>
                        .
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
