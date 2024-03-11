//useContext hook
import { useContext } from "react";
import { MyContext } from "./MyProvider";

const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context)
    throw new Error(
      "MyContext must be called from within the MyContextProvider"
    );

  return context;
};
export default useMyContext;
