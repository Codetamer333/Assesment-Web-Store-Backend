const PaymentService = require("./PaymentService");

class StripeService extends PaymentService {
  async pay(orderDetails) {
    console.log("Processing payment through Stripe");
    // Implement Stripe payment logic here
    return { success: true, orderId: orderDetails.id };
  }
}
module.exports = StripeService;
