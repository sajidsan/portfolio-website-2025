import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { clsx } from 'clsx'

interface LargeImageProps {
    imageUrl: string
    variant?: 'default' | 'rounded'

}

const variantStyles = {
    default: 'rounded-none',
    rounded: 'rounded-4xl border-2',
}

export default function LargeImage({
    imageUrl,
    variant= 'default'

    

}: LargeImageProps) {
    return (
        <ScrollReveal>
        <div className="px-4 sm:px-56 pb-4 overflow-hidden">
            <img   
                className={clsx(" block w-full h-full object-cover border-neutral-200", variantStyles[variant])}
                src={imageUrl}
                alt={'Screenshot of ${title}'}
                
            />  
        </div>
        </ScrollReveal>
    )
}

