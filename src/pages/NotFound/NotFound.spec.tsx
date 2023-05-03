import { render, screen } from '@testing-library/react';
import { NotFound } from '.';

test('Should be able to renders the Not Found page', () => {
  render(<NotFound />);
  const textPageNotFound = screen.getByText(/Oops... parece que esta página não existe!/i);
  expect(textPageNotFound).toBeInTheDocument();
});
