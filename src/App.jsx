import { useState } from 'react'
import './index.css'

function App() {
  

  return (
    <div className="border-2 border-green-500 mx-8 my-8 max-w-2xl px-8 py-12 text-neutral-900 font-serif leading-relaxed">
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
        I’m a product designer with a background in design research and mechanical engineering. I’ve spent the last decade helping startups and big tech teams turn fuzzy ideas into thoughtful products. I lead through doing—prototyping, workshopping, and building systems that help people make better decisions together.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-sans font-bold mb-2">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Creative Sabbatical</strong>
            <br />
            <span className="text-sm text-neutral-500">2023 – Present</span>
            <p>
             In July of 2023 I left Google to take a break from formal design work and explore creativity through the full-time study of jazz and the baritone saxophone.
            </p>
          </li>
          <li>
            <strong>Senior Interaction Designer - Google</strong>
            <br />
            <span className="text-sm text-neutral-500">2018 – 2023</span>
            <p>
            At Google, I led co-creation work with the Bard and Gemini teams and helped turn a generative UI prototype into a real product(now called Relay). I also built tools and workshops to help teams stay grounded in user needs—even when everything was moving fast.
            </p>
          </li>
          <li>
            <strong>Director of Design — Therachat</strong>
            <br />
            <span className="text-sm text-neutral-500">2016 – 2018</span>
            <p>
            I helped lead Therachat through a full product pivot, guiding design sprints and pilots until we landed on something that stuck (and eventually got acquired). I also built the design system and mentored our design and research team.
            </p>
          </li>
          <li>
            <strong>Lead Product Designer — Jut, Inc.</strong>
            <br />
            <span className="text-sm text-neutral-500">2014 – 2015</span>
            <p>
            At Jut, I worked on dev tools, snuck delight into dashboards, and led the company’s first future vision project.
            </p>
          </li>
          <li>
            <strong>UX Designer & Researcher - Yahoo</strong>
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

    </div>
  );
}

export default App
