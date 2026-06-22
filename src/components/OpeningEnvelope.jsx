import { motion } from "framer-motion";
import envelope from "../assets/envelope.png";

export default function OpeningEnvelope({ onOpen }) {
    return (
        <div className="h-screen bg-pink-50 flex flex-col items-center justify-center">

            <motion.div
                whileHover={{
                    scale: 1.05,
                }}
                whileTap={{
                    scale: 0.95,
                }}
                onClick={onOpen}
                className="cursor-pointer"
            >
                <img
                    src={envelope}
                    alt="Envelope"
                    className="w-40 md:w-52"
                />
            </motion.div>

            <p className="mt-6 text-xl text-gray-700">
                Click to Open
            </p>
        </div>
    );
}