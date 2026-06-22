import bouquetBg from "../assets/bouquet-bg.jpg";
import paperTexture from "../assets/paper-texture.jpg";
import spotifyFrame from "../assets/spotify-frame.jpg";

// ⚠️ Replace this with your actual Spotify Embed Link. 
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/track/3HVWdVOQ0ZA45FuZGSfvns?utm_source=generator&theme=0&si=27ac84a9a2984df1";

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-scroll lg:bg-fixed"
            style={{
                backgroundImage: `url(${bouquetBg})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 px-4 py-10 md:px-12 min-h-screen flex flex-col justify-between">

                <div>
                    {/* Main Layout Wrapper */}
                    <div className="max-w-7xl mx-auto w-full">

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
                                    rounded-md
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

                            {/* Spotify Desktop */}
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
                        <div className="lg:hidden flex flex-col gap-10 items-center w-full px-2">

                            {/* Letter Card for Preetha */}
                            <div
                                className="
                                    w-full
                                    max-w-[500px]
                                    shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                                    border-2 
                                    border-[#d6c2a4]
                                    rounded-xl
                                    overflow-hidden
                                "
                                style={{
                                    backgroundImage: `url(${paperTexture})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundColor: "#fffdf7"
                                }}
                            >
                                <div className="bg-[#fffdf7]/70 p-6 sm:p-8 backdrop-blur-[1px]">
                                    <h2
                                        className="text-4xl sm:text-5xl text-pink-600 mb-6"
                                        style={{
                                            fontFamily: "Dancing Script",
                                        }}
                                    >
                                        Hey Beautiful,
                                    </h2>

                                    <div
                                        className="space-y-4 text-base sm:text-lg text-gray-800 leading-7 sm:leading-8"
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
                                        className="mt-8 text-right text-3xl sm:text-4xl text-pink-600"
                                        style={{
                                            fontFamily: "Dancing Script",
                                        }}
                                    >
                                        — Soham
                                    </div>
                                </div>
                            </div>

                            {/* Spotify Mobile with bouquet frame added back */}
                            <div className="w-full max-w-[360px] rotate-[2deg] drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                                <div className="relative w-full">
                                    <img
                                        src={spotifyFrame}
                                        alt="Spotify Frame"
                                        className="w-full h-auto block"
                                    />

                                    <iframe
                                        src={SPOTIFY_EMBED_URL}
                                        className="
                                            absolute
                                            top-[12%]
                                            left-[8%]
                                            w-[84%]
                                            h-[76%]
                                            rounded-lg
                                        "
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        style={{ border: 0 }}
                                        title="Spotify Playlist"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="text-center mt-12 mb-4 w-full">
                    <p className="text-white text-base md:text-lg animate-bounce drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        ↓ Scroll for our memories
                    </p>
                </div>
            </div>
        </section>
    );
}