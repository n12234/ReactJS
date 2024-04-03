import './index.css';
import { Route, Routes } from 'react-router-dom';
import Client from './layouts/client';
import HomePage from './layouts/homePage';
import Details from './layouts/details';
import Dashboard from './layouts/dashboard';
import Login from './components/user/login';
import Register from './components/user/register';
import Category from './layouts/category';
import Products from './components/admin/product';
import ProductEdit from './components/admin/productedit';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
    <Routes>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
      <Route path='/' Component={Client}>
        <Route path='' Component={HomePage} />
        <Route path='/products/:productId' Component={Details} />
        <Route path='/category' Component={Category} />
      </Route>
      <Route path='/dashboard' Component={Dashboard} >
        <Route path='product' Component={Products}/>
        <Route path='product/:id' Component={ProductEdit}/>
      </Route>
    </Routes>
  )
}

export default App;
