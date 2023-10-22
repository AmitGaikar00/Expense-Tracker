import axios from "axios";

// export const axiosRequest = axios.create({
//   baseURL: "http://localhost:3000",
// });

export const signup = async (name, email, password) => {
  try {
    const {data}  = await axios.post(
      "http://localhost:3000/api/users/register",
      {
        name,
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    // throw new Error(error.response.data.message);
    // toast.error(error.response.data.message);
    // throw new Error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const data = await axios.post("http://localhost:3000/api/users/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    return error;
    // if (error.response && error.response.data.message)
    // toast.error(error.response.data.message);
    // throw new Error(error.response.data.message);
    // throw new Error(error.message);
  }
};
