import React, { createContext, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

export const CountCT = createContext([0, (e: number) => {}]);

const Client = () => {
  const [count, setCount] = useState(0);
  return (
    <CountCT.Provider value={[count, setCount]}>
      <Header title="logo" />
      <Outlet />
      <Footer />
    </CountCT.Provider>
  );
};

export default Client;
