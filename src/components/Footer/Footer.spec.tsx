import { render, screen } from '@testing-library/react';
import { Footer } from '.';


test('Should be able to renders the Footer', () => {
  render(<Footer />);
  
  const textFooter = screen.getByTestId("text-footer");
  const subtextFooter = screen.getByTestId("subtext-footer");
  const visit = screen.getByTestId("visit");

  expect(textFooter).toHaveTextContent(/Teste inLog/);
  expect(subtextFooter).toHaveTextContent(/Desenvolvido por: Wilber Alves de Lima!/);
  expect(visit).toHaveTextContent(/Visite meu LinkedIn/);
});
