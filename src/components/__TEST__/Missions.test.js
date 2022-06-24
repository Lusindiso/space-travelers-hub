import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionsList from '../pages/Missions';
import store from '../../redux/index';

describe('Testing mission component', () => {});
it('should render correctly Mission component', () => {
  const tree = render(
    <Provider store={store}>
      <MissionsList />
    </Provider>,

  );
  expect(tree).toMatchSnapshot();
});
