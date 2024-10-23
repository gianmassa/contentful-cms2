import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(projects);

  return (
    <section className="projects">
      <div className="projects-center">
        {projects.map((project) => {
          if (loading) {
            return <h2>Loading</h2>;
          }
          return (
            <div className="project" key={project.id}>
              <h5>{project.title}</h5>
              <img src={project.img} alt={project.title} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
