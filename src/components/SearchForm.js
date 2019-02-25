import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getElements } from 'actions/elements';

class SearchForm extends React.Component {
  handleChange = event => {
    const search_query = event.target.value
    this.props.getElements({q: search_query});
  };

  render() {
    return(
      <input type="text" placeholder="Search" className="form-control" onChange={this.handleChange} />
    )
  }
}

export default compose(
  connect(
    null,
    { getElements },
  ),
)(SearchForm)
