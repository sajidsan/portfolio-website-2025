import ScrollReveal from "@/components/ScrollReveal"

const logos = [
    { src: "/images/logo-google-g.png", alt: "Google", height: "h-6", opacity: "opacity-70" },
    { src: "/images/logo-yahoo.png", alt: "Yahoo", height: "h-6", opacity: "opacity-55" },
    { src: "/images/logo-jut.png", alt: "Jut", height: "h-5", opacity: "opacity-40" },
    { src: "/images/logo-therachat.png", alt: "Therachat", height: "h-6", opacity: "opacity-70" },
]

export default function LogoBar() {
    return (
        <ScrollReveal delay={1.2}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12">
{logos.map((logo) => (
                    <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        className={`${logo.height} w-auto ${logo.opacity} grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
                    />
                ))}
            </div>
        </ScrollReveal>
    )
}
