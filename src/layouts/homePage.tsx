import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import ProductsCard from "../components/products";
import Product from "../interface/product";
import { ToastContainer } from "react-toastify";

function HomePage() {

  const [products, setProduct] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const clickNext = () => {
    setPage(page + 1);
  };
  const clickPev = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetch(`https://nodejs-rose-psi.vercel.app/products?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [page]);

  return (
    <>
      <Banner />
      <div className="grid lg:grid-cols-3 py-10 px-10 gap-8 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
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
                src="https://s3-alpha-sig.figma.com/img/a796/1ab5/1784a98bc16cb9b8d4fddfd9f7b97300?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qgfky7S0QmNIXNw5~KUGofVdcTwXQ75SdRQrqQPnd52B2sNIllIKgUweWbbfF58ZWW4ciA0hH1tT~Y6Llsv7SBBECRpkL7THb6nZ72E91NQ6TEEvUkX3oBMj~Fi2XeGM7rkS3UkK4e~cjuMnZ7rlca1d6LbtuZADok6vptnBnsL76QkL0CwLz0WZu4miJITnCKEVCqrhbjg3pysTwRlZZudN2uAOIXPIaoL1vTZoxIJLbAe~Ngu~VxmGAUZAxXLve8wuwPWR72jmCFQQzCaFe4dhUh2oY5EFW6MF42HCvHMvH~QKTMCidxkClHWmUv4WRAyTOoUNra7Y47v9fpn2AQ__"
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
      <div className="grid lg:grid-cols-3 py-10 px-10 gap-8 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1">
        {products.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button 
        className="text-white px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md m-4"
        type="button" disabled={page === 1} onClick={clickPev}>
          Prev page
        </button>
        <button 
        className="text-white px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-md my-4"
        type="button" onClick={clickNext}>
          Next page
        </button>
      </div>
    </>
  );
}

export default HomePage;
