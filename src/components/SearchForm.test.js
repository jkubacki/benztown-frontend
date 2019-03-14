import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { SearchFormUnwrapped as SearchForm } from 'components/SearchForm';

const props = {
  getElements: jest.fn(() => Promise.resolve()),
  handleSubmit: jest.fn(x => x),
};

describe('SearchForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchForm {...props} />);
  });

  it('should render corectly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render search input', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should call getElements with value from input on change', () => {
    const searchInput = wrapper.find('input');
    const event = { target: { value: 'query' } };

    searchInput.simulate('change', event);

    expect(props.getElements).toHaveBeenCalledWith({ q: 'query' });
  });
});
