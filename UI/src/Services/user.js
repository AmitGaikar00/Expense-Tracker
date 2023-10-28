import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "http://192.168.1.9:8081",
});

export const signup = async (name, email, password) => {
  const registerData = {
    username: email,
    password: password,
    emailId: email,
    mobileNo: "8888888888",
    authorities: "USER",
  };
  try {
    const { data } = await axiosRequest.post("/auth/register", registerData);
    return data;
  } catch (error) {
    return error;
  }
};

export const login = async (email, password) => {
  const loginData = {
    username: email,
    password: password,
  };
  try {
    const data = await axiosRequest.post("/auth/authenticate", loginData);
    return data;
  } catch (error) {
    return error;
  }
};
