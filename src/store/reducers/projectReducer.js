const initState = {
  projects: [
    { id: "1", title: "help", content: "Hello World" },
    { id: "2", title: "一拳超人", content: "Hello PDD" },
    { id: "3", title: "神木", content: "Hello PETER" }
  ]
}; //null obj

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create error");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
