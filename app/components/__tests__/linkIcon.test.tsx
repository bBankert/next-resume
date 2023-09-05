import LinkIcon from "../linkIcon"
import { render, screen } from "@testing-library/react"


describe('linkIcon', () => {
    describe('when a link is provided', () => {
        it('should render an icon wrapped in a link', () => {
            render(<LinkIcon
                    linkUrl="http://google.com"
                    icon={<p>Hello!</p>}></LinkIcon>)

            const iconLink = screen.queryByRole('link');

            expect(iconLink).toBeInTheDocument();
            expect(iconLink?.getAttribute('href')).toBe('http://google.com')
        })
    })

    describe('when a link is not provided', () => {
        beforeEach(() => {
            render(<LinkIcon
                        icon={<p data-testid='test-icon'>Hello!</p>} />)
        })

        it('should not render a link', () => {
            expect(screen.queryAllByRole('link').length).toBe(0)
        })

        it('should render the icon', () => {
            expect(screen.queryByTestId('test-icon')).toBeInTheDocument();
        })
    })
})