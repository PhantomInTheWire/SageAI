import homeImg from "@/assets/home.png";

export default function Home() {
    return (
        <main className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center px-4">
            <div className="w-1/2">
                <img
                    className="max-w-[80%] mx-auto"
                    src={homeImg.src}
                    alt="Background design"
                />
            </div>
            <div className="flex flex-col flex-grow gap-6 items-center">
                <div className="text-center text-[2rem] md:text-[3rem]">
                    <h3>Set of AI tools</h3>
                    <h3>to help</h3>
                    <h2 className="text-[2.5rem] md:text-[3.5rem]">
                        <span className="text-color2 font-semibold">
                            finish
                        </span>{" "}
                        your{" "}
                        <span className="text-color2 font-semibold">work</span>.
                    </h2>
                </div>
                <a
                    className="bg-color2 px-6 py-3 font-semibold text-xl rounded-lg"
                    href="/tools"
                >
                    Get Started!
                </a>
            </div>
        </main>
    );
}
