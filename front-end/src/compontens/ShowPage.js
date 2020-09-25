import React, { Component } from 'react';
class ShowPage extends Component{
    
        constructor() {
            super();
            this.state = {
                product:[]
            }
          }
          async componentDidMount() {
            let pro = await (await fetch(`http://localhost:8080/product/list`)).json();//主要是从后台拿json数据
            this.setState({
                product:pro
            });
          }
}