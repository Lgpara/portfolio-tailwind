"use client"

import { useEffect, useState } from "react"
import BackBtn from "../components/BackBtn"
import HeaderNav from "../components/HeaderNav"
import { cn } from "../utils"

export default function Header(){
    const [scrollY, setScrollY] = useState(window.scrollY)
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return(
        <header onScroll={()=>setScroll(window.scrollY)} className={cn("bg-zinc-100 w-full h-20 z-50 fixed border-b-2 border-solid border-zinc-100", scrollY > 0 && "border-zinc-900")}>
            <BackBtn />
            <HeaderNav />
        </header>
    )
}

