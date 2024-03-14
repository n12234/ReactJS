import './index.css';
import { Route, Routes } from 'react-router-dom';
import Client from './layouts/client';
import HomePage from './layouts/homePage';
import Details from './layouts/details';
import Dashboard from './layouts/dashboard';
import Header from './components/header';
import Banner from './components/banner';
import ProductsCard from './components/products';
import Footer from './components/footer';
import Product from './interface/product';

function App() {
  const products:Product[]=[]
  const title: string="Home About Shop Contact"
  // [
  //   {
  //     title: "Home"
  //   },
  //   {
  //     title: "About"
  //   },
  //   {
  //     title: "Shop"
  //   },
  //   {
  //     title: "Contact"
  //   },
  // ]

  return(
    // <Routes>
    //   <Route path='/' Component={Client}>
    //     <Route path='' Component={HomePage} />
    //     <Route path='/details/:id' Component={Details} />
    //   </Route>
    //   <Route path='/dashboard' Component={Dashboard} />
    // </Routes>
    <>
      <Header title={title}/>
      <Banner />
      <ProductsCard products={products}/>
      <Footer />
    </>
  )
}

export default App;
