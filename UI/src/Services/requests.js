import axios from "axios";
import { axiosRequest } from "./user";

const token = JSON.parse(localStorage.getItem("user")) || "";
const header = `Authorization: Bearer_${token ? token.data.jwtToken : ""}`;

export const getAllExpenses = async () => {
  try {
    const data = await axiosRequest.get("/api/expense/all-expenses", {
      headers: header,
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
    const { data } = await axiosRequest.post(
      "/api/expense/add",
      {
        headers: header,
      },
      createData
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const updateExpense = async ({ name, category, amount, id }) => {
  try {
    const { data } = await axiosRequest.put(`/api/expenses/${id}`, {
      name,
      category,
      amount,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axiosRequest.delete(`/api/expenses/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};
