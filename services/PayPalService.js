const PaymentService = require("./PaymentService");

class PayPalService extends PaymentService {
  async pay(orderDetails) {
    console.log("Processing payment through PayPal");
    // Implement PayPal payment logic here
    return { success: true, orderId: orderDetails.id };
  }
}
module.exports = PayPalService;
