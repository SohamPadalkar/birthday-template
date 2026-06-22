import bouquetBg from "../assets/bouquet-bg.jpg";
import paperTexture from "../assets/paper-texture.jpg";
import spotifyFrame from "../assets/spotify-frame.jpg";

// ⚠️ Replace this with your actual Spotify Embed Link. 
// Example: "https://open.spotify.com/embed/track/4PTG3Z6ehGkBFm6qSg7bR6?utm_source=generator"
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/track/3HVWdVOQ0ZA45FuZGSfvns?utm_source=generator&theme=0&si=27ac84a9a2984df1";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `url(${bouquetBg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 px-6 py-10 md:px-12">

                {/* Heading */}

                {/* Main Layout */}
                <div className="max-w-7xl mx-auto">

                    {/* Desktop Layout */}
                    <div className="hidden lg:block relative h-[800px]">

                        {/* Letter */}
                        <div
                            className="
                                absolute
                                left-0
                                top-0
                                w-[650px]
                                rotate-[-3deg]
                                shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                                border
                                border-[#d6c2a4]
                            "
                            style={{
                                backgroundImage: `url(${paperTexture})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="bg-[#fffdf7]/60 p-12">
                                <h2
                                    className="text-6xl text-pink-600 mb-8"
                                    style={{
                                        fontFamily: "Dancing Script",
                                    }}
                                >
                                    Hey Beautiful,
                                </h2>

                                <div
                                    className="space-y-5 text-xl text-gray-800 leading-9"
                                    style={{
                                        fontFamily: "Cormorant Garamond",
                                    }}
                                >
                                    <p>
                                        Happy happpy happy happpy birthdayyyyy Preetha,
                                        I would like to thank the god, for giving me chance to be in your presence because of this day.
                                    </p>

                                    <p>
                                        I wish you have a blast today, not just today tommorow, day after tommorow every freaking day of your life.
                                    </p>

                                    <p>
                                        I wish you always stay happy, smiling (I have never seen a preetier smile than yours) and just the way you are,
                                    </p>

                                    <p className="text-pink-700 font-semibold">
                                        PERFECT
                                    </p>
                                </div>

                                <div
                                    className="mt-10 text-right text-5xl text-pink-600"
                                    style={{
                                        fontFamily: "Dancing Script",
                                    }}
                                >
                                    — Soham
                                </div>
                            </div>
                        </div>

                        {/* Spotify */}
                        <div
                            className="
                                absolute
                                right-0
                                top-[220px]
                                w-[420px]
                                rotate-[4deg]
                            "
                        >
                            <div className="relative">
                                <img
                                    src={spotifyFrame}
                                    alt="Spotify Frame"
                                    className="w-full"
                                />

                                <iframe
                                    src={SPOTIFY_EMBED_URL}
                                    className="
                                        absolute
                                        top-[12%]
                                        left-[8%]
                                        w-[84%]
                                        h-[76%]
                                        rounded-xl
                                    "
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    style={{ border: 0 }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex flex-col gap-10 items-center">

                        {/* Letter */}
                        <div
                            className="
                                w-full
                                max-w-[600px]
                                shadow-[0_25px_50px_rgba(0,0,0,0.35)]
                                border
                                border-[#d6c2a4]
                            "
                            style={{
                                backgroundImage: `url(${paperTexture})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="bg-[#fffdf7]/60 p-8">
                                <h2
                                    className="text-5xl text-pink-600 mb-6"
                                    style={{
                                        fontFamily: "Dancing Script",
                                    }}
                                >
                                    Hey Beautiful,
                                </h2>

                                <div
                                    className="space-y-4 text-lg text-gray-800 leading-8"
                                    style={{
                                        fontFamily: "Cormorant Garamond",
                                    }}
                                >
                                    <p>
                                        On your special day, I just wanted to remind
                                        you how truly amazing you are.
                                    </p>

                                    <p>
                                        You bring warmth, happiness and beauty
                                        wherever you go.
                                    </p>

                                    <p>
                                        I hope this year brings you every dream,
                                        every smile and every little thing your
                                        heart wishes for.
                                    </p>

                                    <p className="text-pink-700 font-semibold">
                                        Happy Birthday ❤️
                                    </p>
                                </div>

                                <div
                                    className="mt-8 text-right text-4xl text-pink-600"
                                    style={{
                                        fontFamily: "Dancing Script",
                                    }}
                                >
                                    — Soham
                                </div>
                            </div>
                        </div>

                        {/* Spotify (Fixed for Mobile Screens) */}
                        <div className="w-full max-w-[400px]">
                            <iframe
                                src={SPOTIFY_EMBED_URL}
                                width="100%"
                                height="352"
                                style={{ borderRadius: "12px", border: 0 }}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </div>

                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="text-center mt-16">
                    <p className="text-white text-lg animate-bounce">
                        ↓ Scroll for our memories
                    </p>
                </div>
            </div>
        </section>
    );
}