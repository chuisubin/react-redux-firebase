import React from "react";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
const ProjectDetails = props => {
  const { id } = props.match.params;
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    const {
      authorFirstName,
      authorLastName,
      content,
      title,
      authorId,
      createdAt
    } = project;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            by- {authorFirstName} {authorLastName}
            <div> {moment(createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container center">
        <p>
          <b>
            <h1>loading project....</h1>
          </b>
        </p>
      </div>
    );
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
