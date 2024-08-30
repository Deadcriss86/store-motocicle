import axios from "./axios";

export const registerRequest = async (user) =>
  axios.post(`/auth/register`, user);

export const loginRequest = async (user) => axios.post(`/api/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`/api/auth/verify`);

export const fetchProfile = async () => axios.get(`/api/auth/profile`);
