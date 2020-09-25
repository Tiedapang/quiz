import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
      <nav class="navbar navbar-inverse">
      <div class="container">
        <Link>商城</Link>
        <Link>订单</Link>
        <Link>添加商品</Link>
    </div>
    <Route exac path='/' component={ShowPage}></Route>
    </nav>
    </div>
    </BrowserRouter>
  );
}

export default App;
