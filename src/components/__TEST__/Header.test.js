import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Testing navBar component', () => {});
it('should render correctly NavBar component', () => {
  const tree = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
