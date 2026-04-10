import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders primary consultation CTA', () => {
    render(<App />);
    expect(screen.getAllByText('Get A Free Consultation').length).toBeGreaterThan(0);
  });
});
