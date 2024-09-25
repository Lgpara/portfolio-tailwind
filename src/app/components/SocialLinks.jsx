import Image from "next/image"
import github from "../images/github-icon.svg"
import linkedin from "../images/linkedin-icon.svg"

export default function SocialLinks(){
    return(
        <div className="flex absolute right-4 bottom-4 gap-4">
            <a href="https://www.youtube.com/">
                <Image src={github} height={40} width={40} alt="Icon as a link for github" />
            </a>
            <a href="https://www.youtube.com/">
                <Image src={linkedin} height={40} width={40} alt="Icon  as a link for linkedin" />
            </a>
        </div>
    )
}