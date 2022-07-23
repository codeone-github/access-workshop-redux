const INITIAL_STATE = {
  name: "Tajammul",
  age: 25,
  address: "Channapatna",
  email: ""
}

const userReducer = (state = INITIAL_STATE, action) => {
  // { type: "CHANGE_NAME", payload: "Salman" }
  switch(action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.payload}
    case "LOGIN_SUCCESS": 
      return {...state, email: action.payload}
    case "RESET_EMAIL":
      return {...state, email: ""}
    default:
      return state;
  }
}


export default userReducer;


