import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface ProjectCardProps {
    title: string
    period: string
    summary: string
    imageUrl: string
    href: string
    accentColor?: string
    hideButton?: boolean
}


export default function ProjectCard({

    title,
    period,
    summary,
    imageUrl,
    href,
    accentColor = 'blue-700',
    hideButton = false

}: ProjectCardProps) {
    return (
        
            <motion.div
                // layout
                // whileHover={{ scale: 1.02 }}
                // transition={{ type: "spring", stiffness: 30, damping: 20 }} 
                className="border-1 border-solid border-neutral-200 bg-white
                        
                            p-4
                            sm:px-32 py-16 
                            flex flex-col md:flex-row
                            overflow-hidden
                "
            >
                <div className="p-12 
                                md:w-3/6
                                ">
                    <h1 className="mb-2 text-5xl text-black-800 font-regular leading-12">{title}</h1>
                    <p className="mb-2 text-base text-black-800">{period}</p>
                    <p className="mb-6 font-serif text-xl max-w-prose text-black-800">{summary}</p>
                    {!hideButton && (
                    <Link 
                        to={href} 
                        className={`px-6 py-2 border-2 border-black text-black-800 text-lg rounded-md hover:bg-${accentColor} hover:border-${accentColor} hover:text-white transition`}>
                        See Work
                    </Link>
                    )}
                    

                </div>
                
                <img   
                    className="
                                mx-20 px-20 py-20
                                hidden
                                md:block
                                md:w-3/6
                                w-full h-full object-cover
                                "
                    src={imageUrl}
                    alt={'Screenshot of ${title}'}
                    
                />  
                
                  
                
            </motion.div>
            
        
    )
}

