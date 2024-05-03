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
    console.log("Sending payment request with data:", data);
    return api.post(`/transaction/payment`, data);
  },
  paymentQr(data) {
    console.log("Sending payment request with data:", data);
    return api.post(`/transaction/qrpayment`, data);
  },
};

export default PaymentService;
