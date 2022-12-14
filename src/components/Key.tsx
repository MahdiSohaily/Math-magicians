import React from 'react';
class Key extends React.Component<{ area: string; keyValue: string; clickEvent:(event: React.MouseEvent<HTMLElement>) => void }> {
  constructor(
    props:
      | { area: string; keyValue: string; clickEvent:(event: React.MouseEvent<HTMLElement>) => object }
      | Readonly<{ area: string; keyValue: string; clickEvent:(event: React.MouseEvent<HTMLElement>) => object }>
  ) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={`key bg-num-key rounded ${this.props.area}`} onClick={this.props.clickEvent} data-key={this.props.keyValue}>
        <span className="num-text key-text" data-key={this.props.keyValue}>{this.props.keyValue}</span>
      </div>
    );
  }
}

export default Key;
