import corkBoard from "../assets/cork-board.jpg";

const reasons = [
    {
        title: "#1",
        text: "Your smile",
        color: "bg-pink-100",
        rotate: "-rotate-3",
        font: "font-serif",
    },
    {
        title: "#2",
        text: "Your eyes",
        color: "bg-yellow-100",
        rotate: "rotate-2",
        font: "font-sans",
    },
    {
        title: "#3",
        text: "The way you are always right",
        color: "bg-blue-100",
        rotate: "-rotate-2",
        font: "font-mono",
    },
    {
        title: "#4",
        text: "Your determination",
        color: "bg-green-100",
        rotate: "rotate-3",
        font: "font-serif",
    },
    {
        title: "#5",
        text: "Your laugh",
        color: "bg-orange-100",
        rotate: "-rotate-1",
        font: "font-sans",
    },
    {
        title: "#6",
        text: "Your honesty",
        color: "bg-purple-100",
        rotate: "rotate-2",
        font: "font-mono",
    },
    {
        title: "#7",
        text: "Your beautiful heart",
        color: "bg-pink-200",
        rotate: "-rotate-2",
        font: "font-serif",
    },
    {
        title: "#8",
        text: "The way you always make everyone happy",
        color: "bg-yellow-200",
        rotate: "rotate-1",
        font: "font-sans",
    },
    {
        title: "#9",
        text: "Your confidence",
        color: "bg-blue-200",
        rotate: "-rotate-3",
        font: "font-mono",
    },
    {
        title: "#10",
        text: "Simply because you're you ❤️",
        color: "bg-green-200",
        rotate: "rotate-2",
        font: "font-serif",
    },
];

export default function ReasonsSection() {
    return (
        <section
            className="py-24 px-6"
            style={{
                backgroundImage: `url(${corkBoard})`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                fontFamily: 'Special Elite',
            }}
        >
            {/* Magazine Style Heading */}

            <div className="flex flex-wrap justify-center gap-3 mb-20">

                <span className="bg-white px-4 py-2 rotate-[-4deg] shadow-xl text-4xl font-black">
                    10
                </span>

                <span className="bg-yellow-100 px-4 py-2 rotate-[3deg] shadow-xl text-4xl font-black">
                    REASONS
                </span>

                <span className="bg-pink-100 px-4 py-2 rotate-[-2deg] shadow-xl text-4xl font-black">
                    WHY
                </span>

                <span className="bg-blue-100 px-4 py-2 rotate-[4deg] shadow-xl text-4xl font-black">
                    YOU'RE
                </span>

                <span className="bg-green-100 px-4 py-2 rotate-[-3deg] shadow-xl text-4xl font-black">
                    AMAZING
                </span>

            </div>

            {/* Notes */}

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className={`
              ${reason.color}
              ${reason.rotate}
              ${reason.font}
              p-6
              shadow-2xl
              hover:scale-105
              transition-all
              duration-300
              cursor-pointer
              relative
            `}
                    >
                        {/* Pin */}

                        <div
                            className="
                absolute
                -top-3
                left-1/2
                -translate-x-1/2
                w-5
                h-5
                rounded-full
                bg-red-500
                shadow-md
              "
                        />

                        <h3 className="text-3xl font-bold mb-4">
                            {reason.title}
                        </h3>

                        <p className="text-xl">
                            {reason.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}