import React, { Component } from 'react';
class ShowPage extends Component{
    
        constructor() {
            super();
            this.state = {
                product:[],
            }
          }
         
          async componentDidMount() {
            let pro = await (await fetch(`http://localhost:8080/product/list`)).json();//主要是从后台拿json数据
            this.setState({
                product:pro
            });
          }
          render(){
            const elements=[];
            this.state.product.forEach((item)=>{
              elements.push(
                <div>
                  <img></img>
                  <p>{item.name}</p>
                  <p>单位：{item.price}/{item.unit}</p>
                </div>
              )
            });
              return(
                <div>
                   {elements}
                  
              </div>
 
              )

          }
}
export default ShowPage;