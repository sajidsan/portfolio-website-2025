// components/FooterPanels.tsx

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
        {panels.map((panel, index) => (
          <div key={index} className="flex flex-col gap-2">
            {/* Title */}
            <div className="text-neutral-400 text-sm sm:text-base font-light">
              {panel.title}
            </div>

            {/* Image block */}
            <div className="relative group aspect-[16/9] overflow-hidden">
              <a href={panel.link}>
                <img
                  src={panel.imageUrl}
                  alt={panel.title}
                  className="z-0 w-full h-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}
