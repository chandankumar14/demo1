const orderDetailsController = require("../_controller/_order_details_controller");

module.exports = function (app) {
  app.get("/api/v1/all", orderDetailsController.orderList);
  app.get("/api/v1/order-details", orderDetailsController.orderDetails);
  app.get("/api/v1/active-order-list", orderDetailsController.activeOrderList);
  app.get("/api/v1/order-stats", orderDetailsController.orderStats);
  app.post("/api/v1/place-order",orderDetailsController.placeOrder);
  app.post("/api/v1/add-to-cart",orderDetailsController.addToCart)
};
