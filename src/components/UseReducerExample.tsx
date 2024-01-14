import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState, action) => {
  // business logic in reducer function,
  //   reducer function gets 2 things:  currentState and action
  //   action = ekta object, jeta dispatch function call  korar somoy declare kora hoy.
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "incrementByNumber":
      return { count: currentState.count + action.payload };
    case "decrementByNumber":
      return { count: currentState.count - action.payload };
    default:
      return currentState;
  }
};

const UseReducerExample = () => {
  // const [state, setState] = useState(initialState);

  const [state, dispatch] = useReducer(reducer, initialState);
  // dispatch - (send kore deya), can be named anything but conventionally 'dispatch' name deya hoy.
  // reducer: function,
  // initialState: initial State

  return (
    <div>
      <h1 className="text-4xl ">Count Using Reducer</h1>
      <h1 className="text-4xl ">{state.count}</h1>
      <div className="flex gap-4 my-2">
        <button
          className="px-4 py-2 bg-green-400 rounded-lg text-white"
          onClick={() => dispatch({ type: "increment" })} // action object send korchi, jar type: 'increment', 'type' nam deya convention.
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-400 rounded-lg text-white"
          onClick={() => dispatch({ type: "decrement" })} // action object send korchi, jar type: 'decrement', 'type' nam deya convention.
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-green-800 rounded-lg text-white"
          onClick={() => dispatch({ type: "incrementByNumber", payload: 3 })} // payload send kora, 'payload' nam deya convention.
        >
          Increment by 3
        </button>
        <button
          className="px-4 py-2 bg-red-800 rounded-lg text-white"
          onClick={() => dispatch({ type: "decrementByNumber", payload: 3 })} // payload send kora, 'payload' nam deya convention.
        >
          Decrement by 3
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
