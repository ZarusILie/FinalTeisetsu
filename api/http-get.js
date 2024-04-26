import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://4ff3-103-166-137-242.ngrok-free.app/api/v1",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
