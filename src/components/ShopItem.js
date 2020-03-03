import React, { Component } from 'react'
import './ShopItem.css';

export default class ShopItem extends Component {
  render() {
    const { name, price } = this.props
    return (
      <div className="ShopItem">
        <h4>{name}</h4>
        <div>{price}원</div>
      </div>
    )
  }
}
