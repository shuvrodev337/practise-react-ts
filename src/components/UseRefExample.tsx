import { ChangeEvent, useEffect, useRef, useState } from "react";
import CustomInput from "./CustomInput";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0); // useRef returns an object, where 'current' holds the refference , not state.
  const handleIncrement = () => {
    // myRef.current = myRef.current + 1; // useref update korle jehetu kono setState hoyna, so kono re-render trigger kore NA.
    // console.log(myRef.current);
    setCount(count + 1);
    // State tokhon e update hobe jokhon akta re-render ghoptbe. function hocche akta stateless jinish, etar maddhome kono state dhore
    // rakha jay na.Usestate er maddhome amra akta re-render trigger kortechi, jeta last state er sathe current state er compare kore
    // akta re-render ghotay.
    console.log(count); // so, This line will return 1 less than the re-rendered count,ager state, not current state.(Batch update er
    //  moto) But ref er khetre eta ghote na.Ref oi current refference tai dey.
  };
  return (
    <div>
      <h1>Useref</h1>
      <button className="btn-red" onClick={handleIncrement}>
        {count}
        {/* {myRef.current} */}
      </button>
    </div>
  );
};

export default UseRefExample;
