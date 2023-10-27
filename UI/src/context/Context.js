import { expenseReducer } from "./Reducer";
import { createContext, useContext, useReducer } from "react";

const Expense = createContext();

const Context = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <Expense.Provider value={{ state, dispatch }}>{children}</Expense.Provider>
  );
};

export default Context;

export const ExpenseState = () => {
  return useContext(Expense);
};
