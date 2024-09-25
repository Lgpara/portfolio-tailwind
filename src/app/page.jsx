"use client";

import { useEffect, useState } from "react";
import NavMenu from "./components/NavMenu";
import SocialLinks from "./components/SocialLinks";
import { cn } from "./utils";

export default function Home() {
  const [transitionState, setTransitionState] = useState(false);
  useEffect(() => {
    console.log(transitionState);
  }, [transitionState]);
  return (
    <main className=" flex h-screen bg-red-50">
      <HomeElement position={"left"} transitionState={transitionState}>
        LEFT
      </HomeElement>
      <HomeElement position={"right"} transitionState={transitionState}>
        <NavMenu
          transitionState={transitionState}
          setTransitionState={setTransitionState}
        />
      </HomeElement>
      <SocialLinks />
    </main>
  );
}

export function HomeElement({ children, position, transitionState }) {
  return (
    <div
      className={cn(
        "flex-1 h-screen bg-zinc-900 flex justify-center items-center transition-all",
        transitionState && position === "right" && "",
        transitionState && position === "left" && "flex-grow-0 w-0 overflow-hidden"
      )}
    >
      {children}
    </div>
  );
}
