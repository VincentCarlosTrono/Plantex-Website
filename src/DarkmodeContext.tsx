import React, { createContext, useState } from "react";

export const DarkmodeContext = createContext<any>("");

export const DarkmodeContextProvider = (props) => {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  return (
    <div>
      <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
        {props.children}
      </DarkmodeContext.Provider>
    </div>
  );
};
