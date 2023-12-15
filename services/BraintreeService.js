const PaymentService = require("./PaymentService");

class BraintreeService extends PaymentService {
  async pay(orderDetails) {
    console.log("Processing payment through Braintree");
    // Implement Braintree payment logic here
    return { success: true, orderId: orderDetails.id };
  }
}
module.exports = BraintreeService;
