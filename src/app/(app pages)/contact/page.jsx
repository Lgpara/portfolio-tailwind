"use client"
import { useState } from "react"
import copyIcon from "../../images/icons/copy.svg"
import { cn } from "../../utils"


export default function Contact(){
    return(
        <div>
            <MailBtn />
        </div>
    )
}


export function MailBtn(){
    const mail = "louisgerber004@gmail.com"
    const copyMail = () =>{
        navigator.clipboard.writeText(mail)
        setBtnColorGreen(true)
        setTimeout(()=>{
            setBtnColorGreen(false)
        },3000)
    }
    const [hoverState, setHoverState] = useState(false)
    const [btnColorGreen, setBtnColorGreen] = useState(false)
    return(
        <div onClick={()=>copyMail()} className="flex flex-col items-center gap-2">
            <div onMouseEnter={()=>{setHoverState(true)}} onMouseLeave={()=>{setHoverState(false)}} className="relative border-solid border-4 border-zinc-900 rounded-full overflow-hidden" >
                <div className={cn(" cursor-pointer text-5xl flex gap-5 py-4 bg-zinc-100", btnColorGreen && "bg-green-300")}>
                    <div className="ml-8">louisgerber004@gmail.com</div>
                    {/* <Image height={50} width={50} src={copyIcon} className="mr-8" /> */}
                    <img src={copyIcon} 
                    className="" alt="" />
                </div>
                <div className={cn("bg-red-400 flex-nowrap w-0 h-full rounded-full absolute top-0 left-0 cursor-pointer text-5xl flex gap-5 py-4 testTransition", hoverState && "w-full", btnColorGreen && "bg-green-300")}>
                    <div className="ml-8">louisgerber004@gmail.com</div>
                    
                </div>
            </div>
            <div>Click to copy</div>
        </div>
    )
}

export function ContactSocialLink(){
    return(
        <div>
            <link rel="stylesheet" href="" />
            <link rel="stylesheet" href="" />
        </div>
    )
}