import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
    title: string
    period: string
    summary: string
    imageUrl: string
    href: string
}


export default function ProjectCard({

    title,
    period,
    summary,
    imageUrl,
    href,

}: ProjectCardProps) {
    return (
        <Link to={href}>
            <motion.div
                layout
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 30, damping: 20 }} 
                className="rounded-xl border boder-neutral-200 dark:border-neutral-800 hover:shadow-md transition overflow-hidden bg-white dark:bg-black"
            >
                <div className="p-6">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm text-neutral-500">{period}</p>
                    <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-sm">{summary}</p>

                </div>
                <img   
                    src={imageUrl}
                    alt={'Screenshot of ${title}'}
                    className="w-full -h-56 object-cover"
                />    
                
            </motion.div>
            
        </Link>
    )
}

