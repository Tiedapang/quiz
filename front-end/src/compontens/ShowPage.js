import React, { Component } from 'react';
class ShowPage extends Component{
    
        constructor() {
            super();
            this.state = {
                product:[],
                elements:[]
            }
          }
         
          async componentDidMount() {
            let pro = await (await fetch(`http://localhost:8080/product/list`)).json();//主要是从后台拿json数据
            this.setState({
                product:pro
            });
            let elements = [];
            for(var i in this.state.product){
                
                elements.push(
                    <div>
                        <img src='{i.imagePath}'></img>
                        <p>{i.name}</p>
                        <p>单价：{i.price}/{i.unit}</p>
                    </div>
                )
            }
            this.setState({
                elements:elements
            });
          }
          render(){
              return(
                <div>
                    {this.state.elements.forEach(item => item)}
                  
              </div>
 
              )

          }
}