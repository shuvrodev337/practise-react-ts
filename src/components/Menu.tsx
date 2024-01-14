import { ReactNode, createContext, useContext } from "react";
type TMenuContext = { theme: string };
type TMenuListPropsType = {
  children: ReactNode;
};
export const MenuContext = createContext<TMenuContext | null>(null);
export const MenuList = ({ children }: TMenuListPropsType) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};
export const MenuItems = () => {
  const { theme } = useContext(MenuContext) as TMenuContext;
  // console.log(theme);
  return <div>Menulist</div>;
};
