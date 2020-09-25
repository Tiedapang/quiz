import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import ShowPage from './compontens/ShowPage';
import OrderList from './compontens/OrderList'
function App() {
  return (
    <BrowserRouter>
    <div>
      <nav class="navbar navbar-inverse">
      <div class="container">
      <ul>
                <li>
                    <Link to={"/"}>商城</Link>
                </li>
                <li>
                    <Link to={"/order"}>订单</Link>
                </li>

                <li>
                    <Link to={"/"}>添加商品</Link>
                </li>

            </ul>
    </div>
    <Route exac path='/' component={ShowPage}></Route>
    <Route  path='/order' component={OrderList}></Route>
 
    </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
