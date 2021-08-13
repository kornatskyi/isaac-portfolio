import React from 'react'

function Project() {
    function createMarkup(project) {
        return { __html: project.embed };
      }
    return (
        <div>
            <h1>Project page</h1>
        </div>
    )
}

export default Project
