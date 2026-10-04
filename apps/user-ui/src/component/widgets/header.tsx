import { Search } from "lucide-react";
import Link from "next/link";
import { ProfileIcon } from "../icons/ProfileIcon";
import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";
import HeaderBottom from "./HeaderBottom";

export default function Header() {
    return (
        <div className="w-full bg-white">
            <div className="w-[80%] py-5 m-auto flex items-center justify-between">
                <div>
                    <Link href="/">
                        <span className="text-2xl text-gray-900 font-semibold">Gshop</span>
                    </Link>
                </div>
                <div className="w-[50%] relative">
                    <input type="text" placeholder="Search for products..."
                        className="w-full px-4 font-Poppins font-medium border-[2.5px] border-[#252627] outline-none h-13.75 text-gray-700"
                    />
                    <div className="w-15 cursor-pointer flex items-center justify-center h-13.75 bg-[#252627] absolute top-0 right-0">
                        <Search color="#fff" />
                    </div>

                </div>
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
            </div>
            <div className="border-b border-b-[#999999938]" />
                <HeaderBottom />
        </div>
    );
}