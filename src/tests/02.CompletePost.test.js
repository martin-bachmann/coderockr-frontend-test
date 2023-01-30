import '@testing-library/jest-dom'
import React from "react";
import { screen } from "@testing-library/react";
import renderWithRouter from "./helpers/renderWithRouter";
import App from "../App";
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { mockGetPosts } from './mocks/mockGetPosts';
import userEvent from '@testing-library/user-event';

describe('testa a página de post completo', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })

  test('testa se ao clicar no botão do post abre a página com o post completo', async () => {
    mockAllIsIntersecting(false);
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockGetPosts),
    });
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockGetPosts[0]),
    });

    renderWithRouter(<App />)

    expect(await screen.findByText(/Sheila C. Boyd/i)).toBeInTheDocument();

    userEvent.click(screen.getAllByTestId('arrow-button')[0]);

    expect(await screen.findByText(/Apr 17 2022/i)).toBeInTheDocument();
  });
});
