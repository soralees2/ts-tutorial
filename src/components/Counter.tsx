import * as React from 'react';

interface Props{

}

interface State{
  counter: number;
}

class Counter extends React.Component<Props, State> {
  state: State = {
    counter: 0,
  };

  onIncrement = (): void => {
    this.setState(
      ({ counter }) => ({ counter: counter + 1 }),
    );
  };

  onDecrement = (): void => {
    this.setState(
      ({ counter }) => ({ counter: counter - 1 }),
    );
  };

  render() {
    const { onIncrement, onDecrement } = this;
    const { counter } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <h3>{ counter }</h3>
        <button type="button" onClick={ onIncrement }>+</button>
        <button type="button" onClick={ onDecrement }>-</button>
      </div>
    );
  }
}

export default Counter;
