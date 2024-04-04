import React, { useEffect, useState } from "react";
import { CreateProduct, ProductDB } from "../../interface/productdb";
import Productslist from "./productslist";
import { toast } from "react-toastify";
import { ProductValidate } from "../../validator/product";
import axios from "axios";

type Props = {};

const Products = ({}: Props) => {
  const [productAdd, setProductAdd] = useState<CreateProduct>({
    title: "",
    image: "",
    price: 0,
    category: "",
    description: "",
  });
  const [message, setMessage] = useState<string>("");

  const [Products, setProduct] = useState<ProductDB[]>([]);
  const getAllProduct = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      await getAllProduct();
    })();
  }, []);

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProductAdd({ ...productAdd, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { error } = ProductValidate.validate(productAdd);

    if (error) {
      setMessage(error.message);
    } else {
      try {
        await axios.post(`http://localhost:3000/products`, productAdd)
          .then((res) => {
            getAllProduct();
            setProductAdd({
              title: "",
              image: "",
              price: 0,
              category: "",
              description: "",
            });
            toast.success("Thêm thành công!!");
          });
      } catch (error) {
        console.log(error);
      }
      // .then(res => res.json())
      // .then((data:ProductDB) => {
      //   toast.success('Thêm thành công!!')
      //   const newProducts = [...Products, data]
      //   setProduct(newProducts)
      // })
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center pt-10">
        <div className="px-10  rounded shadow-sm bg-stone-50 max-w-md w-2/3 mr-10">
          <div className="mb-6 p-10 bg-white -m-10">
            <h1 className="font-bold text-2xl">Create Product</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col mb-4">
                <label>Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={productAdd.title}
                  onChange={handleChangeForm}
                  placeholder="Nhập tên sp"
                  className="mt-2 px-4 py-2 shadow rounded"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productAdd.price}
                  onChange={handleChangeForm}
                  placeholder="Giá"
                  className="mt-2 px-4 py-2 shadow rounded"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label>Image</label>
              <input
                type="text"
                id="image"
                name="image"
                value={productAdd.image}
                onChange={handleChangeForm}
                placeholder="Ảnh sp"
                className="mt-2 px-4 py-2 shadow rounded"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Danh mục</label>
              <select
                id="category"
                name="category"
                value={productAdd.category}
                onChange={handleChangeForm}
                className="mt-2 px-4 py-2 shadow rounded"
              >
                <option hidden>----chọn----</option>
                <option value="1">men's clothing</option>
                <option value="2">women's clothing</option>
                <option value="3">electronics</option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label>Description</label>
              <input
                value={productAdd.description}
                onChange={handleChangeForm}
                type="text"
                id="description"
                name="description"
                placeholder="Nhập mô ta sp"
                className="mt-2 px-4 py-2 shadow rounded"
              />
            </div>
            <div className="text-red-500">{message}</div>
            <div className="mt-6 flex gap-6">
              <button
                type="submit"
                className="rounded-full bg-orange-300 py-4 px-10 font-bold text-white shadow hover:bg-blue-500"
              >
                Create Product
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <h1 className="font-bold text-xl pb-10">Danh sách sản phẩm</h1>
          <Productslist products={Products} setProduct={setProduct} />
        </div>
      </div>
    </>
  );
};

export default Products;
