import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { expect } from "vitest"
import App from "./App"

// declare a test suite
describe('App Component', () => {
    let container 
    
    beforeEach(function () {
         container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    it('Shows the Journal Entries heading', () => {
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Journal Entries')
        // expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Journal Entries')
    })

    it('Shows category selection page when Select Category is clicked', async () => {
        await userEvent.click(screen.getByText('Category'))
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent('Please select a category:')
    })
}) 