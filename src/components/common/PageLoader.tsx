import { motion } from "framer-motion";

export default function PageLoader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0E1642]">
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-light tracking-[0.25em] text-white">
                        BRIGHT
                    </h1>

                    <h1 className="text-5xl md:text-6xl font-light tracking-[0.25em] text-white mt-2">
                        SMILE
                    </h1>

                    <div className="mt-4 text-white/60 text-sm tracking-[0.4em] uppercase">
                        Dental Clinic
                    </div>
                </motion.div>

                <div className="mt-12 w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.4,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}