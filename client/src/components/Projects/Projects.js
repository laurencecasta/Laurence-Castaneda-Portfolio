import React, {useEffect, useState} from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Project from '../Project/Project'

function Projects() {
  const [data, setData] = useState({projects: null, isFetching: false});
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setData({projects: [], isFetching: true});
        const response = await fetch('https://laurence-castaneda-portfolio.vercel.app/api/projects/pages');
        const projects = await response.json();
        setData({projects: projects, isFetching: false});
      } catch (e) {
        console.log(e);
        setData({projects: [], isFetching: false});
      }
    }
    fetchProjects();

  }, []);
  const renderedProjects = data.projects ? data.projects.map(project => {
    const  { project_uid, title, route_name, path_name, roles, languages, tools,
      project_summary, scope_description, process_description,
      process_description_2, result_description,
      live_link, github_repo_link } = project;
    return (
      <Route path={route_name} key={project_uid}>
        <Project
          key={project_uid}
          title={title}
          summary={project_summary}
          roles={roles}
          languages={languages}
          tools={tools}
          imgPath={path_name}
          scopeDescription={scope_description}
          processDescription={process_description}
          processDescription2={process_description_2}
          resultDescription={result_description}
          liveLink={live_link}
          githubRepo={github_repo_link}
        />
      </Route>
    )
  }) : null;
  return (
    <div>
      <Switch>
        { renderedProjects }
      </Switch>
    </div>   
  )
}
export default Projects