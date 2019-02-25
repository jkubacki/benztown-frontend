import React from 'react';

import { getElements } from 'actions/elements';
import { connect } from 'react-redux';

import Element from 'components/Element';

class ElementList extends React.Component {
  componentWillMount() {
    this.props.getElements({});
  }

  render() {
    const { elements } = this.props;
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">File</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <Element key={element.id} element={element} />
          ))}
        </tbody>
      </table>
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
