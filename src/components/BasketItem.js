import React, { Component } from 'react'
import './BasketItem.css';

export default class BasketItem extends Component {
  render() {
    const { name, price, count } = this.props
    return (
      <div className="BasketItem">
        <div className="name">{name}</div>
        <div className="price">{price}원</div>
        <div className="count">{count}</div>
        <div className="return">갖다놓기</div>
      </div>
    )
  }
}