import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectAction";
import { Redirect } from "react-router-dom";

const CreateProject = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const { auth } = props;
  const [image, setImage] = useState(null);

  let showImage = (path) => {
    var reader = new FileReader();

    if (file) {
      // Load image as a base64 encoded URI
      setImage(reader.readAsDataURL(file));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    props.createProject({ title, content });
    props.history.push("/");
  };
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Create Project</h5>
        <div className="input-field">
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">content</label>
          <textarea
            className="materialize-textarea"
            cols="30"
            rows="10"
            id="content"
            onChange={(e) => {
              setContent(e.target);
            }}
          />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">create</button>
        </div>
      </form>

      <div style={{ border: "1px red solid", backgroundColor: "white" }}>
        <div>
          <input
            accept="image/*"
            id="myfile"
            type="file"
            name="myfile"
            onChange={(event) =>
              setFile(URL.createObjectURL(event.target.files[0]))
            }
          />
        </div>

        {file && (
          <img src={file} style={{ width: "100px", height: "auto" }}></img>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (pj) => dispatch(createProject(pj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
