import React, { Component } from 'react';
class Product extends Component{
    render(){
        return(
            <div>
                <p>添加商品</p>
                <div>
                    <p>名称：</p>
                    <input defaultValue='名称'></input>
                </div>
                <div>
                    <p>价格：</p>
                    <input defaultValue='价格'></input>
                </div>
                <div>
                    <p>单位：</p>
                    <input defaultValue='单位'></input>
                </div>
                <div>
                    <p>图片：</p>
                    <input defaultValue='url'></input>
                </div>
            </div>
        );
    }

}
export default Product;