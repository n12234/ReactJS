import React, { useEffect, useState } from "react";
import Product from "../interface/product";
import Addtocart from "./addtocart";
import { Link } from "react-router-dom";

type Props = {
  products: Product[];
};

const ProductsCard = (props: Props) => {
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const clickNext = () => {
    setPage(page + 1);
  };
  const clickPev = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products?skip=${(page - 1) * 9}&limit=9`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [page]);
  return (
    <>
      <div className="grid grid-cols-3 py-10 px-10 gap-8">
        {products.map((product: any) => {
          return (
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg p-8 h-[300px]"
            src={product.image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              <Link to={`/details/${product.id}`}>{product.title}</Link>
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <p>{product.category}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <div className="flex items-center text-3xl">
            <i className="fa-solid fa-cart-plus mr-4 cursor-pointer"></i>
            <Addtocart pid={product.id} />
            </div>
          </div>
        </div>
      </div>
      );
        })}
      </div> 
      {/* <div className="">
        <button type="button" disabled={page === 1} onClick={clickPev}>
          Prev page
        </button>
        <button type="button" onClick={clickNext}>
          Next page
        </button>
      </div> */}
    </>
  );
};

export default ProductsCard;
