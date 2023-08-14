import { legacy_createStore } from "redux";

// reducer
const themeReducer = (
  state = {
    dark: false,
  },
  action
) => {
  switch (action.type) {
    case "HANDLE_THEME":
      return (state.dark = state.dark ? false : true);
    //   return {
    //     ...state,
    //     dark: action.payload,
    //   };
    default:
      return state;
  }
};

// store
const store = legacy_createStore(themeReducer);
console.log("ini toko", store.getState());

// subscribe
store.subscribe(() => {
  console.log("ok : ", store.getState());
});

// dispatch
const action1 = { type: "HANDLE_THEME", payload: false };
store.dispatch(action1);
