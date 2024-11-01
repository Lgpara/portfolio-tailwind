"use client"

import PageTitle from "../../components/PageTitle";
import data from "../../appdata.json";
import ImageCarousel from "../../components/ImageCarousel"
import { useRouter } from "next/navigation";
import githubIcon from "../../images/projects/github-icon.svg"
import websiteIcon from "../../images/projects/website-icon.svg"
import Image from "next/image";


export default function Projects() {
  const test = [1, 2, 3];
  const projectCluster = data.projectCluster;
  return (
    <div className="flex flex-col gap-40">
      {projectCluster.map((element, index) => (
        <ProjectSection
          title={element.name}
          projects={element.projects}
          key={"Project section " + index}
        />
      ))}
    </div>
  );
}

export function ProjectSection({ title, projects }) {
  return (
    <section>
      <PageTitle title={title} />
      <ProjectBlocContainer>
        {projects.map((element, index) => (
          <ProjectBloc projectData={element} key={index} />
        ))}
      </ProjectBlocContainer>
    </section>
  );
}

export function ProjectBlocContainer({ children }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

export function ProjectBloc({ projectData }) {
  return (
    <div className="w-full overflow-hidden rounded-xl min-h-96 bg-red-500 relative">
        {projectData.images && <ImageCarousel imagesArray={projectData.images}/>}
      <ProjectStacks
        stacks={projectData.stacks}
        projectName={projectData.name}
      />
      <ProjectBtnsContainer projectLink={projectData.projectLink} />
    </div>
  );
}




export function ProjectStacks({ stacks, projectName }) {
  return (
    <div className="absolute top-2 right-2 flex gap-2">
      {stacks.map((stack, index) => (
        <div
          className="text-zinc-100 border-solid border-2 py-2 px-4 rounded-full font-black bg-zinc-900"
          key={projectName + " stack " + index}
        >
          {stack}
        </div>
      ))}
    </div>
  );
}

export function ProjectBtnsContainer({projectLink}){
  const router = useRouter()
  const redirect = (link) => {
    router.push(link)
  }
  return(
    <>
    {projectLink &&  <div className="flex gap-2 absolute bottom-2 right-2">
        <ProjectBtn name={"Check Code"} event={()=>{redirect(projectLink.github)}} image={githubIcon} />
        <ProjectBtn name={"Website"} event={()=>{redirect(projectLink.website)}} image={websiteIcon} />
      </div>}
    </>
  )
}

export function ProjectBtn({ name, event, image }) {
  return (
    <div 
    className="cursor-pointer flex gap-3 text-zinc-100 border-solid border-2 py-2 px-4 rounded-full font-black bg-zinc-900"
      onClick={() => {
        event();
      }}
    >
      <div>
        <Image src={image} height={24} width={24} />
      </div>
      <div>
        {name}
      </div>
    </div>
  );
}
