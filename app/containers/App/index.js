import React from 'react';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

   shouldComponentUpdate(nextProps, nextContext) {
    console.log("should ReceiveProps ", this.props);
    console.log("should ReceiveProps2 ", nextProps)
    return true
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
