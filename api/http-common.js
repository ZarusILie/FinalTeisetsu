import axios from "axios";

export const api = axios.create({
  baseURL: "https://vtapcash-run-qy6nrmuwmq-et.a.run.app/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});
