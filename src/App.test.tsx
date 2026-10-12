import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)
    // Ищем конкретно h1 с нужным текстом
    expect(
      screen.getByRole('heading', { level: 1, name: /Hello Pages/i })
    ).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    // Ищем заголовок секции — он уникален
    expect(
      screen.getByRole('heading', { level: 2, name: /О проекте/i })
    ).toBeInTheDocument()
    // А упоминание GitHub Pages — просто проверяем, что есть хоть одно
    expect(screen.getAllByText(/GitHub Pages/i).length).toBeGreaterThan(0)
  })

  it('renders the projects list', () => {
    render(<App />)
    expect(screen.getByText(/Go CLI/i)).toBeInTheDocument()
    expect(screen.getByText(/Go GUI/i)).toBeInTheDocument()
  })
})
