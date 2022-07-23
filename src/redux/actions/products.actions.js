export const setDataLoading = () => {
  return {
    type: "SET_DATA_LOADING",
  };
};

export const setDataSuccess = (data) => {
  return {
    type: "SET_DATA_SUCCESS",
    payload: data,
  };
};

export const setDataFailure = (error) => ({
  type: "SET_DATA_FAILURE",
  payload: error,
});


export const getProducts = () => {
  return (dispatch) => {
    dispatch(setDataLoading())
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((res) => dispatch(setDataSuccess(res)))
      .catch((err) => setDataFailure("Something went wrong!"));
  };
};
