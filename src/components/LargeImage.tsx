import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface LargeImageProps {
    imageUrl: string

}


export default function LargeImage({
    imageUrl,

    

}: LargeImageProps) {
    return (
        <ScrollReveal>
        <img   
            className="
                        px-4 sm:px-56 pb-4
                        block
                        w-full h-full object-cover
                        "
            src={imageUrl}
            alt={'Screenshot of ${title}'}
            
        />  
        </ScrollReveal>
    )
}

