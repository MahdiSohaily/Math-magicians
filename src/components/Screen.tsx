import React from 'react';
class Screen extends React.Component<{
  total: string;
  operation: string;
  next: string;
}> {
  constructor(
    props:
      | { total: string; operation: string; next: string }
      | Readonly<{ total: string; operation: string; next: string }>
  ) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="bg-screen mt-7 rounded p-8">
        <p className="result text-operation">
          {this.props.total}
          {this.props.operation}
          {this.props.next}
        </p>
      </div>
    );
  }
}

export default Screen;
