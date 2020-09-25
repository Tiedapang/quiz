import React, { Component } from 'react';
class OrderList extends Component{
    constructor() {
        super();
        this.state = {
            orders:[],
        }
      }
     
      async componentDidMount() {
        let orders = await (await fetch(`http://localhost:8080/order/list`)).json();//主要是从后台拿json数据
        this.setState({
            orders:orders
        });
      }
      deleteOrders(id){
        await fetch(`http://localhost:8080/order/event`);//主要是从后台拿json数据
      }
    render(){
       

        return (
          <div>
            <table className='table'>
              <thead>
              <tr>
                <th>名字</th>
                <th>单价</th>
                <th>数量</th>
                <th>单位</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              {this.state.orders.map((item ) =>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.count}</td>
                  <td>{item.unit}</td>
                  <td><button onClick = {this.deleteOrders(item.id)}>删除</button></td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        );
    }
}
export default OrderList;