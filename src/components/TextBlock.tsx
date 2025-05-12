import ScrollReveal from "./ScrollReveal"

interface TextBlockProps {
    text: string
    
}


export default function TextBlock({
    text,
}: TextBlockProps) {
    return (
        
            <div className="px-4 sm:px-54 py-16 flex flex-col">
                <h1 className="text-5xl font-extralight tracking-wide text-center text-neutral-800 mb-4">{text}</h1>
            </div>
        
    )
}