import PageTitle from "../../components/PageTitle";
import data from "../../appdata.json";
import ImageCarousel from "../../components/ImageCarousel"

export default function Projects() {
  const test = [1, 2, 3];
  const projectCluster = data.projectCluster;
  return (
    // <>
    //   <PageTitle title={"Placeholder"} />
    //   <ProjectBlocContainer>
    //     {test.map((element, index) => (
    //       <ProjectBloc projectData={element} key={index} />
    //     ))}
    //   </ProjectBlocContainer>
    //   <PageTitle title={"Placeholder"} />
    //   <ProjectBlocContainer>
    //     {test.map((element, index) => (
    //       <ProjectBloc projectData={element} key={index} />
    //     ))}
    //   </ProjectBlocContainer>
    //   <PageTitle title={"Placeholder"} />
    //   <ProjectBlocContainer>
    //     {test.map((element, index) => (
    //       <ProjectBloc projectData={element} key={index} />
    //     ))}
    //   </ProjectBlocContainer>
    // </>
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
    <div className="w-full rounded-3xl h-96 bg-red-500 relative">
        {/* <ImageCarousel imagesArray={projectData.images}/> */}
      <ProjectStacks
        stacks={projectData.stacks}
        projectName={projectData.name}
      />
    </div>
  );
}

export function ProjectStacks({ stacks, projectName }) {
  return (
    <div className="absolute top-2 right-2 flex gap-2">
      {stacks.map((stack, index) => (
        <div
          className="border-solid border-2 py-2 px-4 rounded-full font-black"
          key={projectName + " stack " + index}
        >
          {stack}
        </div>
      ))}
    </div>
  );
}

export function ProjectBtn({ name, event }) {
  return (
    <div
      onClick={() => {
        event();
      }}
    ></div>
  );
}
