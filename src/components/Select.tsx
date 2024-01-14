import { createContext, useContext, useState } from "react";

const SelectContext = createContext(null); // Select er vitor active option ta dekhar jonno context toiry

const Select = ({ children }) => {
  // this component returns its children inside a select element
  const [selectedOption, setSelectedOption] = useState(""); // select er kon option ta active hoyeche , seta 'selectedOption' e dhora.
  return (
    // pura select er vitore active option ta pass kora
    <SelectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};
const SelectOption = ({ value, children }) => {
  //  component for each option.It takes a value and children and passes it inside single option element
  //   const { selectedOption } = useContext(SelectContext);
  // or, hook toiry kore specific custom error generate kora jay, jodi outside theke access kora hoy
  const { selectedOption } = useSelectContex();
  const isActive = selectedOption === value;
  return (
    <option className={`${isActive ? "bg-red-600" : "bg-white"}`} value={value}>
      {children}
    </option>
  );
};
Select.SelectOption = SelectOption; // Select component er SelectOption hisebe SelectOption component set.
export default Select;

const useSelectContex = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("Context used outside boundary");
  }
  return context;
};
