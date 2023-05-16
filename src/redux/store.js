import { createStore } from "redux";
import Postreducer from "./reducer/Postreducer";

const store = createStore(
   Postreducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store