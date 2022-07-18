import './App.css';
import { createBrowserHistory } from 'history'
import { Router,Redirect } from 'react-router'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Homepage';
import New from './pages/News/New';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Details/Detail';
// import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';

import { Suspense, lazy } from 'react';
import Checkout from './pages/Checkout/Checkout';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Loading from './pages/Loader/Loading';



const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/home" exact Component={Home}></HomeTemplate>
      <HomeTemplate path="/news" exact Component={New}></HomeTemplate>
      <HomeTemplate path="/contact" exact Component={Contact}></HomeTemplate>
      <HomeTemplate path="/detail/:id" exact Component={Detail}></HomeTemplate>
      <Suspense fallback={
        <h1>Loadiing</h1>
      } >
        <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout}></CheckoutTemplateLazy>
      </Suspense>
      
      <UserTemplate path="/login" exact Component={Login}></UserTemplate>
    </Router>
  );
}

export default App;
