import '@testing-library/jest-dom'
import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./helpers/renderWithRouter";
import App from "../App";
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { mockGetPosts } from './mocks/mockGetPosts';

describe('testa a página inicial', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })

  test('testa se os posts aparecem na página', async () => {
    mockAllIsIntersecting(false);
    jest.spyOn(global, 'fetch');
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockGetPosts),
    }));

    renderWithRouter(<App />)

    expect(await screen.findByText(/Rockr Blog/i)).toBeInTheDocument();

    expect(await screen.findByText(/Sheila C. Boyd/i)).toBeInTheDocument();
  });
});
