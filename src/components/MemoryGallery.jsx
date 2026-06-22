import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";

const photos = [
    {
        img: photo1,
        rotate: "-rotate-6",
        caption: "Chinese chotuu preetha",
    },
    {
        img: photo2,
        rotate: "rotate-3",
        caption: "Drama Queen",
    },
    {
        img: photo3,
        rotate: "-rotate-3",
        caption: "You are so cute even when angry",
    },
    {
        img: photo4,
        rotate: "rotate-6",
        caption: "Certified cutest human being.",
    },
    {
        img: photo5,
        rotate: "-rotate-2",
        caption: "That's me, sorry for the cameo",
    },
    {
        img: photo6,
        rotate: "rotate-2",
        caption: "And somehow you keep getting prettier.",
    },
];

export default function MemoryGallery() {
    return (
        <section className="bg-[#fff9f5] py-24 px-6">
            <h2
                className="text-center text-4xl md:text-6xl mb-16 text-pink-600 px-4"
                style={{
                    fontFamily: "Dancing Script",
                }}
            >
                How are you sooooooooooooooooooooooooooooooooooo pretty?
            </h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`
              bg-white
              p-4
              shadow-2xl
              ${photo.rotate}
              hover:scale-105
              hover:z-10
              transition-all
              duration-300
            `}
                    >
                        <img
                            src={photo.img}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-72 object-cover"
                        />

                        <p
                            className="
                text-center
                mt-4
                text-gray-700
                text-lg
                px-2
              "
                            style={{
                                fontFamily: "Dancing Script",
                            }}
                        >
                            "{photo.caption}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}