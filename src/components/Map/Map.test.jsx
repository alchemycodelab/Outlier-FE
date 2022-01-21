import React from 'react';
import { StateProvider } from '../../context/State/StateCtx';
import MapForm from '../../components/Forms/MapForm/MapForm';
import Map from './Map';
import { BrowserRouter as Router } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';

it('should render the map', () => {
  const { container } = render(
    <Router>
      <StateProvider>
        <Map />
      </StateProvider>
    </Router>
  );

  expect(container.textContent).toBe('');

  //   fireEvent.click(container('about'));

  //   expect(container.textContent.toBe('about'));

  //   const about = screen.getByText(/about/i);
  //   userEvent.click(about);

  //   expect(about).toBeInTheDocument();
  //   expect(container).toMatchSnapshot();
});
