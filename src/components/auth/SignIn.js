import React, { useState } from "react";
// import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";
const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authError, auth } = props;
  if (auth.uid) return <Redirect to="/" />;
  let handleSubmit = e => {
    e.preventDefault();
    props.signIn({ email, password });
    console.log(email, password);
  };

  return (
    <div className="container">
      <form onSubmit={e => handleSubmit(e)} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
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

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Login</button>
        </div>
        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
