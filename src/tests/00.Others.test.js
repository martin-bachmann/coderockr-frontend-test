import '@testing-library/jest-dom'
import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./helpers/renderWithRouter";
import App from "../App";
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

describe('testa outras funcionalidades do app', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })

  test('testa a página Not Found', async () => {
    mockAllIsIntersecting(true);

    const { history } = renderWithRouter(<App />)

    history.push('/notfoundrandompage');
    const text = await screen.findByText(/Page not found/i)
    expect(text).toBeInTheDocument();
  });
});