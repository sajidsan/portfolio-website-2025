import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from './ScrollReveal'
import { clsx } from "clsx";


interface LargeVideoProps {

    videoUrl: string;
    variant?: 'default' | 'rounded';
    overlayText?: string;
    posterUrl?: string;
}


const variantStyles = {
    default: 'rounded-none',
    rounded: 'rounded-4xl border-2',

};  


export default function LargeVideo({
    videoUrl,
    variant = 'default',
    overlayText,
    posterUrl
}: LargeVideoProps) {
    return (
        <ScrollReveal>
            <div className="px-4 sm:px-10 md:px-14 lg:px-56 pb-4">
                <div className={clsx("relative overflow-hidden border-neutral-200", variantStyles[variant])}>
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={posterUrl}
                        className="block w-full h-full object-cover"
                    />
                    {overlayText && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-inherit">
                            <p className="text-white text-lg sm:text-xl font-regular text-center px-6 sm:px-10 md:px-14 lg:px-24 max-w-[34ch]">
                                {overlayText}
                            </p>
                        
                        </div>
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
}



