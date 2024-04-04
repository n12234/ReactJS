import React from "react";
import { ProductDB } from "../../interface/productdb";
import { toast } from "react-toastify";
import axios from "axios";

type Props = {
  products: ProductDB[];
  setProduct: (data: ProductDB[]) => void;
};

const Productslist = ({ products, setProduct }: Props) => {
  const delProduct =async (id: string | number) => {
    const cf = window.confirm("Bạn có muốn xoá không?");
    if (cf) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`)
          .then(() => {
            const newProducts = products.filter(
              (product: ProductDB) => product.id !== id
            );
            setProduct(newProducts);
            toast.success("Xoá thành công!!");
          })
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };
  return (
    <>
      <div className="">
        <table className="">
          <thead className="">
            <tr>
              <th className="border-[1.5px] p-2">STT</th>
              <th className="border-[1.5px] p-2">Tên sản phẩm</th>
              <th className="border-[1.5px] p-2">Ảnh</th>
              <th className="border-[1.5px] p-2">Giá tiền</th>
              <th className="border-[1.5px] p-2">Action</th>
            </tr>
          </thead>

          <tbody className=" ">
            {products.map((product: ProductDB, index: number) => {
              return (
                <tr>
                  <td className="border-[1.5px] p-2">{index + 1}</td>
                  <td className=" w-[140px] border-[1.5px] p-2">
                    {product.title}
                  </td>
                  <td className=" w-[100px] border-[1.5px] p-2">
                    <img
                      className="w-[80px] h-[100px]"
                      src={product.image}
                      alt=""
                    />
                  </td>
                  <td className=" w-[100px] border-[1.5px] p-2">
                    {product.price}
                  </td>
                  <td className="border-[1.5px] p-2">
                    <a
                      className="bg-blue-600 text-white px-2 py-1 rounded-md mr-1"
                      href={`/dashboard/product/${product.id}`}
                    >
                      Sửa
                    </a>
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded-md"
                      onClick={() => {
                        delProduct(product.id);
                      }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Productslist;
