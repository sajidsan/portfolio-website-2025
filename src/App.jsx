import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  

  return (
    <div className="border-2 border-green-500 my-12 max-w-2xl mx-auto px-8 py-12 text-neutral-900 font-serif leading-relaxed">
      <header className="mb-12">
        <h1 className="text-3xl font-sans font-bold tracking-tight">Sajid Reshamwala<span className="text-green-500">.</span></h1>
        <p className="text-lg mt-2 text-neutral-600">
          Senior Interaction Designer · Durham, NC
        </p>
        <p className="text-sm mt-1 text-neutral-500">
          sajidresh@gmail.com ·{" "}
          <a href="https://linkedin.com/in/sajidreshamwala" className="underline">
            LinkedIn
          </a>
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-sans font-bold mb-2">Summary</h2>
        <p>
          Experienced design leader with a decade of expertise guiding cross-functional
          teams at major tech companies and startups. Specializes in launching and leading
          high-impact projects that scale into ongoing programs by aligning stakeholders,
          defining vision, and driving product strategy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-sans font-bold mb-2">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Google — Senior Interaction Designer</strong>
            <br />
            <span className="text-sm text-neutral-500">2018 – 2023</span>
            <p>
              Led the pilot for a multi-team, high-impact co-design program for Bard and Gemini. Helped transform a research prototype into a production-ready tool (Relay). Launched the Next Billion Users Pattern Library.
            </p>
          </li>
          <li>
            <strong>Therachat — Director of Design</strong>
            <br />
            <span className="text-sm text-neutral-500">2016 – 2018</span>
            <p>
              Guided the team through a pivotal product transition. Built a design system and mentored product designers and researchers. Product acquired by Wellin5.
            </p>
          </li>
          <li>
            <strong>Jut, Inc. — Lead Product Designer</strong>
            <br />
            <span className="text-sm text-neutral-500">2014 – 2015</span>
            <p>
              Designed developer tools and led Jut’s first design vision initiative. Introduced inclusive design practices and research-based UX.
            </p>
          </li>
          <li>
            <strong>Yahoo — UX Designer & Researcher</strong>
            <br />
            <span className="text-sm text-neutral-500">2012 – 2014</span>
            <p>
              Designed and prototyped features for Yahoo! Finance and Yahoo! Screen. Facilitated design workshops that turned research insights into features.
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
  );
}

export default App
