import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../interface/product";
import axios from "axios";
import ProductsCard from "../components/products";

type ProductDetail = Product & {
  productListRelated: Product[];
};

const Details = () => {
  // const params:any = useParams();
  // const [product, setProduct] = useState<Product>();
  // useEffect(() => {
  //   const id:string = params.id
  //   fetch(`http://localhost:3000/products/${id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setProduct(data)
  //   })
  // }, [])
  const { productId } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);

  const fetchProduct = async (_id:string | number) => {
    try {
      const { data: product } = await axios.get(
        `https://nodejs-rose-psi.vercel.app/products/${_id}`
      );
      
      const { data: productListRelated } = await axios.get(
        `https://nodejs-rose-psi.vercel.app/products/category/${product?.category}`
      );

      setProduct({
        ...product,
        productListRelated: productListRelated.filter(
          (similarProduct: Product) => similarProduct._id !== product._id
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!productId) return;
    fetchProduct(productId);
  }, [productId]);

  const [similarProduct, setSimilarProducts] = useState<Product[]>([]);
  const fetchSimilarProducts = async (product: Product) => {
    const { data } = await axios.get(
      `https://nodejs-rose-psi.vercel.app/products/category/${product?.category}`
    );

    const filteredData = data.filter(
      (similarProduct: Product) => similarProduct._id !== product._id
    );
    setSimilarProducts(filteredData);
  };

  useEffect(() => {
    fetchSimilarProducts(product as Product);
  }, [product]);


  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex ">
            <div className="">
              <div className="w-[150px] h-[118px] bg-gray-100 mr-4 mb-4 flex items-center justify-center rounded-md">
                <img
                  className="w-[90px] h-[70px]"
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  alt=""
                />
              </div>
              <div className="w-[150px] h-[118px] bg-gray-100 mr-4 mb-4 flex items-center justify-center rounded-md">
                <img
                  className="w-[90px] h-[70px]"
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  alt=""
                />
              </div>
              <div className="w-[150px] h-[118px] bg-gray-100 mr-4 mb-4 flex items-center justify-center rounded-md">
                <img
                  className="w-[90px] h-[70px]"
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  alt=""
                />
              </div>
              <div className="w-[150px] h-[118px] bg-gray-100 mr-4 mb-4 flex items-center justify-center rounded-md">
                <img
                  className="w-[90px] h-[70px]"
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  alt=""
                />
              </div>
            </div>

            <img
              alt="ecommerce"
              className="lg:w-[400px] w-full h-[550px] object-center rounded border border-gray-200"
              src={product?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
              </h1>
              <div className="flex">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">{product?.count} Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 text-green-300 border-l-2 border-gray-200">
                  In Stock
                </span>
              </div>
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <p className="leading-relaxed">
                {product?.description}
              </p>

              <div className="flex items-center border-t border-black my-5">
                <div className="custom-number-input h-10 w-32">
                  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
                    <button
                      data-action="decrement"
                      className="border-[1.5px] border-gray-400 text-gray-600 hover:text-gray-700  h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="border-gray-400 border-y-[1.5px] outline-none focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                      name="custom-input-number"
                      value="0"
                    />
                    <button
                      data-action="increment"
                      className=" text-white bg-red-500 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded my-5">
                  Buy now
                </button>
                <div className="border border-gray-400 rounded-md py-1 px-2 ml-3">
                  <i className="fa-regular fa-heart text-2xl"></i>
                </div>
              </div>
              <div className="border-gray-400 border-[1.5px] rounded-md">
                <div className="flex items-center p-4">
                  <i className="fa-solid fa-truck-fast text-2xl" />
                  <div className="ml-4">
                    <strong>Free Delivery</strong>
                    <p className="underline">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="border-b-[1.5px] border-gray-400"></div>
                <div className="flex items-center p-4">
                  <i className="fa-solid fa-rotate text-2xl"></i>
                  <div className="ml-4">
                    <strong>Return Delivery</strong>
                    <p className="underline">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
          <p className="title-font font-bold text-3xl text-gray-900 my-10 px-10">
            Similar Products
          </p>
          <ul className="grid gap-8 grid-cols-3 px-10">
            {product?.productListRelated.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </ul>
        </div>
    </>
  );
};

export default Details;
