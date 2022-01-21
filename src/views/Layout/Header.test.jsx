import {render, screen} from '@testing-library/react';


it('should render a header', async () => {
    render(
<Router>
    <Header />
</Router>
    )

    const about = await screen.findByText('about');
    const instructions = await screen.findByText('instructions');
    const logout = await screen.findByText('logout');

    expect(about).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect('logout').toBeInTheDocument();

    userEvent.click(logout);

        expect(logout).not.toBeInTheDocument();
})