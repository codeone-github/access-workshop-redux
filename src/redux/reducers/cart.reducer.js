const INITIAL_STATE = []

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const foundItem = state.find(item => item.id === action.payload.id)

      if(foundItem) {
        return state;
      }
      return [...state, action.payload]

    case "REMOVE_ITEM_FROM_CART":
      const filteredProducts = state.filter(item => item.id !== action.payload)  

      return [...filteredProducts];

    default:
      return state;
  }
};

export default cartReducer;
