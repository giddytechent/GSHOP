"use client"

import { AlignLeft } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeaderBottom(){
    const [show, setShow] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    // Tracking scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY > 100) {
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
                </div>
            </div>
        </div>
    )
}