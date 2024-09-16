const db = require("../../../model/index");
const productVariantModel = db.product_variant;

exports.createProductVariant = async (req, res) => {
  try {
    const {
      product_name,
      product_size,
      sku_code,
      quantity,
      in_stock,
      product_id,
      category_id,
      price
    } = req.body;
    const product_image = req?.file?.filename ? req.file.filename : req.body.product_image;
    const saveProductVariantDetails = await productVariantModel.create({
      product_name: product_name,
      product_size: product_size,
      sku_code: sku_code,
      quantity: quantity,
      in_stock: in_stock,
      product_id: product_id,
      category_id:category_id,
      price:price,
      product_image:product_image
    });
    if (saveProductVariantDetails) {
      return res.status(200).send({
        code: 200,
        message: "product VARIANT  is Created Succssesfully",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.updateProductVariant = async (req, res) => {
  try {
    const {
      product_name,
      product_size,
      sku_code,
      quantity,
      in_stock,
      product_id,
    } = req.body;
    const product_image = req?.file?.filename ? req.file.filename : req.body.product_image;
    const updateProductVariantDetails = await productVariantModel.update(
      {
        product_name: product_name,
        product_size: product_size,
        sku_code: sku_code,
        quantity: quantity,
        in_stock: in_stock,
        product_image:product_image
      },
      { where: { product_id: product_id } }
    );
    if (updateProductVariantDetails) {
      return res.status(200).send({
        code: 200,
        ProductDetails: updateProductVariantDetails,
        message: "product is updated Succssesfully",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.deleteProductVariant = async (req, res) => {
  try {
    const { product_id } = req.params.product_id;
    const deleteProductVariantList = await productVariantModel.update(
      {
        isDeleted: 1,
      },
      { where: { product_id: product_id } }
    );
    if (deleteProductVariantList) {
      return res.status(200).send({
        code: 200,
        deleteProductVariant: deleteProductVariantList,
        message: "product is deleted Succssesfully",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};

exports.ProductVariantList = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const ProductVariantList = await productVariantModel.findAll(
      {
        order: [["createdAt", "DESC"]],
      },
      {
        where: {
          product_id: product_id,
          attr2: "cake",
        },
      }
    );
    if (ProductVariantList && ProductVariantList != undefined) {
      return res.status(200).send({
        code: 200,
        message: "Fetch All productList Successfully",
        data: ProductVariantList,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .send({ code: 500, message: error.message || "Server Error" });
  }
};
