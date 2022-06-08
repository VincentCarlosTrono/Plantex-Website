import React from "react";
import Product1 from "../img/product1.png";
import Product2 from "../img/product2.png";
import Product3 from "../img/product3.png";
import Product4 from "../img/product4.png";
import Product5 from "../img/product5.png";
import Product6 from "../img/product6.png";

const Products = () => {
  const products = [
    {
      image: Product1,
      name: "Cacti Plant",
      price: "$19.00",
    },
    {
      image: Product2,
      name: "Cactus Plant",
      price: "$11.99",
    },
    {
      image: Product3,
      name: "Aloe Vera Plant",
      price: "$7.99",
    },
    {
      image: Product4,
      name: "Succulent Plant",
      price: "$5.99",
    },
    {
      image: Product5,
      name: "Succelent Plant",
      price: "$10.99",
    },
    {
      image: Product6,
      name: "Green Plant",
      price: "$8.99",
    },
  ];
  return (
    <div className="grid-container">
      <div className="col-start-2 col-end-3 px-2 md:px-20">
        <div className="text-center">
          <div className="flex justify-center">
            <h1 className="md:text-5xl text-2xl font-semibold p-5 max-w-lg">
              Check out our Products
            </h1>
          </div>
          <div className="flex justify-center p-5">
            <p className="max-w-sm">
              Here are some seleced plants from our showroom, all are in
              excellent shape and has a long life span. Buy and enjoy best
              quality
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-24  py-24">
          {products.map((product: any) => {
            const { image, name, price } = product;
            return (
              <div className="grid justify-center items-center shadow-lg p-3 md:p-2 relative">
                <div className="relative ">
                  <img
                    className="w-48 px-2 hover:-translate-y-2 hover:cursor-pointer"
                    src={image}
                    alt="productImage"
                  />
                  <div className=" w-24 h-24 md:w-32 md:h-32 bg-lightgray rounded-full absolute top-7 md:top-20 -z-10"></div>
                </div>

                <div>
                  <h1 className="text-sm md:text-md md:font-semibold">
                    {name}
                  </h1>
                  <p className=" text-sm md:text-md md:font-semibold text-darkgreen">
                    {price}
                  </p>
                  <div className="bg-darkgreen flex justify-end absolute bottom-1 md:bottom-2 md:right-2 right-1 p-1 md:p-2 rounded-xl">
                    <box-icon color="white" name="shopping-bag"></box-icon>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
