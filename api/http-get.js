import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://d82d-103-166-137-242.ngrok-free.app/api/v1",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
