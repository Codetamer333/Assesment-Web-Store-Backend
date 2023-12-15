class PaymentService {
    async pay(orderDetails) {
      throw new Error("Payment method not implemented.");
    }
  }
  module.exports = PaymentService;
  