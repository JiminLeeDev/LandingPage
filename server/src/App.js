import Site from "./components/Site";
import SiteList from "./components/SiteList";
import ProjectList from "./project_list.json";

export default function App() {
  return (
    <>
      <SiteList
        Sites={ProjectList.project_list.map((project) => (
          <Site
            name={project.name}
            link={project.link}
            github_link={project.github_link}
            summary={project.summary}
            tech_stacks={project.tech_stacks}
          />
        ))}
      />
    </>
  );
}
