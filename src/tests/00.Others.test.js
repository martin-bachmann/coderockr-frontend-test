import '@testing-library/jest-dom'
import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./helpers/renderWithRouter";
import App from "../App";

describe('testa outras funcionalidades do app', () => {
  test('testa a página Not Found', () => {
    const { history } = renderWithRouter(<App />)

    history.push('/notfoundrandompage');
    const text = screen.getByText(/Page not found/i)
    console.log(text)
    expect(text).toBeInTheDocument();
  });
});