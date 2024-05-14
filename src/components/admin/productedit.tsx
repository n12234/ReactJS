import React, { useEffect, useState } from "react";
import { CreateProduct } from "../../interface/productdb";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from "../../interface/category";
import axios from "axios";

type Props = {};

const ProductEdit = (props: Props) => {
  const navigate = useNavigate();
  const [categories, setCategoies] = useState<Category[]>([]);

  const [productEdit, setProductEdit] = useState<CreateProduct>({
    title: "",
    image: "",
    price: 0,
    category: "",
    desc: "",
  });

  const { productId } = useParams();

  const fetchProduct = async (id: string | number) => {
    try {
      const {data: product} = await axios.get(`http://localhost:8000/products/${id}`)
      setProductEdit(product)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(!productId) return;
    fetchProduct(productId)
  }, [productId]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const {data} = await axios.get(`http://localhost:8000/categories`)
        setCategoies(data)
      } catch (error) {
        console.log(error);
        
      }
    };
    fetchCategory();
  }, []);

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProductEdit({ ...productEdit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8000/products/`+ productId, productEdit)
      toast.success("Update thành công!!");
      navigate("/dashboard/product");
    } catch (error) {
      console.log(error);
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
                  onChange={handleChangeForm}
                  value={productEdit.title}
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
                  onChange={handleChangeForm}
                  value={productEdit.price}
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
                onChange={handleChangeForm}
                  value={productEdit.image}
                placeholder="Ảnh sp"
                className="mt-2 px-4 py-2 shadow rounded"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Danh mục</label>
              <select
              id="category"
              name="category"
                onChange={handleChangeForm}
                value={productEdit.category}
                className="mt-2 px-4 py-2 shadow rounded"
              >
                {categories.map((categori) => (
                  <option selected key={categori.id} value={categori.id}>
                    {categori.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col mb-4">
              <label>Desc</label>
              <input
              type="text"
              id="desc"
              name="desc"
                onChange={handleChangeForm}
                value={productEdit.desc}
                placeholder="Nhập mô ta sp"
                className="mt-2 px-6 py-2 shadow rounded"
              />
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
