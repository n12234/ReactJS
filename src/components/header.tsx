import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CountCT } from "../layouts/client";

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const [count, setCount] = useContext(CountCT) as any
  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <span className="text-sm border-r-2 border-r-black px-3">
              Phone Number: 956 742 455 678
            </span>
            <span className="text-sm px-3">Email:info@ddsgnr.com</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="lg:flex items-center">
            <div className="hidden lg:flex lg:gap-x-4 pr-16">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <i className="fa-brands fa-facebook text-lg"></i>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="">
                <i className="fa-solid fa-globe"></i>
                <span className="px-3">English</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="px-4">
                <i className="fa-regular fa-user text-lg px-2 "></i>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 px-2 py-1 rounded-md"
                >
                  Sign in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <hr className="text-black" />
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            <i className="fa-brands fa-react text-2xl text-sky-500 pl-5 pr-2"></i>
            <span className="text-xl">ReactJS</span>
          <div className="ml-10">So dem: {count} </div>
          <button 
            className="border-black border px-3 py-1.5 ml-5 rounded-md hover:bg-gray-200" 
            onClick={() => setCount(count + 1)}>Thay doi value
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="lg:flex items-center">
            <div className="hidden lg:flex lg:gap-x-10 pr-16">
              {/* <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                <NavLink to={"/"}>Home</NavLink>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                Product
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
              >
                Admin
              </a> */}
              {props.title}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
              <div className=" border rounded-md p-1.5 mr-7">
                <span className="px-3">Search</span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="flex items-center px-4 text-center">
                <div className="">
                  <i className="fa-regular fa-heart"></i> <br />
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 px-2 py-1 rounded-md"
                  >
                    Wishlist
                  </a>
                </div>
                <div className="">
                <i className="fa-solid fa-cart-plus"></i><br />
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 px-2 py-1 rounded-md"
                  >
                    Cart
                  </a>
                </div>
                <div className="">
                <i className="fa-regular fa-bell"></i> <br />
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 px-2 py-1 rounded-md"
                  >
                    Notification
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <hr className="text-black" />
      </header>
    </>
  );
};

export default Header;
