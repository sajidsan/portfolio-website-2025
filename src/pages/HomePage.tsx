
import ProjectCard from "@/components/ProjectCard"
import TextRotate from "@/fancy/components/text/text-rotate"
import { LayoutGroup, motion } from "framer-motion"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
    return (

    <>

        
    <section className="relative w-dvw h-dvh flex items-center justify-center font-overused-grotesk bg-white dark:text-muted text-foreground font-light overflow-hidden p-8 sm:py-64">

    <div className="flex flex-col items-center text-center">
        <ScrollReveal>
        <img 
        src="/images/photo-me.png"
        alt="Hero Decoration"
        className="w-32 h-32 sm:w-48 sm:h-48 mb-8 object-contain"
        />
        </ScrollReveal>
        <ScrollReveal>
  <motion.div className="text-4xl leading-tight sm:text-5xl font-light text-black z-10" layout>
    <div>
      Hi, I'm <span className="">Saj</span> and <span className="">I build things</span>
    </div>
    <div>
      that help people{" "}
      <span className="inline-block align-baseline relative top-[0px]">
        <TextRotate
          texts={["build", "connect", "imagine", "create"]}
          mainClassName="inline-block text-white px-3 bg-blue-600 overflow-hidden py-1 rounded-lg relative top-[24px]"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 60, stiffness: 500 }}
          rotationInterval={2500}
        />
      </span>
    </div>
  </motion.div>
  </ScrollReveal>
  </div>
</section>
        
        <section>
        
            <ProjectCard 
            title="Google"
            period="2018 - 2023" 
            summary="At Therachat, I guided our team through 6 months of design sprints, helped us find a new product direction, and lead the design of our mobile and webapps from the ground up."
            imageUrl="/images/therachat-cover.png"
            href="#"
            >


            </ProjectCard>
            <ProjectCard 
            title="Therachat"
            period="2016 - 2018" 
            summary="At Therachat, I guided our team through 6 months of design sprints, helped us find a new product direction, and lead the design of our mobile and webapps from the ground up."
            imageUrl="/images/therachat-cover.png"
            href="/therachat"
            accentColor='#222222'
            >

            </ProjectCard>
            <ProjectCard 
            title="Jut"
            period="2014 - 2015" 
            summary="At Jut I launched apps and introduced a team to user centered design."
            imageUrl="/images/jut-macbook-scrim.png"
            href="/jut"
            
            >

            </ProjectCard>
            <ProjectCard 
            title="Yahoo Finance"
            period="2013 - 2014" 
            summary="With Yahoo Finance, I honed my user centered approach to design while developing web and mobile investing tools."
            imageUrl="/images/yahoo-desktopMobile.png"
            href="https://yahoo.com"
            hideButton={true}
            >

            </ProjectCard>
        </section>
        </>
    )
}