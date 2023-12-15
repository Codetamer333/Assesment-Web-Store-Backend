const StripeService = require("../services/StripeService");
const BraintreeService = require("../services/BraintreeService");
const PayPalService = require("../services/PayPalService");

const paymentServices = {
  stripe: new StripeService(),
  braintree: new BraintreeService(),
  paypal: new PayPalService(),
};

exports.processPayment = async (req, res) => {
  const { paymentMethod, orderDetails } = req.body;
  const paymentService = paymentServices[paymentMethod];
  if (!paymentService) {
    return res.status(400).json({ error: "Invalid payment method" });
  }

  try {
    const paymentResult = await paymentService.pay(orderDetails);
    res.json(paymentResult);
  } catch (error) {
    res.status(500).json({ error: "Payment processing failed" });
  }
};
