import "./index.css";
import { Route, Routes } from "react-router-dom";
import Client from "./layouts/client";
import HomePage from "./layouts/homePage";
import Details from "./layouts/details";
import Dashboard from "./layouts/dashboard";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Category from "./layouts/category";
import Products from "./components/admin/product";
import ProductEdit from "./components/admin/productedit";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./privaterouter";

function App() {
  let tokenUser = false;
  let tokeninfo: any = localStorage.getItem("accessToken");
  tokeninfo = JSON.parse(tokeninfo);
  if (tokeninfo !== null) {
    tokenUser = true;
  }

  return (
    <div>
      <div>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/" Component={Client}>
            <Route path="" Component={HomePage} />
            <Route path="/products/:productId" Component={Details} />
            <Route path="/category" Component={Category} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute accessToken={tokenUser}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="product" Component={Products} />
            <Route path="product/:productId" Component={ProductEdit} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
