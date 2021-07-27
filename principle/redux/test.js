const applyMiddleWare = require("./applymiddleware");
const combineReducer = require("./combineReducers");
const createStore = require("./createStore");
const logger = require("./logger");
const logger2 = require("./logger2");
const initState = {
  milk: 0,
};

function milkReducer(state = initState, action) {
  switch (action.type) {
    case "PUT_MILK":
      return { ...state, milk: state.milk + action.count };
    case "TAKE_MILK":
      return { ...state, milk: state.milk - action.count };
    default:
      return state;
  }
}

const initRiceState = {
  rice: 0,
};
function riceReducer(state = initRiceState, action) {
  switch (action.type) {
    case "PUT_RICE":
      return { ...state, rice: state.rice + action.count };
    case "TAKE_RICE":
      return { ...state, rice: state.rice - action.count };
    default:
      return state;
      g;
  }
}

const reducer = combineReducer({
  milkState: milkReducer,
  riceState: riceReducer,
});
const store = createStore(reducer, applyMiddleWare(logger, logger2));

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "PUT_MILK", count: 1 });
store.dispatch({ type: "PUT_MILK", count: 1 });
store.dispatch({ type: "TAKE_MILK", count: 1 });

store.dispatch({ type: "PUT_RICE", count: 1 });
store.dispatch({ type: "PUT_RICE", count: 1 });
store.dispatch({ type: "TAKE_RICE", count: 1 });
