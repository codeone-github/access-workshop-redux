export const loginSuccess = (email) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: email,
  };
}

export const resetEmail = () => {
  return {
    type: "RESET_EMAIL",
  }
}



/**
 * 
 */