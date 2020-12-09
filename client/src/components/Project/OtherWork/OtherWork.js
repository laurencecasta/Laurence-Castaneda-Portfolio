import React, {useEffect, useState} from 'react'

import Card from '../../Card/Card'

import '../../Work/styles.css'
import './styles.css'

import underscore from '../../Work/underscore.png'

function OtherWork(props) {
  const { currentTitle } = props;
  const [data, setData] = useState({projects: null, isFetching: false});
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setData({projects: [], isFetching: true});
        const response = await fetch('/api/projects');
        const projects = await response.json();
        setData({projects: projects, isFetching: false});
      } catch (e) {
        console.log(e);
        setData({projects: [], isFetching: false});
      }
    }
    fetchProjects();

  }, [])
  console.log(!data.projects ? 'Sit tight while I retrieve the projects...' :
    data.isFetching ? 'Fetching the projects...' :
    data.projects
  );

  const renderedCards = data.projects ? data.projects.filter(project => project.title !== currentTitle).map(project => {
    const  { project_uid, image_path, title, project_description, languages, route_name } = project;
    return (
      <Card
        key={project_uid}
        imgPath={image_path}
        title={title}
        description={project_description}
        tools={languages}
        link={route_name}
      />
    )
  }) : null;
  return (
    <section className='other-work' id='other-work'>
      <div className='title'>
        <h2>See More Work</h2>
        <img className='underscore' src={underscore} alt='underscore'></img>
      </div>
      <div className='cards'>
        {renderedCards }
      </div>
    </section>
  )
}

export default OtherWork
