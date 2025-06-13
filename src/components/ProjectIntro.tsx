import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface ProjectIntroProps {
    title: string
    period: string
    focus: string
    summary: string
    imageUrl?: string
    href: string
}


export default function ProjectIntro({

    title,
    period,
    focus,
    summary,
    imageUrl,
    href,

}: ProjectIntroProps) {
    return (
            <ScrollReveal>
            <div
                className="
                        
                            p-4
                            sm:pb-4 pt-16
                            sm:px-56 
                            flex flex-col md:flex-row
                            overflow-hidden
                "
            >
                <div className=" 
                                lg:w-3/6
                                ">
                    <h1 className="font-primary mb-2 text-5xl text-neutral-800 font-regular leading-12">{title}</h1>
                    <p className="font-sans uppercase mb-2 text-base text-neutral-800">{focus}</p>
                    <p className="font-serif mb-6 text-xl max-w-prose text-neutral-800">{summary}</p>
                    

                </div>
                {imageUrl &&
                    <img   
                        className="
                                    mx-20 px-20 pb-4 rounded-4xl
                                    hidden
                                    lg:block
                                    lg:w-3/6
                                    w-full h-full object-cover
                                    "
                        src={imageUrl}
                        alt={'Screenshot of ${title}'}
                        
                    />  
                }
                
                  
                
            </div>
            </ScrollReveal>
            
        
    )
}

