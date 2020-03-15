import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectAction";
import { Redirect } from "react-router-dom";

const CreateProject = props => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { auth } = props;

  let handleSubmit = e => {
    e.preventDefault();
    props.createProject({ title, content });
    props.history.push("/");
  };
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">content</label>
          <textarea
            className="materialize-textarea"
            cols="30"
            rows="10"
            id="content"
            onChange={e => setContent(e.target.value)}
          />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">create</button>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    createProject: pj => dispatch(createProject(pj))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
