const productController = require("../_controller/_product_controller");
const productVariantController = require("../_controller/_product_variant_controller");
const { upload } = require("../../../middleware/_upload_image");
module.exports = function (app) {
  /**********Product Relate******* */
  app.post(
    "/api/v1/create_product",
    upload.single("product_image"),
    productController.createProduct
  );
  app.put("/api/v1/update_product", productController.updateProduct);
  app.get("/api/v1/product")
  app.get("/api/v1/product_list", productController.productList);
  app.delete("/api/v1/delete_product", productController.deleteProduct);
  app.post(
    "/api/v1/create-category",
    upload.single("category_banner"),
    productController.createProductCategory
  );
  app.get("/api/v1/gridLayoutproductList",productController.gridLayoutproductList)
  /*** product variant routes*********** */
  app.post(
    "/api/v1/create-product-variant",
    productVariantController.createProductVariant
  );
  app.get(
    "/api/v1/product_variant_list/product_id",
    productVariantController.ProductVariantList
  );
  app.delete(
    "/api/v1/delete_product/product_variant_id",
    productVariantController.deleteProductVariant
  );
  app.put("/create-category", productVariantController.updateProductVariant);
};
