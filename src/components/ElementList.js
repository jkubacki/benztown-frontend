import React from 'react';

import { getElements } from 'actions/elements';
import { connect } from 'react-redux';

import Element from 'components/Element';

class ElementList extends React.Component {
  componentWillMount() {
    this.props.getElements();
  }

  render() {
    const { elements } = this.props;
    return(
      <div className="elements">
        {elements.map((element) => (
          <Element key={element.id} element={element} />
        ))}
      </div>
    )
  }
}

function mapStateToProps(props) {
  const { elements } = props;
  return { elements };
}

export default connect(
  mapStateToProps,
  { getElements },
)(ElementList);
