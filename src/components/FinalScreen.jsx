import starryNight from "../assets/starry-night.jpg";

export default function FinalScreen() {
    return (
        <section
            className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
            style={{
                backgroundImage: `url(${starryNight})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl">

                <h1
                    className="text-white text-5xl md:text-8xl mb-8"
                    style={{
                        fontFamily: "Cormorant Garamond",
                    }}
                >
                    You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.
                </h1>

                <div className="mt-12 text-5xl">
                    ❤️
                </div>

                <div
                    className="
            mt-6
            text-pink-200
            text-4xl
            md:text-6xl
          "
                    style={{
                        fontFamily: "Dancing Script",
                    }}
                >
                    Soham
                </div>

                <div
                    className="
            mt-24
            text-white/50
            text-sm
            tracking-[0.3em]
          "
                >
                    23 JUNE 2026
                </div>
            </div>

            {/* Stars twinkle */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse text-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    >
                        ✦
                    </div>
                ))}
            </div>
        </section>
    );
}