import { axiosRequest } from "./user";
// import axios from "axios";
//   getAllExpenses,
//   getExpense,
//   createExpense,
//   updateExpense,
//   deleteExpense,

export const getAllExpenses = async () => {
  try {
    const { data } = await axiosRequest.get("/api/expenses");
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    //   throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};

export const getExpense = async (id) => {
  try {
    const { data } = await axiosRequest.get(
      `/api/expenses/${id}`
    );
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    //   throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};

export const createExpense = async ({ name, category, amount }) => {
  try {
    const { data } = await axiosRequest.post("/api/expenses", {
      name,
      category,
      amount,
    });
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    //   throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};

export const updateExpense = async ({ name, category, amount, id }) => {
  try {
    const { data } = await axiosRequest.put(
      `/api/expenses/${id}`,
      {
        name,
        category,
        amount,
      }
    );
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    //   throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axiosRequest.delete(
      `/api/expenses/${id}`
    );
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    //   throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};
