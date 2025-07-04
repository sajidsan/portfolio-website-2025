import { motion, useInView } from "framer-motion"
import { useRef } from "react" 


interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
}


export default function ScrollReveal({
    children,
    className = "",
    delay = 0.2,
    duration = 1,
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={isInView ? { opacity: 1, y: -5 } : {}}
            transition={{ duration, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}