import { ADD_TO_CART, REMOVE_FROM_CART, UNDO, REDO } from "./actions";
const GROCERY_ITEMS = [
  { name: "Sliced Bread", price: 5.79 },
  { name: "Pasta", price: 1.28 },
  { name: "Dried beans", price: 1.36 },
  { name: "Ground beef", price: 4.12 },
  { name: "All-purpose Flour", price: 0.52 },
  { name: "creamy peanut butter", price: 2.56 },
  { name: "Top round steak", price: 5.78 },
  { name: "Potatos", price: 0.72 },
  { name: "Frozen turkey", price: 1.79 },
  { name: "Sirloin Steak", price: 8.07 },
  { name: "White Rice", price: 0.72 },
  { name: "Chocolate chip cookies", price: 3.47 },
  { name: "Seedless grapes", price: 2.67 },
  { name: "Sugar", price: 0.65 },
  { name: "Ice cream", price: 4.7 },
];
const reducer = (state, action) => {
  console.log(action);
  if (state === undefined) {
    return {
      forSale: GROCERY_ITEMS,
      cart: [],
      history: [[]],
      historyIndex: 0,
    };
  }
  switch (action.type) {
    case ADD_TO_CART: {
      const cart = [...state.cart, action.payload];
      const history = [...state.history];
      history.splice(state.historyIndex + 1, state.history.length);
      history.push(cart);
      const historyIndex = history.length - 1;
      return {
        ...state,
        cart,
        history,
        historyIndex,
      };
    }
    case REMOVE_FROM_CART: {
      const cart = [...state.cart];
      cart.splice(action.payload, 1);
      const history = [...state.history, cart];
      const historyIndex = state.historyIndex + 1;

      return {
        ...state,
        cart,
        history,
        historyIndex,
      };
    }

    case UNDO: {
      let historyIndex = state.historyIndex - 1;
      historyIndex = Math.max(historyIndex, 0);
      return {
        ...state,
        cart: state.history[historyIndex],
        historyIndex,
      };
    }

    case REDO: {
      let historyIndex = state.historyIndex + 1;
      historyIndex = Math.min(historyIndex, state.history.length - 1);
      return {
        ...state,
        cart: state.history[historyIndex],
        historyIndex,
      };
    }

    default: {
      return state;
    }
  }
};
export default reducer;
