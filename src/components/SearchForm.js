import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import getElementsAction from 'actions/elements';

class SearchForm extends React.Component {
  handleChange = (event) => {
    const searchQuery = event.target.value;
    const { getElements } = this.props;
    getElements({ q: searchQuery });
  };

  render() {
    return (
      <input type="text" placeholder="Search" className="form-control" onChange={this.handleChange} />
    );
  }
}

SearchForm.propTypes = {
  getElements: PropTypes.func.isRequired,
};

export { SearchForm as SearchFormUnwrapped };

export default compose(
  connect(
    null,
    { getElements: getElementsAction },
  ),
)(SearchForm);
