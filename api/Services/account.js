import { api } from "../http-common";
import { apiGet } from "../http-get";

const PaymentService = {
  create(cardId) {
    return apiGet.get(`/card/get-card/${cardId}`);
  },
  get(id) {
    console.log("apiGet kepanggil");
    return apiGet.get(`/api/users/${id}`);
  },
  payment(data) {
    console.log("api called");
    return api.post(`/transactions/payment`, data);
  },
};

export default PaymentService;
