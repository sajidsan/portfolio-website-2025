import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

interface ImagesSideBySideProps {
    imageUrl1: string
    imageUrl2: string

}


export default function ImagesSideBySide({
    imageUrl1,
    imageUrl2,
    

}: ImagesSideBySideProps) {
    return (
        <ScrollReveal>
        <div className="px-4 sm:px-56 flex flex-col md:flex-row overflow-hidden space-x-8">
            <img   
                className="
                            pb-4
                            block
                            w-full h-full sm:w-1/2 object-cover
                            "
                src={imageUrl1}
                alt={'Screenshot of ${title}'}
                
            /> 
            <img   
                className="
                            pb-4
                            block
                            w-full h-full sm:w-1/2 object-cover
                            "
                src={imageUrl2}
                alt={'Screenshot of ${title}'}
                
            />  
        </div>    
        </ScrollReveal>
    )
}