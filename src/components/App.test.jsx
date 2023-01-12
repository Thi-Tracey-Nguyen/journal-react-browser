import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { expect } from "vitest"
import App from "./App"

// declare a test suite
describe('App Component', () => {
    it('Shows the Journal Entries heading', () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Journal Entries')
        // expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Journal Entries')
    })

    it('Shows category selection page when Select Category is clicked', async () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )

        await userEvent.click(screen.getByText('Category'))
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Please select a category:')
    })
}) 