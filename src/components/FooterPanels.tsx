// components/FooterPanels.tsx
import { Link } from "react-router-dom"

interface FooterPanel {
  title: string
  imageUrl: string
  link: string
}

interface FooterPanelsProps {
  panels: FooterPanel[]
}

export default function FooterPanels({ panels }: FooterPanelsProps) {
  return (
    <footer className="w-full mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-12 px-4 sm:px-56 bg-black">
        {panels.map((panel, index) => {
          const isExternal =
            panel.link.startsWith("http") ||
            panel.link.startsWith("mailto:") ||
            panel.link.startsWith("tel:")

          const content = (
            <>
              <div className="text-neutral-400 text-sm sm:text-base font-light">
                {panel.title}
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={panel.imageUrl}
                  alt={panel.title}
                  className="z-0 w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </>
          )

          if (isExternal) {
            return (
              <a key={index} href={panel.link} className="flex flex-col gap-2 group">
                {content}
              </a>
            )
          }

          return (
            <Link key={index} to={panel.link} className="flex flex-col gap-2 group">
              {content}
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
