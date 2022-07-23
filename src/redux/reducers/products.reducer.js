const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DATA_LOADING":
      return { ...state, loading: true };

    case "SET_DATA_SUCCESS":
      return { ...state, loading: false, items: action.payload };

    case "SET_DATA_FAILURE":
      return {...state, loading: false, error: action.payload}

    default:
      return state;
  }
};

export default productsReducer;
