import Image from "next/image";
import github from "../images/github-icon.svg";
import linkedin from "../images/linkedin-icon.svg";

export default function SocialLinks() {
  return (
    <div className="flex absolute right-4 bottom-4 gap-4">
      <SocialLinkElement image={github} link={"/"} />
      <SocialLinkElement image={linkedin} link={"/"} />
    </div>
  );
}

export function SocialLinkElement({ image, link }) {
  return (
    <a href={link} className="transition-all hover:scale-105">
      <Image
        src={image}
        height={40}
        width={40}
        alt="Icon as a link for github"
      />
    </a>
  );
}
