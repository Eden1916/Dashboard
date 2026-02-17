import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
