import { useEffect, useRef, useId } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

type Variant = "css" | "svg" | "canvas";
type PaletteKey =
    | "cool"
    | "warm"
    | "citrus"
    | "insight"
    | "relay"
    | "therachat"
    | "jut"
    | "yahoo"
    | "about";

type Palette = {
    css: [string, string, string];
    svg: { grad1: [string, string]; grad2: [string, string] };
    canvas: [string, string, string];
};

const palettes: Record<PaletteKey, Palette> = {
    cool: {
        css: [
            "radial-gradient(circle at 30% 30%, rgba(56,189,248,0.55), rgba(99,102,241,0.3), transparent 80%)",
            "radial-gradient(circle at 70% 40%, rgba(132,204,22,0.45), rgba(34,197,94,0.35), transparent 80%)",
            "radial-gradient(circle at 45% 60%, rgba(253,186,116,0.45), rgba(244,114,182,0.32), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(56,189,248,0.5)", "rgba(99,102,241,0.3)"],
            grad2: ["rgba(190,242,100,0.35)", "rgba(52,211,153,0.35)"],
        },
        canvas: ["rgba(56,189,248,0.32)", "rgba(99,102,241,0.28)", "rgba(190,242,100,0.28)"],
    },
    warm: {
        css: [
            "radial-gradient(circle at 20% 25%, rgba(248,113,113,0.55), rgba(249,115,22,0.35), transparent 80%)",
            "radial-gradient(circle at 75% 35%, rgba(251,146,60,0.5), rgba(234,179,8,0.35), transparent 80%)",
            "radial-gradient(circle at 50% 65%, rgba(244,114,182,0.45), rgba(217,70,239,0.32), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(248,113,113,0.5)", "rgba(249,115,22,0.3)"],
            grad2: ["rgba(251,146,60,0.35)", "rgba(234,179,8,0.35)"],
        },
        canvas: ["rgba(248,113,113,0.32)", "rgba(249,115,22,0.28)", "rgba(244,114,182,0.28)"],
    },
    citrus: {
        css: [
            "radial-gradient(circle at 25% 30%, rgba(190,242,100,0.55), rgba(74,222,128,0.35), transparent 80%)",
            "radial-gradient(circle at 70% 45%, rgba(252,211,77,0.5), rgba(250,204,21,0.35), transparent 80%)",
            "radial-gradient(circle at 55% 65%, rgba(110,231,183,0.45), rgba(59,130,246,0.28), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(190,242,100,0.5)", "rgba(74,222,128,0.3)"],
            grad2: ["rgba(252,211,77,0.35)", "rgba(59,130,246,0.3)"],
        },
        canvas: ["rgba(190,242,100,0.32)", "rgba(252,211,77,0.28)", "rgba(59,130,246,0.26)"],
    },
    insight: {
        css: [
            "radial-gradient(circle at 25% 30%, rgba(45,212,191,0.6), rgba(45,212,191,0.3), transparent 80%)",
            "radial-gradient(circle at 70% 40%, rgba(250,204,21,0.6), rgba(234,179,8,0.35), transparent 80%)",
            "radial-gradient(circle at 50% 65%, rgba(45,212,191,0.45), rgba(250,204,21,0.3), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(45,212,191,0.55)", "rgba(45,212,191,0.35)"],
            grad2: ["rgba(250,204,21,0.55)", "rgba(234,179,8,0.35)"],
        },
        canvas: ["rgba(45,212,191,0.36)", "rgba(45,212,191,0.26)", "rgba(250,204,21,0.3)"],
    },
    relay: {
        css: [
            "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.6), rgba(37,99,235,0.35), transparent 80%)",
            "radial-gradient(circle at 72% 42%, rgba(168,85,247,0.55), rgba(168,85,247,0.32), transparent 80%)",
            "radial-gradient(circle at 50% 68%, rgba(59,130,246,0.4), rgba(168,85,247,0.28), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(37,99,235,0.55)", "rgba(37,99,235,0.35)"],
            grad2: ["rgba(168,85,247,0.45)", "rgba(168,85,247,0.3)"],
        },
        canvas: ["rgba(37,99,235,0.34)", "rgba(59,130,246,0.28)", "rgba(168,85,247,0.3)"],
    },
    therachat: {
        css: [
            "radial-gradient(circle at 22% 28%, rgba(234,88,12,0.6), rgba(234,88,12,0.35), transparent 80%)",
            "radial-gradient(circle at 70% 40%, rgba(13,148,136,0.55), rgba(13,148,136,0.32), transparent 80%)",
            "radial-gradient(circle at 48% 64%, rgba(234,88,12,0.4), rgba(13,148,136,0.28), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(234,88,12,0.55)", "rgba(234,88,12,0.35)"],
            grad2: ["rgba(13,148,136,0.5)", "rgba(13,148,136,0.32)"],
        },
        canvas: ["rgba(234,88,12,0.34)", "rgba(13,148,136,0.3)", "rgba(234,88,12,0.24)"],
    },
    jut: {
        css: [
            "radial-gradient(circle at 20% 30%, rgba(249,115,22,0.6), rgba(249,115,22,0.35), transparent 80%)",
            "radial-gradient(circle at 72% 42%, rgba(253,224,71,0.55), rgba(250,204,21,0.32), transparent 80%)",
            "radial-gradient(circle at 50% 68%, rgba(249,115,22,0.4), rgba(253,224,71,0.28), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(249,115,22,0.55)", "rgba(249,115,22,0.35)"],
            grad2: ["rgba(253,224,71,0.5)", "rgba(250,204,21,0.3)"],
        },
        canvas: ["rgba(249,115,22,0.34)", "rgba(253,224,71,0.3)", "rgba(250,204,21,0.26)"],
    },
    yahoo: {
        css: [
            "radial-gradient(circle at 24% 30%, rgba(236,72,153,0.6), rgba(236,72,153,0.35), transparent 80%)",
            "radial-gradient(circle at 70% 42%, rgba(34,197,94,0.55), rgba(34,197,94,0.32), transparent 80%)",
            "radial-gradient(circle at 52% 66%, rgba(236,72,153,0.4), rgba(34,197,94,0.28), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(236,72,153,0.55)", "rgba(236,72,153,0.35)"],
            grad2: ["rgba(34,197,94,0.5)", "rgba(34,197,94,0.3)"],
        },
        canvas: ["rgba(236,72,153,0.34)", "rgba(34,197,94,0.3)", "rgba(236,72,153,0.24)"],
    },
    about: {
        css: [
            "radial-gradient(circle at 25% 35%, rgba(255,183,150,0.6), rgba(255,183,150,0.35), transparent 80%)",
            "radial-gradient(circle at 70% 45%, rgba(205,180,255,0.55), rgba(205,180,255,0.32), transparent 80%)",
            "radial-gradient(circle at 50% 65%, rgba(255,183,150,0.45), rgba(205,180,255,0.28), transparent 85%)",
        ],
        svg: {
            grad1: ["rgba(255,183,150,0.55)", "rgba(255,183,150,0.35)"],
            grad2: ["rgba(205,180,255,0.5)", "rgba(205,180,255,0.3)"],
        },
        canvas: ["rgba(255,183,150,0.32)", "rgba(205,180,255,0.3)", "rgba(255,183,150,0.24)"],
    },
};

