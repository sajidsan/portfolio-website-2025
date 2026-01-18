import { motion } from "framer-motion";
import HeaderBackground from "@/components/HeaderBackground";

const posts = [
  {
    title: "Improvisation and the Death (and Birth) of the Framework",
    href: "https://the-year-of.ghost.io/improvisation-and-the-death-and-birth-of-the-framework/",
    description: "On letting structure emerge through practice when frameworks fall apart.",
  },
  {
    title: "Vibe Coding and the Case for the Struggle",
    href: "https://the-year-of.ghost.io/vibe-coding-and-the-case-for-the-struggle/",
    description: "Why friction and intuition matter when building with new tools.",
  },
  {
    title: "Lean User Research",
    href: "https://medium.com/iit-institute-of-design/lean-user-research-or-how-i-learned-to-do-research-when-trying-to-ship-1fdbbc0b9fa2",
    description: "Lightweight research methods when speed to ship is the constraint.",
  },
  {
    title: "Getting to Change",
    href: "https://uxdesign.cc/getting-to-change-27bc55b2aa4d",
    description: "How to nudge teams toward different decisions and outcomes.",
  },
  {
    title: "20-Minute Typeform Prototypes",
    href: "https://uxdesign.cc/20-minute-typeform-prototypes-e6997ad5b5bb",
    description: "Rapid prototyping flows with simple tools to learn faster.",
  },
  {
    title: "First Lessons in Product Design. A Time Traveller’s Account.",
    href: "https://medium.com/iit-institute-of-design/lessons-from-a-first-year-in-startup-product-design-a-time-travellers-account-69ce50a28ff1",
    description: "Reflections on early-stage design, tradeoffs, and growth.",
  },
];

export default function WritingPage() {
  return (
    <section className="relative w-full min-h-screen bg-white text-neutral-900 pt-28 pb-20 px-6 sm:px-12 overflow-hidden">
      <HeaderBackground className="inset-0 opacity-55" variantOverride="svg" scheme="writing" />
      <div className="relative max-w-4xl mx-auto space-y-10 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-semibold leading-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          Writing
        </motion.h1>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
        >
          {posts.map((post) => (
            <div key={post.href} className="space-y-1">
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-2xl font-semibold hover:underline underline-offset-4 group"
              >
                {post.title}
                <svg
                  aria-hidden="true"
                  className="relative top-0 -left-0.5 h-5 w-5 text-black opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </a>
              <p className="text-neutral-800 font-serif">{post.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
