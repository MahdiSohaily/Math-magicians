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
          <Key area="seven" key="7" />
          <Key area="eight" key="8" />
          <Key area="nine" key="9" />
          <Key area="del" key="DEL" />
          <Key area="four" key="4" />
          <Key area="five" key="5" />
          <Key area="six" key="6" />
          <Key area="plus" key="+" />
          <Key area="one" key="1" />
          <Key area="two" key="2" />
          <Key area="three" key="3" />
          <Key area="subtract" key="-" />
          <Key area="dot" key="." />
          <Key area="zero" key="0" />
          <Key area="divide" key="/" />
          <Key area="multiple" key="*" />
          <Key area="reset" key="RESET" />
          <Key area="equal" key="=" />
        </div>
      </section>
    );
  }
}

export default Calculator;
