import { motion } from "framer-motion"

type Bubble = {
    size: number
    x: number
    y: number
    color: string
    opacity: number
    duration: number
    drift: { x: number[]; y: number[] }
}

const bubbles: Bubble[] = [
    { size: 7,  x: -64, y: -24, color: "bg-indigo-400", opacity: 0.45, duration: 9,  drift: { x: [0, 12, -8, 5, 0],   y: [0, -10, 14, -6, 0]  } },
    { size: 5,  x:  58, y: -40, color: "bg-sky-300",    opacity: 0.4,  duration: 11, drift: { x: [0, -9, 6, -4, 0],   y: [0,  12, -8,  9, 0]  } },
    { size: 9,  x:  72, y:  20, color: "bg-lime-300",   opacity: 0.35, duration: 13, drift: { x: [0, 8, -14, 6, 0],   y: [0,  -7, 10, -5, 0]  } },
    { size: 4,  x: -50, y:  52, color: "bg-indigo-300", opacity: 0.4,  duration: 8,  drift: { x: [0, -6, 10, -5, 0],  y: [0,   8, -12, 7, 0]  } },
    { size: 6,  x:  18, y: -60, color: "bg-sky-400",    opacity: 0.3,  duration: 14, drift: { x: [0, 10, -5,  8, 0],  y: [0,  -8,  6, -10, 0] } },
    { size: 5,  x: -72, y:  16, color: "bg-lime-400",   opacity: 0.35, duration: 10, drift: { x: [0, -11, 7, -6, 0],  y: [0,   6, -9,  8, 0]  } },
    { size: 8,  x:  44, y:  58, color: "bg-indigo-400", opacity: 0.3,  duration: 12, drift: { x: [0,  7, -10, 4, 0],  y: [0,  11, -7,  5, 0]  } },
    { size: 4,  x: -28, y: -68, color: "bg-sky-300",    opacity: 0.45, duration: 7,  drift: { x: [0, -8,  5, -9, 0],  y: [0,  -5, 11, -8, 0]  } },
    { size: 6,  x:  80, y: -10, color: "bg-lime-300",   opacity: 0.3,  duration: 15, drift: { x: [0, 9,  -6,  7, 0],  y: [0,  -9,  7, -4, 0]  } },
    { size: 5,  x: -16, y:  72, color: "bg-indigo-300", opacity: 0.4,  duration: 9,  drift: { x: [0, -5,  9, -7, 0],  y: [0,   7, -5,  9, 0]  } },
]

interface FloatingBubblesProps {
    children: React.ReactNode
}

export default function FloatingBubbles({ children }: FloatingBubblesProps) {
    return (
        <div className="relative inline-flex items-center justify-center">
            {bubbles.map((b, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${b.color} pointer-events-none`}
                    style={{
                        width: b.size,
                        height: b.size,
                        left: `calc(50% + ${b.x}px)`,
                        top: `calc(50% + ${b.y}px)`,
                        opacity: b.opacity,
                    }}
                    animate={{ x: b.drift.x, y: b.drift.y }}
                    transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
            {children}
        </div>
    )
}
