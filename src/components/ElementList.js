import React from 'react';
import PropTypes from 'prop-types';
import getElementsAction from 'actions/elements';
import { connect } from 'react-redux';

import Element from 'components/Element';

class ElementList extends React.Component {
  componentWillMount() {
    const { getElements } = this.props;
    getElements({});
  }

  render() {
    const { elements } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">File</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {elements.map(element => <Element key={element.id} element={element} />)}
        </tbody>
      </table>
    );
  }
}

ElementList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        name: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        tag_list: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  getElements: PropTypes.func.isRequired,
};

function mapStateToProps(props) {
  const { elements } = props;
  return { elements };
}

export { ElementList }

export default connect(
  mapStateToProps,
  { getElements: getElementsAction },
)(ElementList);
