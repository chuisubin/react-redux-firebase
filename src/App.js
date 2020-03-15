import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./Nav";
// import About from "./components/About";
// import Home from "./components/Home";
// import Room from "./components/Room";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/project/:id" component={ProjectDetails} exact />
          <Route path="/signin" component={SignIn} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/create" component={CreateProject} exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
