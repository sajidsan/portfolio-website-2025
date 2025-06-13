import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface ImagesSideBySideProps {
    imageUrl1: string
    imageUrl2: string
    imageUrl3: string

}


export default function ImagesSideBySide({
    imageUrl1,
    imageUrl2,
    imageUrl3,
    

}: ImagesSideBySideProps) {
    return (
        
        <div className="px-4 sm:px-56 grid grid-cols-1 md:grid-cols-3 gap-4">
            <ScrollReveal
                delay={.1}
                >
                <img   
                    className="
                                pb-4
                                w-full h-full
                                "
                    src={imageUrl1}
                    alt={'Screenshot of ${title}'}
                    
                /> 
            </ScrollReveal>
            <ScrollReveal
                delay={.6}
            >
                <img   
                    className="
                                pb-4
                                
                                w-full h-full
                                "
                    src={imageUrl2}
                    alt={'Screenshot of ${title}'}
                    
                />  
            </ScrollReveal>
            <ScrollReveal
                delay={.8}
            >
                <img   
                    className="
                                pb-4
                                
                                w-full h-full
                                "
                    src={imageUrl3}
                    alt={'Screenshot of ${title}'}
                    
                />  
            </ScrollReveal>
        </div>    
        
    )
}