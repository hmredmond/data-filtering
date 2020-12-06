import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return <main className="overflow-hidden noselect">{children}</main>;
  }
}

export default Layout;
