import {
  data,
  table,
  info,
  paragraph,
  frontEndTable,
  backEndTable,
  serviceList,
  items,
} from "../utils/Data";
import { AppContext } from "./AppContext";

const ContextProvider = (props) => {
  return (
    <AppContext.Provider
      value={{
        data,
        table,
        info,
        paragraph,
        frontEndTable,
        backEndTable,
        items,
        serviceList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
