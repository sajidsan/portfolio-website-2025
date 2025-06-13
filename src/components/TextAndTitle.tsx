import ScrollReveal from "./ScrollReveal"

interface TextAndTitleProps {
    title: string
    text: string
    hideTitle?: boolean
    

}


export default function TextAndTitle({
    title,
    text,
    hideTitle = false,
}: TextAndTitleProps) {
    return (
        
            <div className="px-4 sm:px-56 pb-4 pt-8 flex flex-col">
                {!hideTitle && (
                <h1 className="text-3xl font-light text-neutral-800 mb-4">{title}</h1>
                )}
                <p className="font-serif text-xl text-neutral-800 max-w-prose">{text}</p>
            </div>
        
    )
}