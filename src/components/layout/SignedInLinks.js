import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const SignInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">new PJ</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/test">TestCAM</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      console.log("登出緊");
      dispatch(signOut());
    },
  };
};
export default connect(null, mapDispatchToProps)(SignInLinks);
