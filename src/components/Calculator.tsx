/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from 'react';
import Screen from './Screen';
import Key from './Key';
import calculate from '../logic/calculate';

const Calculator = () => {
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

  const keys = keysData.map((key) => (
    <Key
      key={key.id}
      area={key.area}
      keyValue={key.value}
      clickEvent={onClickListener}
    />
  ));

  return (
    <div className=' calculator'>
      <div className="p-8 introduction">
        <h1>Let's do some Math!</h1>
      </div>
      <section className="calc">
        <Screen
          total={operation.total}
          operation={operation.operation}
          next={operation.next}
        />
        <div className="numbers-container bg-toggle mt-6 p-8 rounded">
          {keys}
        </div>
      </section>
    </div>
  );
};

export default Calculator;
