import React, { useEffect, useState } from "react";
import { CreateProduct, ProductDB } from "../../interface/productdb";
import Productslist from "./productslist";
import { toast } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Products = () => {

  const [Products, setProduct] = useState<ProductDB[]>([]);
  const getAllProduct = async () => {
    try {
      const res = await fetch("http://localhost:8000/products");
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

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      price: 0,
      category: "",
      desc: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required').min(4, 'Phải có 4 ký tự trở lên'),
      image: Yup.string().required('Image is required').url('Phải là một URL'),
      price: Yup.number().required('Price is required').positive('Phải là một số dương'),
      category: Yup.string().required('Category is required'),
      desc: Yup.string().required('Description is required').min(20,'Phải có 20 ký tự trở lên'),
    }),
    onSubmit: async (values, {setSubmitting, resetForm}) => {
      try {
        await axios.post(`http://localhost:8000/products`, values)
          .then((res) => {
            getAllProduct();
            toast.success("Thêm thành công!!");
          });
          resetForm()
      } catch (error) {
        toast.error("Thêm thất bại!!")
        return;
      } finally {
        setSubmitting(false)
      }
    }
  });

  return (
    <>
      <div className="h-screen w-screen flex justify-center pt-10">
        <div className="px-10  rounded shadow-sm bg-stone-50 max-w-md w-2/3 mr-10">
          <div className="mb-6 p-10 bg-white -m-10">
            <h1 className="font-bold text-2xl">Create Product</h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col mb-4">
                <label>Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Nhập tên sp"
                  className="mt-2 px-4 py-2 shadow rounded"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                {formik.errors.title && (
                  <p className="text-red-500">{formik.errors.title}</p>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label>Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  placeholder="Giá"
                  className="mt-2 px-4 py-2 shadow rounded"
                />
                 {formik.errors.price && (
                  <p className="text-red-500">{formik.errors.price}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label>Image</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                placeholder="Ảnh sp"
                className="mt-2 px-4 py-2 shadow rounded"
              />
               {formik.errors.image && (
                  <p className="text-red-500">{formik.errors.image}</p>
                )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="">Danh mục</label>
              <select
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                className="mt-2 px-4 py-2 shadow rounded"
              >
                <option hidden>----chọn----</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="electronics">electronics</option>
              </select>
              {formik.errors.category && (
                  <p className="text-red-500">{formik.errors.category}</p>
                )}
            </div>

            <div className="flex flex-col mb-4">
              <label>Description</label>
              <input
                value={formik.values.desc}
                onChange={formik.handleChange}
                type="text"
                id="desc"
                name="desc"
                placeholder="Nhập mô ta sp"
                className="mt-2 px-4 py-2 shadow rounded"
              />
               {formik.errors.desc && (
                  <p className="text-red-500">{formik.errors.desc}</p>
                )}
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
        <div className="">
          <h1 className="font-bold text-xl pb-10">Danh sách sản phẩm</h1>
          <Productslist products={Products} setProduct={setProduct} />
        </div>
      </div>
    </>
  );
};

export default Products;
