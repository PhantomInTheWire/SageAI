import Link from "next/link";
import roadmap from "@/assets/roadmap.png";
import presentation from "@/assets/presentation.png";

const TOOLS = [
    { name: "Roadmap Creator", href: "roadmap-creator", img: roadmap.src },
    {
        name: "Presentation Builder",
        href: "presentation-builder",
        img: presentation.src,
    },
];

export default function Tools() {
    return (
        <div className="w-full pt-8">
            {/* <h2>AI Tools</h2> */}
            <div className="w-full grid grid-cols-3 gap-12 md:px-12">
                {TOOLS.map((tool, index) => (
                    <div
                        className="flex flex-col justify-between bg-[#ffffff07] space-y-4 py-4 rounded-xl"
                        key={index}
                    >
                        <h2 className="text-color2 text-3xl font-semibold text-center">
                            {tool.name}
                        </h2>
                        <div className="w-full flex items-center">
                            <img
                                className="w-[70%] mx-auto"
                                src={tool.img}
                                alt={tool.name}
                            />
                        </div>
                        <Link
                            className="bg-color2 inline-block mx-auto px-3 py-1 font-medium text-lg rounded-lg"
                            href={`./tools/${tool.href}`}
                        >
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
