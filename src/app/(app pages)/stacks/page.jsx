import Image from "next/image"
import PageTitle from "../../components/PageTitle"

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
        <div className="flex flex-col gap-10">
            {/* <PageTitle title={"Placeholder"} />
            <div className="flex gap-2">
                {stacks.current.map((element, index)=>(
                    <StackBlock key={"stack element " + index} image={element.image} name={element.name} />
                ))}
            </div>
            <PageTitle title={"Placeholder"} />
            <div>
                {stacks.learning.map((element, index)=>{
                    <StackBlock key={"stack element " + index} image={element.image} name={element.name} />
                })}
            </div> */}
            <StackSection name={"Stacks"} stacks={stacks.current} />
            <StackSection name={"Tech"} stacks={stacks.current} />
            <StackSection name={"Learning"} stacks={stacks.current} />
        </div>
    )
}


export function StackSection({name, stacks}){
    return(
        <section>
            <PageTitle title={name} />
            <div className="flex gap-4 flex-wrap">
                {stacks.map((element, index)=>(
                    <StackBlock key={"stack element " + index} image={element.image} name={element.name} />
                ))}
            </div>
        </section>
    )
}

export function StackBlock({image, name}){
    return(
        <div className="flex items-center gap-4 p-4 rounded-xl border-2 border-zinc-900 w-[fit-content]">
            <Image height={50} width={50} src={image} />
            <div className="text-2xl font-semibold pr-1">
                {name}
            </div>
        </div>
    )
}



