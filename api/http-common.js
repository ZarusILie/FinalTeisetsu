import axios from "axios";

export const api = axios.create({
  baseURL: "https://virtualtapcash-production.up.railway.app/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
