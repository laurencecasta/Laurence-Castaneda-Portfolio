import React from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import OtherWork from './OtherWork/OtherWork'

function Project(props) {
  const { title, summary, roles, languages, tools, imgPath } = props;
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
      <Main />
      <OtherWork
        currentTitle={title}
      />
    </div>
  )
}

export default Project
