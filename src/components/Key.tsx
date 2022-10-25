import React from 'react';
class Key extends React.Component<{ area: string; key: string }> {
  constructor(
    props:
      | { area: string; key: string }
      | Readonly<{ area: string; key: string }>
  ) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={`key bg-num-key rounded ${this.props.area}`}>
        <span className="num-text key-text">{this.props.key}</span>
      </div>
    );
  }
}

export default Key;
