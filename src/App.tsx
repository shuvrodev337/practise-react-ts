import { useContext, useState } from "react";
import "./App.css";
// import UseStateExample from "./components/UseStateExample";
// import UseStateFormExample from "./components/UseStateFormExample";
// import UseReducerExample from "./components/UseReducerExample";
// import UseReducerForm from "./components/UseReducerForm";
// import UseEffectExample from "./components/UseEffectExample";
// import UseRefExample from "./components/UseRefExample";
// import UseRefForm from "./components/UseRefForm";
import { TThemeContext, ThemeContext } from "./contexts/ThemeProvider";
import Select from "./components/Select";
// import { MenuItems, MenuList } from "./components/Menu";
// import Profile from "./components/Profile";
// import UserContainer from "./components/UserContainer";

function App() {
  // const [count, setCount] = useState(0);
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  // console.log(dark);

  return (
    <div
      className={`${
        dark ? "bg-black" : "bg-white"
      } h-screen w-full flex flex-col gap-20 justify-center items-center`}
    >
      {/* <UseStateExample count={count} setCount={setCount} />
      <UseStateFormExample />
      <UseReducerExample />
      <UseReducerForm />
      <UseEffectExample />
      <UseRefExample />
      <UseRefForm /> */}
      {/* global- based provider */}
      {/* <button onClick={() => setDark(!dark)} className="btn-red">
        Dark Mode
      </button> */}
      {/* <MenuList>
        <MenuItems />
      </MenuList>
      <Profile />
      <UserContainer /> */}
      <Select>
        <Select.SelectOption value={"Option 1"}>Option 1</Select.SelectOption>
        <Select.SelectOption value={"Option 2"}>Option 2</Select.SelectOption>
        <Select.SelectOption value={"Option 3"}>Option 3</Select.SelectOption>
        <Select.SelectOption value={"Option 4"}>Option 4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
