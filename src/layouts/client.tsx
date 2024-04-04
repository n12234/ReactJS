import React, { createContext, useReducer, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Login from "../components/user/login";
import Register from "../components/user/register";
import { ToastContainer } from "react-toastify";

export const CountCT = createContext([] as any);
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'login':
      return (<Login />)
    case 'register':
      return (<Register />)
    default:
      return (<></>);
  }
};

const Client = () => {
  const [state, setState] = useReducer(reducer,(<></>));
  return (
    <>
    <CountCT.Provider value={[state, setState]}>
      <Header />
        <Outlet />
      <Footer />
    </CountCT.Provider>
    </>
  );
};

export default Client;
