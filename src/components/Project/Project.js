import React from 'react'

import Header from './Header/Header'

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
    </div>
  )
}

export default Project
