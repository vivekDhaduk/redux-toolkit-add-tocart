import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, products, loading, addToCart, cart } from "./fakeStoreSlice";

const FakeStore = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(products);
  const productsLoading = useSelector(loading);
  const productsCart = useSelector(cart);
  console.log(productsCart,"productsCart");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

//   console.log(productsData, "products");

  const handleAddtoCart = (item) => {
    dispatch(addToCart(item))
  }

  if(productsLoading){
    return <h1>loading....</h1>
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>FakeStore</h1>

      <div>
        {productsData?.map((item,index) =>
        <div key={index}>
            <p>{item?.title}</p>
            <button onClick={() => handleAddtoCart(item)}>add to cart</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default FakeStore;
