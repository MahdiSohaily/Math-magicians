/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import Screen from './Screen';
import Key from './Key';
import calculate from '../logic/calculate';

const hooks = () => {
  const keysData = [
    { id: 1, area: 'seven', value: '7' },
    { id: 2, area: 'eight', value: '8' },
    { id: 3, area: 'nine', value: '9' },
    { id: 4, area: 'del', value: 'DEL' },
    { id: 5, area: 'four', value: '4' },
    { id: 6, area: 'five', value: '5' },
    { id: 7, area: 'six', value: '6' },
    { id: 8, area: 'plus', value: '+' },
    { id: 9, area: 'one', value: '1' },
    { id: 10, area: 'two', value: '2' },
    { id: 11, area: 'three', value: '3' },
    { id: 12, area: 'subtract', value: '-' },
    { id: 13, area: 'dot', value: '.' },
    { id: 14, area: 'zero', value: '0' },
    { id: 15, area: 'divide', value: '/' },
    { id: 16, area: 'multiple', value: '*' },
    { id: 17, area: 'reset', value: 'RESET' },
    { id: 18, area: 'equal', value: '=' },
  ];
  const [operation, setOperation] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const onClickListener = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;
    const buttonName = element.getAttribute('data-key')!
      ? element.getAttribute('data-key')!
      : '';
    setOperation(calculate(operation, buttonName));
  };

  const keys = keys.map((key) => (
    <Key
      key={key.id}
      area={key.area}
      keyValue={key.value}
      clickEvent={this.onClickListener}
    />
  ));
};
class Calculator extends React.Component {
  state = {
    keys: [
      { id: 1, area: 'seven', value: '7' },
      { id: 2, area: 'eight', value: '8' },
      { id: 3, area: 'nine', value: '9' },
      { id: 4, area: 'del', value: 'DEL' },
      { id: 5, area: 'four', value: '4' },
      { id: 6, area: 'five', value: '5' },
      { id: 7, area: 'six', value: '6' },
      { id: 8, area: 'plus', value: '+' },
      { id: 9, area: 'one', value: '1' },
      { id: 10, area: 'two', value: '2' },
      { id: 11, area: 'three', value: '3' },
      { id: 12, area: 'subtract', value: '-' },
      { id: 13, area: 'dot', value: '.' },
      { id: 14, area: 'zero', value: '0' },
      { id: 15, area: 'divide', value: '/' },
      { id: 16, area: 'multiple', value: '*' },
      { id: 17, area: 'reset', value: 'RESET' },
      { id: 18, area: 'equal', value: '=' },
    ],
    obj: { total: '', next: '', operation: '' },
  };

  onClickListener = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.target as HTMLElement;
    const buttonName = element.getAttribute('data-key')!
      ? element.getAttribute('data-key')!
      : '';
    this.setState({ obj: calculate(this.state.obj, buttonName) });
  };

  render(): React.ReactNode {
    const keys = this.state.keys.map((key) => (
      <Key
        key={key.id}
        area={key.area}
        keyValue={key.value}
        clickEvent={this.onClickListener}
      />
    ));
    return (
      <section className="calc">
        <Screen
          total={this.state.obj.total}
          operation={this.state.obj.operation}
          next={this.state.obj.next}
        />
        <div className="numbers-container bg-toggle mt-6 p-8 rounded">
          {keys}
        </div>
      </section>
    );
  }
}

export default Calculator;
