import React, { Component } from 'react';
import {Button, Table} from 'antd';
import bg from '../img/cole.jpg'
import '../css/showPage.css'
import cart from '../img/shopping_cart-24px.svg'
import deletePic from '../img/delete-24px.svg'
import Api from "../pathUtils/Api";

class ShowPage extends Component{
    
        constructor() {
            super();
            this.state = {
                product:[],
                cartDatas:[],
                isCartTableShow:false
            }
          }
         
          async componentDidMount() {
            let pro = await (await fetch(`http://localhost:8080/product/list`)).json();//主要是从后台拿json数据
            this.setState({
                product:pro
            });
          }

    opearProToCart = async (name,count,opera) => {
            const requestJson = {'name': name , 'count': count}
        await Api.post(`/cart/${opera}`, {
            ...requestJson
        }).then(
        )
    }
    showAllCartData = async () => {
        const allCartData = await (await Api.get(`/cart`)).json()
        const flag = !this.state.isCartTableShow
        this.setState({
            cartDatas: allCartData,
            isCartTableShow: flag,
        });
    }
    async deleteOrder(name){
            await Api.get(`/cart/${name}`)
    }
    async clearAllCart(){
        await Api.get(`/cart/deleteAll`)
    }
          render() {
            const elements=[];
            this.state.product.forEach((item)=>{
              elements.push(
                <div key={item.id} className={'pro-items'}>
                  <img src={bg}></img>
                  <p className={'pro-items-name'}>{item.name}</p>
                  <p className={'pro-items-unit'}>单位：{item.price}/{item.unit}</p>
                    <button className={'pro-items-add-button'} onClick={() => this.opearProToCart(item.name,1, 'add')}>+</button>
                </div>
              )
            });

              const columns = [
                  {
                      title: '商品',
                      dataIndex: 'name',
                      key: 'name',
                  },
                  {
                      title: '数量',
                      dataIndex: 'count',
                      key: 'age',
                      render: (text, record) => (
                          <div className={'changeOrderState'}>
                              <button className={'opera-button'} onClick={() => this.opearProToCart(record.name,1, 'add')}>+</button>
                              <span>{record.count}</span>
                              <button className={'opera-button'} onClick={() => this.opearProToCart(record.name,1, 'min')}>-</button>
                          </div>
                      )
                  },
                  {
                      title: '',
                      dataIndex: 'operation',
                      key: 'operation',
                      render: (text, record) => (
                          <div className={'operaArea'}>
                              <img src={deletePic} onClick={this.deleteOrder.bind(this, record.name)}></img>
                          </div>
                      )
                  }
              ];
              return(
                <div className={'showPage'}>
                    <div className={'elements'}>
                        {elements}
                    </div>
                    <div className={this.state.isCartTableShow ? 'table-item' : 'table-hidden'}>

                        <Table dataSource={this.state.cartDatas} columns={columns} pagination={false} locale={{emptyText: '暂无商品，请添加商品'}}/>
                        <div className={'operaBtns'}>
                            <button className={'ordered'}>立即下单</button>
                            <button className={'canceled'} onClick={this.clearAllCart}>清空</button>
                        </div>

                    </div>

                   <div className={'cart'}>
                       <img src={cart} onClick={this.showAllCartData}></img>
                   </div>
                  
              </div>
 
              )

          }
}
export default ShowPage;