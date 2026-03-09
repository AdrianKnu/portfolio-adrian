import { motion } from "framer-motion";

export default function BackgroundLights() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#0a0a0f] overflow-hidden">
            {/* Soft light blobs */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, 100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"
            />
            <motion.div
                animate={{
                    x: [0, 50, -100, 0],
                    y: [0, -100, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-teal-600/15 blur-[100px] rounded-full"
            />

            {/* Subtle Overlay to blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]" />
        </div>
    );
}