const variants: Variant[] = ["css", "svg", "canvas"];

function useBgVariant(): Variant {
    const [params] = useSearchParams();
    const requested = params.get("bg")?.toLowerCase() as Variant | null;
    return variants.includes(requested ?? "svg") ? (requested as Variant) : "svg";
}

type Props = {
    className?: string;
    variantOverride?: Variant;
    scheme?: PaletteKey;
    randomize?: boolean;
};

export default function HeaderBackground({ className, variantOverride, scheme = "cool", randomize = false }: Props) {
    const variant = variantOverride ?? useBgVariant();
    const palette = palettes[scheme] ?? palettes.cool;
    const jitters = useRef({
        a: { top: Math.random() * 0.3 + 0.05, left: Math.random() * 0.15 - 0.1 },
        b: { top: Math.random() * 0.3 + 0.25, right: Math.random() * 0.15 - 0.1 },
        c: { top: Math.random() * 0.25 + 0.5, left: Math.random() * 0.35 + 0.1 },
    }).current;

    const wrapperClass = className ?? "inset-0";
    return (
        <div className={`pointer-events-none absolute ${wrapperClass} z-0 overflow-hidden`}>
            {variant === "svg" ? (
                <SvgBlobs palette={palette} />
            ) : variant === "canvas" ? (
                <CanvasShimmer palette={palette} />
            ) : (
                <CssOrbs palette={palette} jitter={randomize ? jitters : undefined} />
            )}
        </div>
    );
}

