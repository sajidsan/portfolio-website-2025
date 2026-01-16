
import { useEffect, useRef, useState } from "react"
import ProjectCard from "@/components/ProjectCard"
import TextRotate, { type TextRotateRef } from "@/fancy/components/text/text-rotate"
import { LayoutGroup, motion } from "framer-motion"
import ScrollReveal from "@/components/ScrollReveal"
import { Link, useLocation } from 'react-router-dom'
import Footer from "@/components/footer"
import HeaderBackground from "@/components/HeaderBackground"

export default function HomePage() {
    const { hash } = useLocation()
    const textRotateRef = useRef<TextRotateRef | null>(null)
    const tapAudioRef = useRef<HTMLAudioElement | null>(null)
    const [isInstantRotate, setIsInstantRotate] = useState(false)

    useEffect(() => {
      tapAudioRef.current = new Audio("/sounds/snd02-piano/tap_01.wav")
      tapAudioRef.current.preload = "auto"
    }, [])

    useEffect(() => {
      if (hash === "#projects") {
        const section = document.getElementById("projects")
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }, [hash])

    const handleRotateClick = () => {
      if (tapAudioRef.current) {
        tapAudioRef.current.currentTime = 0
        tapAudioRef.current.play().catch(() => {})
      }
      setIsInstantRotate(true)
      requestAnimationFrame(() => {
        textRotateRef.current?.next()
        setIsInstantRotate(false)
      })
    }

    return (

    <>

    <section className="relative w-full min-h-screen flex items-center justify-center font-overused-grotesk bg-white dark:text-muted text-foreground font-light overflow-hidden p-8 sm:py-64">
    <HeaderBackground className="inset-0" variantOverride="svg" />

    <div className="flex flex-col items-center text-center z-10">
        <ScrollReveal>
        <img 
        src="/images/photo-me.png"
        alt="Hero Decoration"
        className="w-32 h-32 sm:w-48 sm:h-48 mb-8 object-contain"
        />
        </ScrollReveal>
        <ScrollReveal
          delay={.8}
        >
          <motion.div className="text-4xl leading-tight sm:text-5xl font-light text-black z-10" layout>
            <div>
              Hi, I'm <span className="">Saj</span> and <span className="">I build things</span>
            </div>
            <div>
              that help people{" "}
              <button
                type="button"
                onClick={handleRotateClick}
                data-sound-click="custom"
                className="inline-block align-baseline relative top-[0px] border-0 bg-transparent p-0 transition-transform duration-200 ease-out hover:scale-[1.03]"
                aria-label="Rotate highlighted word"
              >
                <TextRotate
                  ref={textRotateRef}
                  texts={["build", "connect", "create", "align", "inspire", "lead", "launch", "prototype", "imagine"]}
                  mainClassName="inline-block text-black px-3 bg-lime-300 overflow-hidden py-1 rounded-lg relative top-[24px]"
                  staggerFrom="last"
                  initial={isInstantRotate ? { y: 0, opacity: 1 } : { y: "100%" }}
                  animate={{ y: 0 }}
                  exit={isInstantRotate ? { y: 0, opacity: 0 } : { y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={isInstantRotate ? { duration: 0 } : { type: "spring", damping: 60, stiffness: 500 }}
                  rotationInterval={2500}
                />
              </button>
            </div>
          </motion.div>
        </ScrollReveal>
    </div>
  </section>
        
        <section id="projects" className="scroll-mt-24">
        
            <ProjectCard 
            title="InsightUX"
            period="Google, 2018 - 2023" 
            summary="At InsightUX, I co-designed our co-creation program to help teams across Google incorporate AI into their product architecture."
            imageUrl="/images/preview-cocreation-alt.png"
            logoUrl="images/logo-google-g.png"
            href="/coCreation"
            >


            </ProjectCard>
            <ProjectCard 
            title="Relay"
            period="Google, 2018 - 2023" 
            summary="While working on Relay, I helped transition a design-to-code research project into a user-facing product."
            imageUrl="/images/preview-relay.png"
            logoUrl="images/logo-google-g.png"
            href="/relay"
            >
            </ProjectCard>
            <ProjectCard 
            title="Therachat"
            period="2016 - 2018" 
            summary="At Therachat, I guided our team through 6 months of design sprints, helped us find a new product direction, and lead the design of our mobile and webapps from the ground up."
            imageUrl="/images/therachat-cover.png"
            logoUrl="/images/logo-therachat.png"
            href="/therachat"
            accentColor='#222222'
            >

            </ProjectCard>
            <ProjectCard 
            title="Jut Analytics"
            period="2014 - 2015" 
            summary="At Jut I launched apps and introduced a team to user centered design."
            imageUrl="/images/preview-jut.png"
            logoUrl="/images/logo-jut-j.png"
            href="/jut"
            
            >

            </ProjectCard>
            <ProjectCard 
            title="Yahoo Finance"
            period="2013 - 2014" 
            summary="With Yahoo Finance, I honed my user centered approach to design while developing web and mobile investing tools."
            imageUrl="/images/preview-yahoo.png"
            logoUrl="/images/logo-yahoo.png"
            href="https://yahoo.com"
            hideButton={true}
            >

            </ProjectCard>
            <motion.div
                className="relative bg-black
                            bg-[url(/images/preview-bg-yahoo-research.png)]
                            bg-cover bg-top
                            p-4
                            pt-16 pb-80
                            border-none
                            sm:px-44 sm:pt-40 sm:pb-56
                            flex flex-col md:flex-row
                            overflow-hidden
                "
            >   
                <div className="p-12 
                                md:w-2/6
                                ">
                    <img className="w-auto h-14 pb-2" src="/images/logo-yahoo-white.png"/>
                    <h1 className="mb-2 text-5xl text-white font-regular leading-12">Yahoo Research</h1>
                    <p className="mb-2 text-base text-white">2012 - 2013</p>
                    <p className="mb-6 font-serif text-xl max-w-prose text-white">As a researcher, I led Yahoo! media teams through ethnographic research, prototyping of initial concepts, and evaluating of prototypes with rapid usability sessions.</p>
                    <Link 
                        to="/yahooResearch" 
                        className={`px-6 py-2 border-2 border-white text-white text-lg rounded-md hover:bg-purple-600 hover:border-purple-600 hover:text-white transition`}>
                        See Work
                    </Link>
                    
                    

                </div>
                
                 
                
                  
                
            </motion.div>
          
        </section>
        <section>
        <Footer></Footer>
        </section>
           
        </>
    )
}
