import { shallow } from 'enzyme';

import validateField from './validateField';

const field = {
  input: { value: 'value' },
  placeholder: 'placeholder',
  type: 'text',
  className: 'form-control',
  required: true
}

const fieldWithTouchedAndError = validateField({ meta: { touched: true, error: 'error' }, ...field });
const fieldWithTouchedAndNoError = validateField({ meta: { touched: true, error: null }, ...field });
const fieldWithoutTouchedAndNoError = validateField({ meta: { touched: true, error: null }, ...field });

it('adds is-invalid class to field with touched and error', () => {
  const wrapper = shallow(fieldWithTouchedAndError);
  expect(wrapper.find('input').props().className).toEqual("form-control is-invalid");
});

it('adds .invalid-feedback span with error after field', () => {
  const wrapper = shallow(fieldWithTouchedAndError);
  expect(wrapper.find('.invalid-feedback').length).toEqual(1);
  expect(wrapper.find('span').text()).toEqual('error');
});

it('doesn\'t add is-invalid class to fields without touched or wihout error', () => {
  const wrapperWithTouchedAndNoError = shallow(fieldWithTouchedAndNoError);
  const wrapperWithoutTouchedAndNoError = shallow(fieldWithoutTouchedAndNoError);

  expect(wrapperWithTouchedAndNoError.find('input').props().className).toEqual("form-control");
  expect(wrapperWithoutTouchedAndNoError.find('input').props().className).toEqual("form-control");
});
