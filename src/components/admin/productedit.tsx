import React, { useEffect, useState } from "react";
import Joi from "joi";
import {ProductDB} from "../../interface/productdb";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";

type Props = {};

const ProductEdit = (props: Props) => {

  const navigate = useNavigate()

  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const schema = Joi.object({
    title: Joi.string().required().min(3).max(50).empty().message,
    // ({
    //   'string.empty':'Tên sản phẩm không được để trống',
    //     'string.min': 'Tên sản phẩm phải có ít nhất 3 ký tự',
    //     'string.max': 'Tên sản phẩm không được vượt quá 50 ký tự',
    //     'any.required': 'Tên sản phẩm là trường bắt buộc',
    //   }),
  });

  const param = useParams();
  const id = param.id;

  // const [Products, setProduct] = useState<ProductDB[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
    .then(res => res.json())
    .then((product:ProductDB) => {
      setTitle(product.title)
      setImage(product.image)
      setCategory(product.category)
      setPrice(product.price)
      setDescription(product.description)
    })
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(title, image, price, description, category);

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, image, price, description, category }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data:ProductDB) => {
        toast.success('Update thành công!!')
        navigate("/dashboard/product")
      })
      .catch((error) => {
        toast.error(error)
      });
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
                  onChange={(e: any) => {
                    setTitle(e.target.value);
                  }}
                  value={title}
                  placeholder="Nhập tên sp"
                  className="mt-2 px-4 py-2 shadow rounded"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label>Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e: any) => {
                    setPrice(e.target.value);
                  }}
                  placeholder="Giá"
                  className="mt-2 px-4 py-2 shadow rounded"
                />
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label>Image</label>
              <input
                type="text"
                value={image}
                onChange={(e: any) => {
                  setImage(e.target.value);
                }}
                placeholder="Ảnh sp"
                className="mt-2 px-4 py-2 shadow rounded"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Danh mục</label>
              <select
              value={category}
                onChange={(e: any) => {
                  setCategory(e.target.value);
                }}
                className="mt-2 px-4 py-2 shadow rounded"
              >
                <option selected></option>
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label>Description</label>
              <textarea
              value={description}
                onChange={(e: any) => {
                  setDescription(e.target.value);
                }}
                placeholder="Nhập mô ta sp"
                className="mt-2 px-6 py-2 shadow rounded"
              ></textarea>
            </div>
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
      </div>
    </>
  );
};

export default ProductEdit;
