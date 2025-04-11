import { useState } from 'react'
import './index.css'
import TextRotate from '@/fancy/components/text/text-rotate'
import VerticalCutReveal from '@/fancy/components/text/vertical-cut-reveal'
import { motion, LayoutGroup } from 'framer-motion'






function App() {
  

  return (
    
    <main>
      <div className="w-dvw h-dvh text-2xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center font-overused-grotesk bg-white dark:text-muted text-foreground font-light overflow-hidden p-12 sm:p-20 md:p-24">
      <LayoutGroup>
  <motion.p className="text-4xl leading-tight sm:text-5xl font-light text-black" layout>
    Hi, I'm Saj and I build things<br />
    that help people{" "}
    <TextRotate
      texts={["build", "connect", "imagine", "create"]}
      mainClassName="text-white px-3 bg-green-500 overflow-hidden py-1 justify-center rounded-lg inline-block"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </motion.p>
</LayoutGroup>
    </div>
      <div className="border-2 border-green-500 mx-8 my-8 max-w-2xl px-8 py-12 text-neutral-900 font-serif leading-relaxed">
        <header className="mb-12">
          
          <h1 className="text-3xl font-sans font-bold tracking-tight">
            Sajid Reshamwala<span className="text-green-500">.
            
      
            </span>
            
          </h1>
          
          <p className="text-lg mt-2 text-neutral-600">
            Product Designer · Google Alumn · Durham, NC
          </p>
          <p className="text-sm mt-1 text-neutral-500">
            sajidresh@gmail.com ·{" "}
            <a href="https://linkedin.com/in/sajidreshamwala" className="underline">
              LinkedIn
            </a>
          </p>
          <br></br>
          <p>
            I’m a product designer with a background in design research and mechanical engineering. I’ve spent the last decade helping startups and big tech teams turn fuzzy ideas into thoughtful products. I lead through doing—prototyping, workshopping, and building systems that help people make better decisions together.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl font-sans font-bold mb-2">Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong>Google — Senior Interaction Designer</strong>
              <br />
              <span className="text-neutral-500">2018 – 2023</span>
              <p>
                At Google, I led co-creation work with the Bard and Gemini teams and helped turn a generative UI prototype into a real product(now called Relay). I also built tools and workshops to help teams stay grounded in user needs—even when everything was moving fast.
              </p>
            </li>
            <li>
              <strong>Therachat — Director of Design</strong>
              <br />
              <span className="prose text-sm text-neutral-500">2016 – 2018</span>
              <p>
                I helped lead Therachat through a full product pivot, guiding design sprints and pilots until we landed on something that stuck (and eventually got acquired). I also built the design system and mentored our design and research team.
              </p>
            </li>
            <li>
              <strong>Jut, Inc. — Lead Product Designer</strong>
              <br />
              <span className="text-sm text-neutral-500">2014 – 2015</span>
              <p>
                At Jut, I worked on dev tools, snuck delight into dashboards, and led the company’s first future vision project.
              </p>
            </li>
            <li>
              <strong>Yahoo — UX Designer & Researcher</strong>
              <br />
              <span className="text-sm text-neutral-500">2012 – 2014</span>
              <p>
                Yahoo was where I cut my teeth—prototyping new features, running field research, and creating one very earnest design video that ended up setting a new bar for the team.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-sans font-bold mb-2">Education</h2>
          <ul>
            <li>IIT Institute of Design — MDes, Design Strategy</li>
            <li>IIT Stuart School of Business — MBA, Business Strategy</li>
            <li>NC State University — ME, Mechanical Engineering · NCAA Track</li>
          </ul>
        </section>

        <footer className="text-sm text-neutral-500 mt-16">
          Thanks for stopping by ✌️
        </footer>
      </div>
    </main>
  );
}

export default App
