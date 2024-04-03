import React, { useEffect, useState } from "react";
import ProductsCard from "../components/products";
import Product from "../interface/product";

type Props = {};

function Category({}: Props) {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://nodejs-rose-psi.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-10 pt-16">
        <div className="">
          <h1 className="text-3xl font-bold">Category Products</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <button className="border border-black rounded-md px-4 py-1.5">
          View all
        </button>
      </div>
      <select
        id="status"
        className="mt-10 block w-[300px] mx-10 rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option>Dispached Out</option>
        <option>In Warehouse</option>
        <option>Being Brought In</option>
      </select>
      <div className="grid grid-cols-3 py-10 px-10 gap-8">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Category;
