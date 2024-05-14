"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import ReactMarkdown from "react-markdown";
// import Script from "next/script";
import axios from "axios";
import mermaid from "mermaid";

export default function RoadmapCreator() {
    const BASE_URL = "http://127.0.0.1:8000";
    const [textInput, setTextInput] = useState<string>("");
    const [roadmapResponse, setRoadmapResponse] = useState<string>("");
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let textInp = textInput.trim();
        if (!textInp) return;

        axios
            // .get(`${BASE_URL}/code/`, { params: { prompt: textInp } })
            .get(`${BASE_URL}/code/${textInp}`)
            .then((response) => {
                setRoadmapResponse(response.data["ans"]);
                // mermaid.initialize({
                //     securityLevel: "loose",
                //     startOnLoad: true,
                //     theme: "dark",
                // });
                // mermaid.run();
            });
    };

    // useEffect(() => {
    //     mermaid.initialize({ startOnLoad: true, theme: "dark" });
    //     mermaid.run();
    // }, [roadmapResponse]);

    return (
        <div className="w-full flex flex-col items-center space-y-8 px-40">
            <h1 className="text-color2 text-2xl font-semibold">
                Roadmap Creator
            </h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full flex bg-[#ffffff07] text-xl px-6 py-4 space-x-4 rounded-xl"
            >
                <input
                    type="text"
                    placeholder="Frontend web development"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className="flex-grow bg-transparent outline-none"
                    required
                />
                <button
                    type="submit"
                    className="py-1 px-3 bg-color2 rounded-xl font-medium"
                >
                    Create
                </button>
            </form>

            {roadmapResponse && (
                <Link
                    className="py-1 px-3 bg-color2 rounded-xl font-medium"
                    href={roadmapResponse}
                    target="_blank"
                >
                    Open
                </Link>
                // <div className="w-full">
                //     <Script
                //         type="module"
                //         strategy="afterInteractive" // Ensure JS is loaded before execution
                //         dangerouslySetInnerHTML={{
                //             __html: `
                //     import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@9/dist/mermaid.esm.min.mjs";
                //     mermaid.initialize({ startOnLoad: false });
                //     mermaid.contentLoaded();
                // `,
                //         }}
                //     />
                //     <pre
                //         className="mermaid"
                //         dangerouslySetInnerHTML={{ __html: roadmapResponse }}
                //     ></pre>
                // </div>
            )}
        </div>
    );
}
