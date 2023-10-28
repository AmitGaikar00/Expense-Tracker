import { axiosRequest } from "./user";


export const getAllExpenses = async () => {
  try {
    const { data } = await axiosRequest.get("/api/expenses");
    return data;
  } catch (error) {
    return error;

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

  }
};
