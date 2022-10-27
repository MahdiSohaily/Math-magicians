import React from 'react';
import Screen from './Screen';
import Key from './Key';
import calculate from '../logic/calculate';
class Calculator extends React.Component {
  state = {
    keys: [
      { id: 1, area: 'seven', value: '7' },
      { id: 1, area: 'eight', value: '8' },
      { id: 1, area: 'nine', value: '9' },
      { id: 1, area: 'del', value: 'DEL' },
      { id: 1, area: 'four', value: '4' },
      { id: 1, area: 'five', value: '5' },
      { id: 1, area: 'six', value: '6' },
      { id: 1, area: 'plus', value: '+' },
      { id: 1, area: 'one', value: '1' },
      { id: 1, area: 'two', value: '2' },
      { id: 1, area: 'three', value: '3' },
      { id: 1, area: 'subtract', value: '-' },
      { id: 1, area: 'dot', value: '.' },
      { id: 1, area: 'zero', value: '0' },
      { id: 1, area: 'divide', value: '/' },
      { id: 1, area: 'multiple', value: '*' },
      { id: 1, area: 'reset', value: 'RESET' },
      { id: 1, area: 'equal', value: '=' },
    ],
    obj: { total: '0', next: '', operation: '' },
  };

  onClickListener = (event: Event) => {
    const element = event.target as HTMLElement;
    this.setState(() => calculate(this.state.obj, element.innerText));
  };

  render(): React.ReactNode {
    const keys = this.state.keys.map((key) => (
      <Key
        area={key.area}
        keyValue={key.value}
        clickEvent={this.onClickListener}
      />
    ));
    return (
      <section className="calc">
        <Screen />
        <div className="numbers-container bg-toggle mt-6 p-8 rounded">
          {keys}
        </div>
      </section>
    );
  }
}

export default Calculator;
