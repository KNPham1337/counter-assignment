// import necessary react testing library helpers here 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

// import the Counter component here 
import Counter from "../components/Counter";

/* @Brief Runs functionality before each test call 
  The beforeEach function is used to run code before every instance of test is called. 
  This kind of function allows us to render the counter componenent for it to be tested. 
*/

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above 
  const countMessage = screen.getByText(/Count/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above 
  const count = screen.getByText('0');
  expect(count).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  // const user = userEvent.setup(); 
  userEvent.click(screen.getByText('+')); const updatedCount = screen.getByText('1'); expect(updatedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above 
  userEvent.click(screen.getByText('-'));
  const updatedCount = screen.getByText('-1');
  expect(updatedCount).toBeInTheDocument();
});