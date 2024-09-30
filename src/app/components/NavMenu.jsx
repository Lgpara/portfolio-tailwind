"use client";


import { useState } from "react";
import { cn } from "../utils";
import { useRouter } from "next/navigation";

export default function NavMenu({transitionState, setTransitionState}) {
  const router = useRouter()
  const navElement = ["projects", "stacks","about me", "contact"];
  const [selectedNavElement, setSelectedNavElement] = useState(0);
  const handleKeyPress = (e) => {
    if(e.key === "ArrowDown"){
      if(selectedNavElement < navElement.length - 1){
        setSelectedNavElement(selectedNavElement + 1)
      } else {
        setSelectedNavElement(0)
      }
    } else if (e.key === "ArrowUp"){
      if(selectedNavElement === 0){
        setSelectedNavElement(navElement.length - 1)
      } else {
        setSelectedNavElement(selectedNavElement - 1)
      } 
    } else {
      return
    }
  }
  const handleLinkClick = (element) => {
    setTransitionState(!transitionState)
    setTimeout(()=>{
      router.push(element)
    },650)
  }
  return (
    <div onKeyDown={(e)=>handleKeyPress(e)} className="h-full w-full bg-zinc-100 flex items-center justify-center">
      <nav className={cn("flex gap-5 flex-col customAnim-navMenu", transitionState && "customAnim-navMenuClose") }>
        {navElement.map((element, index) => (
          <div onClick={()=>{handleLinkClick(element)}} key={"nav element " + index} onMouseOver={()=>setSelectedNavElement(index)} className=" flex items-center gap-4 cursor-pointer relative">
            <span className={cn("absolute material-symbols-outlined text-zinc-900 customAnim-navChevron", index === selectedNavElement && "customAnim-navChevronOpen")}>double_arrow</span>
            <div className={cn("text-8xl text-zinc-900 font-sans antialiased transition-all", index === selectedNavElement && "scale-105 custom-text-shadow-navElement")}>{element}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}

