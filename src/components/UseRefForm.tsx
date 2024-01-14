import { ChangeEvent, useEffect, useRef } from "react";
import CustomInput from "./CustomInput";

const UseRefForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(nameRef?.current?.value); // Not in React's way of handling. Uncontrolled way. avoid this way to handle form data
  };
  useEffect(() => {
    // component mount holei kabol useeffect activate hobe, then dom er access niye ref kaj korbe.
    //Usually esob kaj react er way te handle kora better, kintu complex form, animation er kichu kichu khetre useRef used hoy.
    nameRef.current?.focus();
  }, []);

  return (
    <div>
      <h1>Use Ref</h1>
      <form onSubmit={handleSubmit}>
        {/* Example of forward ref*/}
        <CustomInput className={"border  rounded-lg p-2"} ref={nameRef} />
        <button className="btn-red" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default UseRefForm;
