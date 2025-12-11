import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import HeaderBackground from './HeaderBackground'

interface ProjectCardProps {
    title: string
    period: string
    summary: string
    imageUrl: string
    logoUrl?: string
    href: string
    accentColor?: string
    bgColor?: string
    hideButton?: boolean
    showBackground?: boolean
    backgroundVariant?: "css" | "svg" | "canvas"
    backgroundScheme?: "cool" | "warm" | "citrus" | "insight" | "relay" | "therachat" | "jut" | "yahoo"
    showImage?: boolean
}


export default function ProjectCard({

    title,
    period,
    summary,
    imageUrl,
    logoUrl,
    href,
    accentColor = 'blue-700',
    hideButton = false,
    bgColor = 'white',
    showBackground = false,
    backgroundVariant = "svg",
    backgroundScheme = "cool",
    showImage = true,

}: ProjectCardProps) {
    return (
        
            <motion.div
                // layout
                // whileHover={{ scale: 1.02 }}
                // transition={{ type: "spring", stiffness: 30, damping: 20 }} 
                className="relative border-b border-solid border-neutral-200 bg-white
                            w-full mx-auto
                            p-4
                            sm:px-10 md:px-14 lg:px-56 xl:px-56 py-16 
                            flex flex-col md:flex-row
                            md:gap-20
                            overflow-hidden
                "
            >   
                {showBackground && (
                    <HeaderBackground
                        className="absolute inset-[-8%] opacity-40"
                        variantOverride={backgroundVariant}
                        scheme={backgroundScheme}
                        randomize
                    />
                )}
                <div className="py-6 sm:py-10 px-0 
                                w-full
                                md:w-[45%] lg:w-[42%]
                                z-10
                                space-y-4">

                    {logoUrl &&
                    <img className="w-auto h-14 pb-2" src={logoUrl}/> }
                    <h1 className="text-4xl sm:text-5xl text-black-800 font-regular leading-tight">{title}</h1>
                    <p className="text-base text-black-800">{period}</p>
                    <p className="font-serif text-xl max-w-2xl text-black-800 leading-relaxed">{summary}</p>
                    {!hideButton && (
                    <Link 
                        to={href} 
                        className={`inline-flex w-auto px-6 py-2 border-2 border-black text-black-800 text-lg rounded-md hover:bg-black hover:border-black hover:text-white transition`}>
                        See Work
                    </Link>
                    )}
                    

                </div>
                {showImage && (
                    <div
                        className="
                            px-0 py-8
                            hidden
                            md:block
                            md:w-[55%] lg:w-[58%]
                            z-10
                        "
                    >
                        <ScrollReveal>
                        <img   
                            className="
                                
                                w-full h-full object-cover
                                "
                            src={imageUrl}
                            alt={'Screenshot of ${title}'}
                            
                        />  
                        </ScrollReveal>
                    </div>
                )}
                  
                
            </motion.div>
            
        
    )
}
