import type { Metadata } from "next";
import { Outfit as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Navbar } from "@/components";
import bgDesign from "@/assets/bg-design.png";
import { FileX } from "lucide-react";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "SageAI",
    description: "Set of AI tools to help finish your work.",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            {/* <head>
              <title>{metadata.title}</title>
            </head> */}
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
                style={{
                    backgroundImage: `url(${bgDesign.src})`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
            >
                <Navbar />
                <div className="w-full min-h-screen pt-16 px-4 pb-8">
                    {children}
                </div>
            </body>
        </html>
    );
}
