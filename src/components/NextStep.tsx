import ScrollReveal from "./ScrollReveal"

interface TextBlockProps {
    children: React.ReactNode
    
}


export default function NextStep({
    children,
}: TextBlockProps) {
    return (
        
            <div className="px-4 sm:px-54 py-16 flex flex-col">
                <h1 className="text-2xl font-extralight tracking-wide text-left text-neutral-800 mb-4">{children}</h1>
            </div>
        
    )
}