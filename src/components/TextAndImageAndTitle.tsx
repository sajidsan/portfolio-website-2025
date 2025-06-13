import ScrollReveal from "./ScrollReveal"

interface TextAndImageAndTitleProps {
    title: string
    text: string
    imageUrl: string
    hideTitle?: boolean
    

}


export default function TextAndImageAndTitle({
    title,
    text,
    imageUrl,
    hideTitle = false,
}: TextAndImageAndTitleProps) {
    return (
        
            <div className="px-4 sm:px-56 py-4 flex flex-col">
                {!hideTitle && ( 
                    <h1 className="text-3xl font-light text-neutral-800 mb-4">{title}</h1>
                )}
                <div
                    className=" bg-white
                                sm:py-4
                                flex flex-col md:flex-row
                                overflow-hidden
                                space-x-8
                    "
                >
                    <div className=" 
                                    lg:w-2/5
                                    ">                    
                        <p className="font-serif font-regular mb-6 text-lg max-w-prose text-neutral-800">{text}</p>
                        

                    </div>
                    <img   
                        className="
                                    pb-4
                                    hidden
                                    lg:block
                                    lg:w-3/5
                                    w-full h-full object-cover
                                    "
                        src={imageUrl}
                        alt={'Screenshot of ${title}'}
                        
                    />   
                </div>
            </div>
        
    )
}