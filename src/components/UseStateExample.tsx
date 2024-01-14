import { Dispatch } from "react";
import React from "react";
type Tcount = {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
};
const UseStateExample = ({ count, setCount }: Tcount) => {
  // console.log("Render");
  // render hoy akbar initially, then setState hole re render hoy.
  // kono component e value er value jodi sei state er initial value (ekhane 0) te fire ase, then 1st time re render hoy, then ar hoy na

  // Only jei component er data change hoy, oi component
  // Re render shudhu matro jei part e dynamic data ta ache , sei part tuku tei hoy
  const handleIncrease = () => {
    //component er moddhe ekadhik state update hole React setake schedule kore rakhe & then batch update kore. for optimization.ei karone normal setstate(count+1) korle, se initially set kora state er value ta pabe, but current value of the state pabe na, that's why setCount((prevState) => prevState + 1) -ei style use kora better.

    // Async kono task er khetreo same behaviour kore, direct setState korle jei state e chilo state seta dhorei kaj kore, in the meantime state er value change hoye gele , seta dhorbe na, tai 'current state value' niye jate async operation kaj korte pare, setCount((prevState) => prevState + 1) ei style e setState kora better.

    // Example: Count er value 3 kore barano -

    // ***won't work
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //  *** Correct way
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };
  const handleDecrease = () => {
    // Count er value 3 kore komano -

    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
    setCount((prevState) => prevState - 1);
  };
  return (
    <div>
      <h1 className="text-4xl ">{count}</h1>
      <div className="flex gap-4 my-2 justify-center">
        <button
          className="px-4 py-2 bg-green-400 rounded-lg text-white"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-400 rounded-lg text-white"
          onClick={handleDecrease}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-gray-600 rounded-lg text-white"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateExample;
