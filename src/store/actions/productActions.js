import { gateway as MoltinGateway } from "@moltin/sdk";

const Moltin = MoltinGateway({
  client_id: "xFWIUXemsmZhIQb3zO9abXFc8bzEVQRw1sMvKHjYHN"
});

export const getAllProducts = () => dispatch => {
  Moltin.Products.With(["main_image"])
    .All()
    .then(products => {
      return dispatch({ type: "GET_PRODUCTS", data: products });
    });
};

export const getOneProduct = id => dispatch => {
  Moltin.Products.Get(id).then(product => {
    return dispatch({ type: "GET_ONE_PRODUCT", data: product });
  });
};
