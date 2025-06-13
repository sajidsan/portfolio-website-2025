
import ProjectCard from "@/components/ProjectCard"
import TextRotate from "@/fancy/components/text/text-rotate"
import { LayoutGroup, motion } from "framer-motion"
import ScrollReveal from "@/components/ScrollReveal"
import { Link } from 'react-router-dom'
import Footer from "@/components/footer"

export default function HomePage() {
    return (

    <>

    <section className="relative w-full h-dvh flex items-center justify-center font-overused-grotesk bg-white dark:text-muted text-foreground font-light overflow-hidden p-8 sm:py-64">

    <div className="flex flex-col items-center text-center">
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
              <span className="inline-block align-baseline relative top-[0px]">
                <TextRotate
                  texts={["build", "connect", "imagine", "create"]}
                  mainClassName="inline-block text-black px-3 bg-lime-300 overflow-hidden py-1 rounded-lg relative top-[24px]"
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
                    <p className="mb-2 text-base text-white">2018-2025</p>
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