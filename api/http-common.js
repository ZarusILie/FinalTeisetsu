import axios from "axios";

export const api = axios.create({
  baseURL: "https://adapted-wolf-sensible.ngrok-free.app/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
