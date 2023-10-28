import { createContext, useContext, useEffect, useReducer } from "react";
import { expenseReducer } from "./Reducers";
import { getAllExpenses } from "../Services/requests";

const ExpenseContext = createContext();

export const ContextProvider = ({ children }) => {
  function fetchExpenses() {
    console.log("fetchExpenses run");

    getAllExpenses().then((result) => {
      dispatch({
        type: "SET_EXPENSES",
        payload: result,
      });
    });
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

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
