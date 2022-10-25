import React from 'react';
class Key extends React.Component<{ area: string; keyValue: string }> {
  constructor(
    props:
      | { area: string; keyValue: string }
      | Readonly<{ area: string; keyValue: string }>
  ) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={`key bg-num-key rounded ${this.props.area}`}>
        <span className="num-text key-text">{this.props.keyValue}</span>
      </div>
    );
  }
}

export default Key;
