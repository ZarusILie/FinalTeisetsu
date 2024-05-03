import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://adapted-wolf-sensible.ngrok-free.app/api/v1",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
