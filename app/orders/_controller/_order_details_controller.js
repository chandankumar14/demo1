const db = require("../../../model/index");
const paymentModel = db.payment_details;
const orderModel = db.order;
const cartModel = db.cart;
const productModel = db.product;

exports.orderList = async (req, res) => {
  try {
    const query = `
        SELECT 
           OD.order_id,
           OD.user_id,
           OD.payment_id,
           UD.first_name,
           UD.middle_name,
           UD.last_name,
           UD.contact_number
           
        FROM order_details OD
        LEFT JOIN user_details ES UD OD.user_id = UD.user_id 
        WHERE OD.order_status = :order_status`;
    const orderList = await db.sequelize.query(query, {
      replacements: { order_status: "COMPLETE" },
      type: db.sequelize.QueryTypes.SELECT,
    });
    if (orderList && orderList != undefined) {
      return res.status(200).send({
        code: 200,
        message: "Fetch All orderList Successfully",
        data: orderList,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.orderDetails = async (req, res) => {
  try {
    const { order_id } = req.body;
    const query = `
        SELECT 
           OD.order_id,
           OD.user_id,
           PD.product_id,
           PD.product_name,
           PD.product_image,
           
        FROM order_details OD
        LEFT JOIN product_details PD OD.product_id = PD.product_id 
        WHERE OD.order_id = :order_id`;
    const orderDetails = await db.sequelize.query(query, {
      replacements: { order_id: order_id },
      type: db.sequelize.QueryTypes.SELECT,
    });

    if (orderDetails && orderDetails != undefined) {
      try {
        const payment_details = await paymentModel.findOne({
          where: { order_id: order_id },
        });
        return res.status(200).send({
          code: 200,
          message: "Fetch All orderDetails Successfully",
          data: orderDetails,
          payment_details: payment_details,
        });
      } catch (error) {
        return res
          .status(500)
          .send({ code: 500, message: error.message || "Server Error" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.activeOrderList = async (req, res) => {
  try {
    const query = `
        SELECT 
           OD.order_id,
           OD.user_id,
           OD.payment_id,
           OD.order_amount,
           UD.first_name,
           UD.middle_name,
           UD.last_name,
           UD.contact_number
           
        FROM order OD
        LEFT JOIN user_details ES UD OD.user_id = UD.user_id 
        WHERE OD.order_status = :order_status`;
    const orderList = await db.sequelize.query(query, {
      replacements: { order_status: "ACTIVE" },
      type: db.sequelize.QueryTypes.SELECT,
    });
    if (orderList && orderList != undefined) {
      return res.status(200).send({
        code: 200,
        message: "Fetch All orderList Successfully",
        data: orderList,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.orderStats = async (req, res) => {
  try {
    const activeOrderCount = orderModel.findAll({
      attributes: [sequelize.fn("COUNT", sequelize.col("order_id"))],
      where: {
        order_status: "ACTIVE",
      },
    });

    const completedOrder = orderModel.findAll({
      attributes: [sequelize.fn("COUNT", sequelize.col("order_id"))],
      where: {
        order_status: "COMPLETE",
      },
    });

    const totalOrderAmout = orderModel.findAll({
      attributes: [sequelize.fn("SUM", sequelize.col("order_amount"))],
      where: {
        order_status: "COMPLETE",
      },
    });
    if (activeOrderCount && completedOrder && totalOrderAmout != undefined) {
      return res.status(200).send({
        code: 200,
        message: "Fetch All orderList Successfully",
        activeOrderCount: activeOrderCount,
        completedOrderP: completedOrder,
        totalOrderAmout: totalOrderAmout,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.placeOrder = async (req, res) => {
  try {
    const {
      order_id,
      user_id,
      payment_id,
      product_id,
      product_quantity,
      order_amount,
      delivery_address,
    } = req.body;
    const placeOrder = await orderModel.create({
      order_id: order_id,
      user_id: user_id,
      payment_id: payment_id,
      product_id: product_id,
      product_quantity: product_quantity,
      order_amount: order_amount,
      delivery_address: delivery_address,
    });
    if (placeOrder && placeOrder != undefined) {
      return res.status(200).send({
        code: 200,
        ProductDetails: saveProductDetails,
        message: "Your order has been placed Succssesfully",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { product_id, user_id } = req.body;
    const cartProductList = await cartModel.create({
      product_id: product_id,
      user_id: user_id,
    });
    if (cartProductList && cartProductList != undefined) {
      return res.status(200).send({
        code: 200,
        ProductDetails: cartProductList,
        message: "Your product is added Succssesfully",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.getCartProductList = async (req, res) => {
  try {
    const { user_id } = req.body;
    const cartProduct = await cartModel.findAll({
      where: { user_id: user_id },
    });

    if (cartProduct && cartProduct != undefined) {
      try {
        const productList = await productModel.findAll({
          where: { product_id: [] },
        });
      } catch (error) {
        
      }
    }
  } catch (error) {}
};
