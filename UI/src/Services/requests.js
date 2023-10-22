// import { axiosRequest } from "./user";
import axios from "axios";
//   getAllExpenses,
//   getExpense,
//   createExpense,
//   updateExpense,
//   deleteExpense,

export const getAllExpenses = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/expenses");
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
    const { data } = await axios.get(
      `http://localhost:3000/api/expenses/${id}`
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
    const { data } = await axios.post("http://localhost:3000/api/expenses", {
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
    const { data } = await axios.put(
      `http://localhost:3000/api/expenses/${id}`,
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
    const { data } = await axios.delete(
      `http://localhost:3000/api/expenses/${id}`
    );
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    //   throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};
