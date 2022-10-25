import React from 'react';
import Screen from './Screen';
import Key from './Key';

class Calculator extends React.Component {
  constructor(props: object) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <section className="calc">
        <Screen />
        <div className="numbers-container bg-toggle mt-6 p-8 rounded">
          <Key area="seven" keyValue="7" />
          <Key area="eight" keyValue="8" />
          <Key area="nine" keyValue="9" />
          <Key area="del" keyValue="DEL" />
          <Key area="four" keyValue="4" />
          <Key area="five" keyValue="5" />
          <Key area="six" keyValue="6" />
          <Key area="plus" keyValue="+" />
          <Key area="one" keyValue="1" />
          <Key area="two" keyValue="2" />
          <Key area="three" keyValue="3" />
          <Key area="subtract" keyValue="-" />
          <Key area="dot" keyValue="." />
          <Key area="zero" keyValue="0" />
          <Key area="divide" keyValue="/" />
          <Key area="multiple" keyValue="*" />
          <Key area="reset" keyValue="RESET" />
          <Key area="equal" keyValue="=" />
        </div>
      </section>
    );
  }
}

export default Calculator;
