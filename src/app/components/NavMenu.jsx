"use client";


import { useState } from "react";
import { cn } from "../utils";


export default function NavMenu() {
  const navElement = ["Projects", "Stacks","About me", "Contact"];
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
  return (
    <div onKeyDown={(e)=>handleKeyPress(e)} className="h-full w-full bg-zinc-100 flex items-center justify-center">
      <nav className=" flex gap-5 flex-col customAnim-navMenu">
        {navElement.map((element, index) => (
          <a key={"nav element " + index} href={"/"} onMouseOver={()=>setSelectedNavElement(index)} className=" flex items-center gap-4 cursor-pointer ">
            <span className={cn("material-symbols-outlined text-zinc-900 customAnim-navChevron", index === selectedNavElement && "customAnim-navChevronOpen")}>double_arrow</span>
            <div className=" text-8xl text-zinc-900 font-sans antialiased">{element}</div>
          </a>
        ))}
      </nav>
    </div>
  );
}
