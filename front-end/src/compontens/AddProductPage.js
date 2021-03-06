import React, { Component } from "react";
import Api from "../pathUtils/Api";
import '../css/addProductPage.css'
export default class AddProductPage extends Component {
    state = {
        name: "",
        price: 0,
        unit: "",
        imgUrl: "",
    };
    onSubmit = async (event) => {
        event.preventDefault();
        const isProNameExist = await (await Api.get(`/product/${this.state.name}`)).json()
        if (isProNameExist){
            alert("商品名称已存在，请输入新的商品名称")
        } else {
            await Api.post("/product", {
                ...this.state,
            }).then(
                alert('添加商品成功！')
            );
        }

    };
    disableButton = !(this.state.name && this.state.price && this.state.unit && this.state.imgUrl);
    onFormChange = (event) => {
        const value =
            event.target.name === "price"
                ? Number(Number(event.target.value).toFixed(2))
                : event.target.value;
        this.setState({
            [event.target.name]: value,
        });
        this.disableButton = !(this.state.name && this.state.price && this.state.unit && this.state.imgUrl);
    };
    render() {
        const { name, price, unit, imgUrl } = this.state;
        return (
            <div className={'pro'}>
                <div className={'addProPage'}>
                    <h3>添加商品</h3>
                </div>
                <div className={'addProPage-items'}>
                    <div>
                        <span>*</span>
                        <label htmlFor="name">名称：</label>
                        <br/>
                        <input
                            type="text"
                            placeholder="名称"
                            name="name"
                            id="name"
                            onChange={this.onFormChange}
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <label htmlFor="price">价格：</label>
                        <br/>
                        <input
                            type="number"
                            placeholder="价格"
                            name="price"
                            id="price"
                            onChange={this.onFormChange}
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <label htmlFor="unit">单位：</label>
                        <br/>
                        <input
                            type="text"
                            placeholder="单位"
                            name="unit"
                            id="unit"
                            onChange={this.onFormChange}
                        />
                    </div>
                    <div>
                        <span>*</span>
                        <label htmlFor="image">图片：</label>
                        <br/>
                        <input
                            type="text"
                            placeholder="URL"
                            name="imgUrl"
                            id="image"
                            onChange={this.onFormChange}
                        />
                    </div>
                </div>


                <button disabled={this.disableButton} className={this.disableButton ? 'buttonDisable' : 'buttonOk'}  onClick={this.onSubmit}>
                    提交
                </button>
            </div>
        );
    }
}
