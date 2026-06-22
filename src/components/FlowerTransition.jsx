import { useEffect } from "react";
import { motion } from "framer-motion";

import flower1 from "../assets/flower1.png";
import flower2 from "../assets/flower2.png";
import flower3 from "../assets/flower3.png";
import flower4 from "../assets/flower4.png";

const flowers = [flower1, flower2, flower3, flower4];

export default function FlowerTransition({ onComplete }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-white overflow-hidden">

            {[...Array(300)].map((_, i) => {

                const flower =
                    flowers[
                    Math.floor(
                        Math.random() * flowers.length
                    )
                    ];

                return (
                    <motion.img
                        key={i}
                        src={flower}
                        alt=""
                        initial={{
                            x: 0,
                            y: 0,
                            scale: 0,
                            opacity: 1,
                        }}
                        animate={{
                            x:
                                (Math.random() - 0.5) *
                                2500,

                            y:
                                (Math.random() - 0.5) *
                                1800,

                            rotate:
                                Math.random() * 720,

                            scale:
                                0.5 +
                                Math.random() * 1.5,

                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.2,
                            ease: "easeOut",
                        }}
                        className="
              absolute
              left-1/2
              top-1/2
              w-14
              md:w-20
            "
                    />
                );
            })}
        </div>
    );
}