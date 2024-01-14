import { Dispatch, ReactNode, createContext, useState } from "react";
export type TThemeContext = {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

type TThemeContextPropsType = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: TThemeContextPropsType) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
