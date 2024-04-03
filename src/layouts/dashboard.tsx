import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

function Dashboard() {

  const navigate = useNavigate()
  const logout = () => {
    navigate("/")
  }
  return (
    <>
    <main>
      <div className="flex">
        <div className="sidebar min-h-screen border-r-2 top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white">
          <div className="text-xl">
            <div className="p-2.5 mt-1 flex items-center">
            <i className="fa-brands fa-react text-2xl text-sky-500 pl-5 pr-2"></i>
            <span className="text-xl">ReactJS</span>
              <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 ">
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 font-bold">
            <NavLink to={"/dashboard/product"}>Home</NavLink>
            </span>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200">
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 font-bold">
              <NavLink to={"/dashboard/create"}>Create Products</NavLink>
            </span>
          </div>
          <div className="my-4 bg-gray-600 h-[1px]"></div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 ">
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 font-bold">
                Chatbox
              </span>
              <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          <div
            className="text-left text-sm mt-2 w-4/5 mx-auto font-bold"
            id="submenu"
          >
            <h1 className="cursor-pointer p-2 hover:bg-gray-200 rounded-md mt-1">
              Social
            </h1>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-200 ">
            <i className="bi bi-box-arrow-in-right"></i>
            <span onClick={logout} className="text-[15px] ml-4 font-bold">
              Logout
            </span>
          </div>
        </div>
      <Outlet />
      </div>
      <ToastContainer />
      </main>
    </>
  );
}

export default Dashboard;
