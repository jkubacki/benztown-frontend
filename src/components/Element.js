import React from 'react';

class Element extends React.Component {
  render() {
    const { element } = this.props;
    return (
      <>
        {element.id}
      </>
    )
  }
}

export default Element;
