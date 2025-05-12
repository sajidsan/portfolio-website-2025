import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface ImageFullBleedProps {
    imageUrl: string

}


export default function ImageFullBleed({
    imageUrl,

    

}: ImageFullBleedProps) {
    return (
        
        <img   
            className="
                        py-4 sm:py-8
                        block
                        w-full h-full object-cover
                        "
            src={imageUrl}
            alt={'Screenshot of ${title}'}
            
        />  
        
    )
}
