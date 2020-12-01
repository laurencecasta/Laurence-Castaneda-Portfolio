import React from 'react'

import Header from './Header/Header'
import Main from './Main/Main'
import OtherWork from './OtherWork/OtherWork'

function Project(props) {
  const { title, summary, roles, languages, tools, img } = props;
  return (
    <div>
      <Header
        title={title}
        summary={summary}
        roles={roles}
        languages={languages}
        tools={tools}
        img={img}
      />
      <Main />
      <OtherWork />
    </div>
  )
}

export default Project
