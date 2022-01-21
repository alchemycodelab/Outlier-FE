import React from 'react';
import Layout from './Layout';
import { ProfileProvider } from '../../context/Profile/ProfileCtx';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { render } from '@testing-library/react';

it('should render the layout', () => {
  const { container } = render(
    <Router>
      <ProfileProvider>
        <Header />
        <Footer />
      </ProfileProvider>
    </Router>
  );

  expect(container).toMatchSnapshot();
});
