import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    
    return (
      <li>
        {this.props.project.title} - {this.props.project.type}
      </li>
    );
  }
}

export default ProjectItem;
