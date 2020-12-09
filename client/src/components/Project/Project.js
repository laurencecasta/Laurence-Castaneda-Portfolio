import React from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import OtherWork from './OtherWork/OtherWork'

function Project(props) {
  const { title, summary, roles, languages, tools, imgPath,
    scopeDescription, processDescription, processDescription2, resultDescription,
    liveLink, githubRepo } = props;
  return (
    <div>
      <Header
        title={title}
        summary={summary}
        roles={roles}
        languages={languages}
        tools={tools}
        imgPath={imgPath}
      />
      <Main
        scopeDescription={scopeDescription}
        processDescription={processDescription}
        processDescription2={processDescription2}
        resultDescription={resultDescription}
        liveLink={liveLink}
        githubRepo={githubRepo}
      />
      <OtherWork
        currentTitle={title}
      />
    </div>
  )
}

export default Project
