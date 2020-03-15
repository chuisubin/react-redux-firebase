import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const SignOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // signOut
  };
};
export default connect(null, mapDispatchToProps)(SignOutLinks);
