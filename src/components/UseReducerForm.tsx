import { ChangeEvent, useReducer } from "react";

// type declarations
const initialUser = { name: "", email: "" };
type TAction = {
  type: string;
  payload: string;
};

// reducer function, to set the user state
const reducer = (currentState: typeof initialUser, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const UseReducerForm = () => {
  const [user, dispatch] = useReducer(reducer, initialUser);

  // Form submission
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // event.target.reset();
    console.log(user);
  };
  return (
    <div className="my-6 space-y-4">
      <h1 className="text-4xl">Use Reducer Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          className="border  rounded-lg p-2"
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
        />
        <input
          type="text"
          name="email"
          className="border rounded-lg p-2"
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-400 rounded-lg text-white"
        >
          Submit User
        </button>
      </form>
    </div>
  );
};

export default UseReducerForm;
