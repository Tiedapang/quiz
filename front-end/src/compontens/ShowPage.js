import React, { Component } from 'react';
import bg from '../img/cole.jpg'
import '../css/showPage.css'
import cart from '../img/shopping_cart-24px.svg'
import deletePic from '../img/delete-24px.svg'

class ShowPage extends Component{
    
        constructor() {
            super();
            this.state = {
                product:[],
                orders:[],
            }
          }
         
          async componentDidMount() {
            let pro = await (await fetch(`http://localhost:8080/product/list`)).json();//主要是从后台拿json数据
            this.setState({
                product:pro
            });
          }

    addProdToOrder = (item) => {
        console.log(item);
    }
          render() {
            const elements=[];
            this.state.product.forEach((item)=>{
              elements.push(
                <div key={item.id} className={'pro-items'}>
                  <img src={bg}></img>
                  <p className={'pro-items-name'}>{item.name}</p>
                  <p className={'pro-items-unit'}>单位：{item.price}/{item.unit}</p>
                    <button className={'pro-items-add-button'} onClick={() => this.addProdToOrder(item)}>+</button>
                </div>
              )
            });
              return(
                <div className={'showPage'}>
                    <div className={'elements'}>
                        {elements}
                    </div>
                    <div className={'table-item'}>
                        <table>
                            <th>
                                <td>商品</td>
                                <td>数量</td>
                                <td></td>
                            </th>
                            <tr>
                                <td>可乐</td>
                                <td>2</td>
                                <td><img src={deletePic}/></td>
                            </tr>
                        </table>
                    </div>
                   <div className={'cart'}>
                       <img src={cart}></img>
                   </div>
                  
              </div>
 
              )

          }
}
export default ShowPage;