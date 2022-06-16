import React from "react";
import ProductDatas from "./ProductDatas";

const Products = () => {
  return (
    <div className="grid-container" id="products" data-aos="fade-up">
      <div className="col-start-2 col-end-3 px-2 md:px-20">
        <div className="text-center">
          <div className="flex justify-center">
            <h1 className="md:text-5xl text-2xl font-semibold p-5 max-w-lg dark:text-white">
              Check out our Products
            </h1>
          </div>
          <div className="flex justify-center p-5 ">
            <p className="max-w-sm text-gray-500">
              Here are some seleced plants from our showroom, all are in
              excellent shape and has a long life span. Buy and enjoy best
              quality
            </p>
          </div>
        </div>
        <ProductDatas />
      </div>
    </div>
  );
};

export default Products;
