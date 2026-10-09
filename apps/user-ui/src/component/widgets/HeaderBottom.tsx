"use client"

import { navItems } from "@/configs/constants"
import { AlignLeft, ChevronDown, HeartIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ProfileIcon } from "../icons/ProfileIcon"
import CartIcon from "../icons/CartIcon"

export default function HeaderBottom(){
    const [show, setShow] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // Tracking scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`w-full transition-all duration-300 ${isSticky ? "fixed top-0 left-0 z-100 bg-white shadow-lg" : "relative"}`}>
            <div className={`w-[80%] relative m-auto flex items-center justify-between ${isSticky ? "pt-3" : "py-0"}`}>

                {/* All Dropdown */}
                <div className={`w-65 ${isSticky && "-mb-2"} cursor-pointer flex items-center justify-between px-5 h-12.5 bg-[#252627]`}
                onClick={() => setShow(!show)}
                >
                    <div className="flex items-center gap-2">
                        <AlignLeft color="white" />
                        <span className="text-white font-medium">All Departments</span>
                    </div>
                    <ChevronDown color="white"/>
                </div>

                {/* Dropdown Menu */}
                {show && (
                    <div className={`absolute left-0 ${isSticky ? "top-17.5" : "top-12.5"} w-65 h-100 bg-[#f5f5f5]`} ></div>

                    
                )}

                {/* Navigation links */}
                <div className="flex items-center">
                    {navItems.map((i:NavItemsTypes, index:number) => (
                        <Link href={i.href} className="px-5 font-medium text-lg text-gray-700 hover:text-blue-500" key={index}>
                            {i.title}
                        </Link>
                    ))}
                </div>

                <div>
                    {isSticky && (
                        <div className="flex items-center gap-8 text-gray-900">
                    <div className="flex items-center gap-2">
                        <Link href="/login"
                            className="border-2 w-12.5 h-12.5 flex items-center justify-center rounded-full border-[#06111b1a]"
                        >
                            <ProfileIcon />
                        </Link>

                        <Link href="/login">
                            <span className="block font-medium">
                                Hello,
                            </span>
                            <span className="font-semibold">Sign In</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link
                            href={"/wishlist"}
                            className="relative"
                        >
                            <HeartIcon />
                            <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute -top-2.5 -right-2.5">
                                <span className="text-white font-medium text-sm">0</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-5">
                        <Link
                            href={"/cart"}
                            className="relative"
                        >
                            <CartIcon
                                size={28}
                                className="text-gray-700"
                            />
                            <div className="w-6 h-6 border-2 border-white bg-red-500 rounded-full flex items-center justify-center absolute -top-2.5 -right-2.5">
                                <span className="text-white font-medium text-sm">0</span>
                            </div>
                        </Link>
                    </div>
                </div>
                    )}
                </div>
            </div>
        </div>
    )
}