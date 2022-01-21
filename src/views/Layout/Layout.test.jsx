import React from 'react';
import Layout from './Layout';
import { ProfileProvider } from '../../context/Profile/ProfileCtx';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

it('should render the layout', () => {
  const { container } = render(
    <Router>
      <ProfileProvider>
        <Layout />
      </ProfileProvider>
    </Router>
  );

  expect(container).toMatchSnapshot();
});
