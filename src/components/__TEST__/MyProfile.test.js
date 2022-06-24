import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/index.js';
import Profile from '../pages/MyProfile';

describe('Testing mission component', () => {

  it('should render correctly Mission component', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });


  it('should render correctly My Mission', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(screen.getByRole('heading', {name: /My Mission/i})).toBeInTheDocument();
  });


  it('should render correctly My Rockets', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>
    );
    expect(screen.getByRole('heading', {name: /My Rockets/i})).toBeInTheDocument();
  });

});
