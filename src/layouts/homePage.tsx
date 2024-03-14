import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import ProductsCard from "../components/products";
import Product from "../interface/product";
import axios from "axios";

type Props = {};

function HomePage(props: Props) {
  // const [products, setProduct] = useState<Product[]>([]);
  // const [page, setPage] = useState(1);

  // const clickNext = () => {
  //   setPage(page + 1);
  // };
  // const clickPev = () => {
  //   setPage(page - 1);
  // };

  // useEffect(() => {
  //   fetch(`http://localhost:3000/products?skip=${(page - 1) * 9}&limit=9`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     });
  // }, [page]);

  return (
    <>
      <Banner />
      {/* <div className="flex items-center justify-between px-10 pt-16">
        <div className="">
          <h1 className="text-3xl font-bold">Featured Products</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <button className="border border-black rounded-md px-4 py-1.5">View all</button>
      </div>
      <div className="grid grid-cols-3 py-10 px-10 gap-8">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
      <section className="bg-black">
        <div className="mx-auto max-w-screen-xl px-10 lg:flex lg:h-auto lg:items-center">
          <div className="flex lg:items-center">
            <div className="w-1/2">
              <strong className="font-extrabold text-white sm:block">
                Tagline
              </strong>
              <h1 className="text-2xl text-white font-extrabold sm:text-5xl">
                Sales Up to 50%
              </h1>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  className="block w-full rounded border border-white px-6 py-2 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto"
                  href="#"
                >
                  Show now
                </a>

                <a
                  className="block w-full px-2 py-3 text-sm font-medium text-white  focus:outline-none focus:ring sm:w-auto"
                  href="#"
                >
                  Button <i className="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src="https://s3-alpha-sig.figma.com/img/a796/1ab5/1784a98bc16cb9b8d4fddfd9f7b97300?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NIows3qSppDaFZBSJoVOtrlYR6zxaQcOpoYIWbIE47R94ES2L8~tLLmNM6huXeMxE5iymaJWw7FBp3hSev99H7hSy3IotIKU4YPohCBbuMTx9XYI-sUq82uxPVKVP~lIK0~f0J1tzgrWwTIrcc2h6B2RDpcuEAezAxT4YuSoroSpA7Eu7svqmy3J0fKNirG8oK93rYx6V6Wk~POLzVjvBcr6W-f-oXfAauaqKTQmvHbCNu0b2XAgXKmGpq325W6cXMxqwZxvMeQfCcIaZ8qH27xkkAm3jHm94LYL4Zi1JBsU~FYf30k03H-UFO2jpTkoA26J-Z97SUsQaBf2SPGeIQ__"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between px-10 pt-16">
        <div className="">
          <h1 className="text-3xl font-bold">Popular Products</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <button className="border border-black rounded-md px-4 py-1.5">View all</button>
      </div>
      <div className="grid grid-cols-3 py-10 px-10 gap-8">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div> */}
    </>
  );
}

export default HomePage;
