"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const paths = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "Tools" },
    { href: "/about-us", label: "About Us" },
];

export default function Navlinks() {
    const pathname = usePathname();
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {paths.map((path, index) => (
                    <NavigationMenuItem
                        key={index}
                        className={`navlink opacity-60 ${
                            pathname === path.href ? "active" : ""
                        }`}
                    >
                        <Link href={path.href} legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                {path.label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
