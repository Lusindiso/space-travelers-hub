import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/index';
import Rockets from '../pages/Rockets';

describe('Testing rocket component', () => {});
it('should render correctly Rockets component', () => {
  const tree = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
