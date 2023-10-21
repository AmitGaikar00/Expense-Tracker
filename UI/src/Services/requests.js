import { axiosRequest } from "./user";


export const getExpenses = async ({ name, email, password }) => {
  try {
    const { data } = await axiosRequest.get("/api/users/register", {
      name,
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getExpense = async ({ email, password }) => {
  try {
    const { data } = await axiosRequest.get("/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};


export const deleteExpenses = async ({ name, email, password }) => {
    try {
      const { data } = await axiosRequest.delete("/api/users/register", {
        name,
        email,
        password,
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };

  export const updateExpenses = async ({ name, email, password }) => {
    try {
      const { data } = await axiosRequest.put("/api/users/register", {
        name,
        email,
        password,
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };