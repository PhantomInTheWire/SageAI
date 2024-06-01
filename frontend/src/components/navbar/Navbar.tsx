"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navlinks from "./Navlinks";
import logo from "@/assets/logo.png";

const paths = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about-us", label: "About Us" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className="navbar w-full h-16 fixed flex items-center justify-between px-4 bg-color1 z-50">
            <div className="logo h-full flex items-center">
                <img className="h-[60%]" src={logo.src} alt="logo" />
            </div>
            {/* <Navlinks /> */}
            <nav className="hidden sm:flex gap-6 items-center  pr-4">
                {paths.map((path, index) => (
                    <Link
                        className={`navlink text-lg font-light opacity-40 ${
                            pathname === path.href ? "active" : ""
                        }`}
                        href={path.href}
                        key={index}
                    >
                        {path.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
