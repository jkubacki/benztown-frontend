import PropTypes from 'prop-types';

// Content of the location object passed to routes by react-router
export const routerLocationPropType = PropTypes.shape({
  key: PropTypes.string,
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.any),
});

export const elementPropType = PropTypes.shape({
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    tag_list: PropTypes.array.isRequired,
  }).isRequired,
});
