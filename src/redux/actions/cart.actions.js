export const addItem = item => ({
  type: "ADD_ITEM_TO_CART",
  payload: item
})

export const removeItem = id => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: id
})

export const updateQuantity = id => ({})

// export const addItem = (item) => {
//   return { type: "ADD_ITEM_TO_CART", payload: item };
// };
