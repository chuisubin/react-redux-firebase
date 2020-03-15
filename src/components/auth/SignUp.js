import React, { useState } from "react";
// import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";
const SignUp = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordAgain, setPasswordAgain] = useState("");
  const { auth, signup } = props;
  if (auth.uid) return <Redirect to="/" />;

  let handleSubmit = e => {
    e.preventDefault();
    signup({
      email,
      password,
      firstName,
      lastName
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>

        <div className="input-field">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/*
        <div className="input-field">
          <label htmlFor="passwordAgain">password again</label>
          <input
            type="password"
            id="passwordAgain"
            onChange={e => setPasswordAgain(e.target.value)}
          />
        </div>
        */}

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
        <div className="center red-text">
          {props.authError ? <p>{props.authError}</p> : null}
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: newUser => dispatch(signUp(newUser))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
