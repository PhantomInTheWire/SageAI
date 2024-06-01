"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { NewWindowIcon } from "@/components/icons";

export default function VoiceBasedLearning() {
    const BASE_URL = "http://127.0.0.1:8000";
    const [textInput, setTextInput] = useState<string>("");
    const [roadmapResponse, setRoadmapResponse] = useState<string>("");
    const [isLoadingSVG, setIsLoadingSVG] = useState<boolean>(false);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        let textInp = textInput.trim();
        if (!textInp) return;

        setIsLoadingSVG(true);
        axios.get(`${BASE_URL}/code/${textInp}`).then((response) => {
            console.log(response);
            setRoadmapResponse(response.data["img-url"]);
            setIsLoadingSVG(false);
        });
    };

    return (
        <div className="w-full flex flex-col items-center space-y-8 px-40">
            <h1 className="text-color2 text-3xl font-semibold">
                Voice Based Learning Companion
            </h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full flex bg-[#ffffff07] text-xl px-6 py-4 space-x-4 rounded-xl"
            >
                <input
                    type="file"
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
                    Go
                </button>
            </form>

            {isLoadingSVG && (
                <div className="p-8">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="5"
                        ></circle>
                    </svg>
                    <h3 className="text-xl">Analyzing the audio!</h3>
                </div>
            )}

            {roadmapResponse && !isLoadingSVG && (
                <div className="flex flex-col bg-[#ffffff08] px-8 py-6 rounded-xl">
                    <h2 className="text-2xl">
                        Your audio was analyzed successfully!
                    </h2>
                    <Link
                        className="flex gap-1 items-center mt-4 mx-auto py-1 px-3 bg-color2 rounded-xl font-medium text-xl"
                        href={roadmapResponse}
                        target="_blank"
                    >
                        Open <NewWindowIcon className="mx-auto h-6" />
                    </Link>
                </div>
            )}
        </div>
    );
}