type CssOrbsProps = { palette: Palette; jitter?: { a: { top: number; left: number }; b: { top: number; right: number }; c: { top: number; left: number } } };

function CssOrbs({ palette, jitter }: CssOrbsProps) {
    const jitterA = jitter?.a;
    const jitterB = jitter?.b;
    const jitterC = jitter?.c;

    return (
        <div className="relative w-full h-full">
            <motion.div
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl"
                style={{
                    left: `calc(-10% + ${(jitterA?.left ?? 0) * 100}%)`,
                    top: `${(jitterA?.top ?? 0.06) * 100}%`,
                    background: palette.css[0],
                }}
                animate={{ x: [0, 36, -28, 0], y: [0, -34, 28, 0], scale: [1, 1.12, 0.92, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full blur-3xl"
                style={{
                    right: `calc(-8% + ${(jitterB?.right ?? 0) * 100}%)`,
                    top: `${(jitterB?.top ?? 0.28) * 100}%`,
                    background: palette.css[1],
                }}
                animate={{ x: [0, -32, 34, 0], y: [0, 30, -24, 0], scale: [1, 1.1, 0.9, 1] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full blur-3xl"
                style={{
                    left: `calc(25% + ${(jitterC?.left ?? 0.25) * 100}%)`,
                    top: `${(jitterC?.top ?? 0.55) * 100}%`,
                    background: palette.css[2],
                }}
                animate={{ x: [0, 26, -22, 0], y: [0, -26, 30, 0], scale: [1, 1.12, 0.88, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

type SvgProps = { palette: Palette };

function SvgBlobs({ palette }: SvgProps) {
    const uid = useId();
    const grad1Id = `blobGrad1-${uid}`;
    const grad2Id = `blobGrad2-${uid}`;
    const blurId = `blur-${uid}`;

    return (
        <motion.svg
            viewBox="0 0 600 300"
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: [0.8, 0.95, 0.85] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        >
            <defs>
                <linearGradient id={grad1Id} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={palette.svg.grad1[0]} />
                    <stop offset="100%" stopColor={palette.svg.grad1[1]} />
                </linearGradient>
                <linearGradient id={grad2Id} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={palette.svg.grad2[0]} />
                    <stop offset="100%" stopColor={palette.svg.grad2[1]} />
                </linearGradient>
                <filter id={blurId} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
                </filter>
            </defs>
            <motion.path
                d="M120 80Q180 30 260 70T360 170Q310 240 240 230T120 170Q60 130 120 80Z"
                fill={`url(#${grad1Id})`}
                filter={`url(#${blurId})`}
                animate={{
                    x: [0, -36, 22, 0],
                    y: [0, 26, -18, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M420 60Q520 40 500 140T420 240Q360 260 320 200T360 100Q360 60 420 60Z"
                fill={`url(#${grad2Id})`}
                filter={`url(#${blurId})`}
                animate={{
                    x: [0, 34, -22, 0],
                    y: [0, -22, 24, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </motion.svg>
    );
}

type CanvasProps = { palette: Palette };

function CanvasShimmer({ palette }: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let frame = 0;
        const dpr = window.devicePixelRatio || 1;
        const resize = () => {
            const { width, height } = canvas.getBoundingClientRect();
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
        };
        resize();

        const colors = palette.canvas;
        const blobs = Array.from({ length: 4 }).map((_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: 170 + Math.random() * 90,
            vx: (Math.random() * 0.5 + 0.2) * (i % 2 ? 1 : -1),
            vy: (Math.random() * 0.5 + 0.2) * (i % 2 ? -1 : 1),
            color: colors[i % colors.length],
        }));

        const render = () => {
            frame = requestAnimationFrame(render);
            const { width, height } = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, width, height);
            ctx.save();
            ctx.filter = "blur(32px)";

            blobs.forEach((b) => {
                b.x += b.vx;
                b.y += b.vy;
                if (b.x - b.r > width || b.x + b.r < 0) b.vx *= -1;
                if (b.y - b.r > height || b.y + b.r < 0) b.vy *= -1;
                const grad = ctx.createRadialGradient(b.x, b.y, b.r * 0.25, b.x, b.y, b.r);
                grad.addColorStop(0, b.color);
                grad.addColorStop(1, "rgba(255,255,255,0)");
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                ctx.fill();
            });
            ctx.restore();
        };

        frame = requestAnimationFrame(render);
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
