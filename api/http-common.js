import axios from "axios";

export const api = axios.create({
  baseURL: "https://d82d-103-166-137-242.ngrok-free.app/api/v1",
  headers: {
    "Content-type": "/application/json",
  },
});
