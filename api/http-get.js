import axios from "axios";

export const apiGet = axios.create({
  baseURL: "https://a045-110-137-192-136.ngrok-free.app/api/v1",
  headers: {
    // 'ngrok-skip-browser-warning': true,
  },
});
