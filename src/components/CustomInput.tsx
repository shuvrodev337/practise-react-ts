import { forwardRef } from "react";
type TCustomInputProps = {
  className: string;
};
const CustomInput = forwardRef<HTMLInputElement, TCustomInputProps>(
  ({ className }, nameRef) => {
    // ref does not come via props.
    return <input type="text" className={className} ref={nameRef} />;
  }
);

export default CustomInput;
