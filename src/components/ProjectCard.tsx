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

}: ProjectCardProps) {
    return (
        
            <motion.div
                // layout
                // whileHover={{ scale: 1.02 }}
                // transition={{ type: "spring", stiffness: 30, damping: 20 }} 
                className="relative border-b border-solid border-neutral-200 bg-white
                            
                            p-4
                            sm:px-44 py-16 
                            flex flex-col md:flex-row
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
                <div className="p-12 
                                md:w-2/6
                                z-10">

                    {logoUrl &&
                    <img className="w-auto h-14 pb-2" src={logoUrl}/> }
                    <h1 className="mb-2 text-5xl text-black-800 font-regular leading-12">{title}</h1>
                    <p className="mb-2 text-base text-black-800">{period}</p>
                    <p className="mb-6 font-serif text-xl max-w-prose text-black-800">{summary}</p>
                    {!hideButton && (
                    <Link 
                        to={href} 
                        className={`px-6 py-2 border-2 border-black text-black-800 text-lg rounded-md hover:bg-black hover:border-black hover:text-white transition`}>
                        See Work
                    </Link>
                    )}
                    

                </div>
                <div
                    className="
                        px-12 py-8
                        hidden
                        md:block
                        md:w-4/6
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
                  
                
            </motion.div>
            
        
    )
}
