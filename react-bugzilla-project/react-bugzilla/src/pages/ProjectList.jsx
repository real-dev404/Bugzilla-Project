import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectTable from "../components/ProjectTable";
import { fetchData } from "../api/index";
import SearchBar from "../components/SearchBar";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
      let res = await fetchData("projects");
      setProjects(res);
      console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <SearchBar  changeValues={(projectsArray) => setProjects(projectsArray)} address='projects' />
    <div>
      <h1 className="text-left mt-5 ml-5 container"> All Projects </h1>
      <table class="table table-hover table-striped table-bordered container">
        <thead>
          <tr class="table-dark">
            <th scope="col">Project ID</th>
            <th scope="col">Project Title</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((project) => (
              <ProjectTable key={project.id} project={project} />
            ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => navigate("/list")}>
        Bugs List
      </button>
    </div>
    </div>
  );
};

export default ProjectList;
