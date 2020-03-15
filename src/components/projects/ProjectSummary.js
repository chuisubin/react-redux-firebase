import React, { useState, useEffect } from "react";
import moment from "moment";
const ProjectSummary = props => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{props.project.title}</span>
        <p>id: {props.project.id}</p>
        <p>
          {props.project.authorFirstName} {props.project.authorLastName}
        </p>
        <p className="grey-text">{props.project.content}</p>
        <p className="grey-text">
          {moment(props.project.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
