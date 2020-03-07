import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(stores => ({
  number: stores.counter.number,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease,
}))
@observer
class Counter extends Component {
  render() {
    const { number, increase, decrease } = this.props;
    return (
      <div>
        <h2>한 번에 가져올 개수: {number}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
