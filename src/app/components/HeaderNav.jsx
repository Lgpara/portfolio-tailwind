"use client";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "../utils";

export default function HeaderNav() {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const navElement = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "/projects" },
    { name: "Stacks", route: "/stacks" },
    { name: "About me", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];
  const handleNavElementClick = (route) => {
    router.push(route);
  };
  return (
    <nav className="flex fixed top-5 right-5 h-10 items-center rounded-3xl gap-1 z-30">
      {navElement.map((element, index) => (
        <div
          key={"nav element " + index}
          onClick={() => handleNavElementClick(element.route)}
          className={cn(
            " h-full flex items-center text-zinc-900 bg-zinc-100 border-solid border-2 border-zinc-900 text-xl cursor-pointer pl-6 pr-6 rounded-3xl transition-all",
            pathname === element.route && "bg-zinc-900 text-zinc-100",
            pathname !== element.route && "hover:translate-y-[2px]"
          )}
        >
          {element.name}
        </div>
      ))}
    </nav>
  );
}
