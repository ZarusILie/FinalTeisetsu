import axios from "axios";

export const api = axios.create({
  baseURL: "http://34.128.83.116:8080/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
