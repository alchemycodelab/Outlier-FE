import { render } from '@testing-library/react';
import React from 'react';
import Header from '../Layout/Header';
import { ProfileProvider } from '../../context/Profile/ProfileCtx';
import { BrowserRouter as Router } from 'react-router-dom';

it('should render the header component', () => {
  const { container } = render(
    <Router>
      <ProfileProvider>
        <Header />
      </ProfileProvider>
    </Router>
  );

  expect(container).toMatchSnapshot();
});
