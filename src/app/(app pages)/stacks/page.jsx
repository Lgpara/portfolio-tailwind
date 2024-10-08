import Image from "next/image"

export default function Stacks(){
    const stacks = {
        current : [
            {name : "HTML" , image : "images/icons/html.svg"},
            {name : "CSS" , image : "images/icons/css.svg"},
            {name : "Javascript" , image : "images/icons/javascript.svg"},
            {name : "React" , image : "images/icons/react.svg"},
            {name : "Next.js" , image : "images/icons/nextjs.svg"},
            {name : "Tailwind" , image : "images/icons/tailwind.svg"},
            {name : "Typescript" , image : "images/icons/typescript.svg"},
            {name : "Sass" , image : "images/icons/sass.svg"},
            {name : "Xata" , image : "images/icons/xata.svg"}
        ],
        learning : [
            {name : "" , image : ""}
        ],
    }
    return(
        <div>
            {stacks.current.map((element, index)=>(
                <StackBlock key={"stack element " + index} image={element.image} name={element.name} />
            ))}
        </div>
    )
}

export function StackBlock({image, name}){
    return(
        <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-500 border-2 border-zinc-900 w-[fit-content]">
            <Image height={28} width={28} src={image} />
            <div className="text-lg font-semibold text-zinc-100 pr-1">
                {name}
            </div>
        </div>
    )
}