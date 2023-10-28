export const expenseReducer = (expenses, action) => {
  switch (action.type) {
    case "SET_EXPENSES":
      return action.payload;
    case "ADD_EXPENSE":
      return [...expenses, { ...action.payload }];
    case "UPDATE_EXPENSE":
      return expenses.map((e) =>
        e._id === action.payload._id ? action.payload : e
      );
    case "DELETE_EXPENSE":
      return expenses.filter((e) => e._id !== action.payload._id);
    default:
      return expenses;
  }
};
