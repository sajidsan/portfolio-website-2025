import { clsx } from "clsx";
import ScrollReveal from "./ScrollReveal";


interface ImageFullBleedHeroProps {
  imageUrl: string;
  bgClass?: string;
  bgHex?: string;


}

export default function ImageFullBleedHero({
    imageUrl,
    bgClass = "bg-white",
    bgHex,
    
  }: ImageFullBleedHeroProps) {
    return (
        <ScrollReveal
          delay={0.1}
          
        >
        <div className=
        {clsx(
        "w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] aspect-[2/1] sm:aspect-[3/1] flex items-center justify-center overflow-hidden border-neutral-200",
        bgClass
          )}
        style={bgHex ? { backgroundColor: bgHex } : {}}
        >
          <img
            src={imageUrl}
            alt="Hero"
            className="max-w-full h-auto object-cover object-top"
          />
        </div>
        </ScrollReveal>
      
    );
  }
  