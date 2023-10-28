import { createContext, useContext, useReducer } from "react";
import { expenseReducer } from "./Reducers";
// import { getAllExpenses } from "../Services/requests";

const ExpenseContext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  return useContext(ExpenseContext);
};

export default ContextProvider;
