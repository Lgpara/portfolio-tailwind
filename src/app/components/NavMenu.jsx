"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavMenu() {
  const navElement = ["Projects", "About me", "Contact"];
  const [selectedNavElement, setSelectedNavElement] = useState(0);
  return (
    <div className="">
      <nav className=" flex gap-5 flex-col">
        {navElement.map((element, index) => (
          <div onMouseOver={()=>setSelectedNavElement(index)} className=" flex items-center gap-4 cursor-pointer">
            {index === selectedNavElement && <span class="material-symbols-outlined">double_arrow</span>}
            <div className=" text-5xl">{element}</div>
          </div>
        ))}
      </nav>
    </div>
  );
}
