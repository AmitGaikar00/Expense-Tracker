import axios from "axios";
import { axiosRequest } from "./user";

const token = JSON.parse(localStorage.getItem("user")) || "";

export const getAllExpenses = async () => {
  try {
    const { data } = await axios.get("/api/expense/all-expenses", {
      headers: {
        Authorization: `Bearer_${token.data.jwtToken}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const getExpense = async (id) => {
  try {
    const { data } = await axios.get(`/api/expenses/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const createExpense = async ({ name, category, amount }) => {
  const createData = {
    expenseName: name,
    expenseCategory: category,
    expenseAmount: amount,
    attributes: [
      {
        attribute_name: "to",
        attribute_value: "test_attribute_value",
      },
    ],
  };

  try {
    const { data } = await axios.post("/api/expense/add", createData, {
      headers: {
        Authorization: `Bearer_${token.data.jwtToken}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const updateExpense = async (updateData, id) => {
  try {
    const { data } = await axios.put(`/api/expense/${id}`, updateData, {
      headers: {
        Authorization: `Bearer_${token.data.jwtToken}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`/api/expense/${id}`, {
      headers: {
        Authorization: `Bearer_${token.data.jwtToken}`,
      },
    });
    return data;
  } catch (error) {
    return error;
  }
};
