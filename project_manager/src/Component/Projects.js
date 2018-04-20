import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let projectItems;
    if(this.props.projects.projects){
      projectItems = this.props.projects.projects.map(project => {

        return (
          <ProjectItem key={project.title} project={project} />
        );
        
      })
    }
    return (
      <div className="projects">
        {projectItems}
      </div>
    );
  }
}

export default Projects;
