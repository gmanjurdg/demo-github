import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('disabled button has gray background and reverts to red', () => {
  render(<App />);
  const colorButton= screen.getByRole('button', {name: 'change to red'});

  const checkbox= screen.getByRole('checkbox', {name: 'disable button'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');  

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red'); 

});
  test('clicked disabled button has gray background and reverts to blue', ()=>{
  render(<App />);
  const colorButton= screen.getByRole('button', {name: 'change to blue'});
  const checkbox= screen.getByRole('checkbox', {name: 'disable button'});

  fireEvent.click(checkbox);   //changing button blue

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle('background-color: gray');

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle('background-color: blue');
});
  // fireEvent.click(colorButton)
  // expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

