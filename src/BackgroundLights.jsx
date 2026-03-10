import { motion } from "framer-motion";

export default function BackgroundLights() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#030303] overflow-hidden">
            {/* Soft light blobs */}
            <motion.div
                animate={{
                    x: [0, 150, -100, 0],
                    y: [0, 80, 150, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, -150, 100, 0],
                    y: [0, 150, -80, 0],
                    scale: [1, 0.9, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 -right-32 w-[700px] h-[700px] bg-blue-600/20 blur-[150px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, 100, -150, 0],
                    y: [0, -150, 100, 0],
                    rotate: [0, 45, -45, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-teal-500/15 blur-[130px] rounded-full"
            />
            <motion.div
                animate={{
                    opacity: [0.1, 0.25, 0.1],
                    scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-300/10 blur-[180px] rounded-full"
            />

            {/* Subtle Overlay to blend */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#030303] via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/20 to-[#030303]/80" />
        </div>
    );
}
