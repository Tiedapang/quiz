import React, { Component }from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ShowPage from './compontens/ShowPage';
import OrderList from './compontens/OrderList';
import Header from './compontens/Header';
import AddProductPage from "./compontens/AddProductPage";
import Footer from "./compontens/Footer";
export default class App extends Component {
    render = () => (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/mall">
                        <ShowPage/>
                    </Route>
                    <Route path="/order">
                        <OrderList/>
                    </Route>
                    <Route path="/add">
                        <AddProductPage/>
                    </Route>
                    <Redirect to="/mall" />
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}