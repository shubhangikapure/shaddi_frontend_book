import axios from 'axios';

const API_BASE_URL = 'https://api.shadibooks.in/api'; // Replace with the base URL from your API

export const login = async (data: { email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/login`, data);
  return response.data;
};

export const register = async (data: { name: string; email: string; password: string }) => {
  const response = await axios.post(`${API_BASE_URL}/register`, data);
  return response.data;
};
