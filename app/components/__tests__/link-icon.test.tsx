import LinkIcon from "../link-icon"
import { render, RenderResult, screen } from "@testing-library/react"
import { beforeEach, afterEach, describe, it, expect, beforeAll, afterAll } from 'vitest'
import React from "react";


describe('linkIcon', () => {

    let renderer: RenderResult;

    beforeAll(() => {
        renderer = render(<LinkIcon
                    linkUrl="http://google.com"
                    icon={<p>Hello!</p>}></LinkIcon>)
    })

    afterAll(() => {
        renderer.unmount();
    })

    describe('when a link is provided', () => {
        it('should render an icon wrapped in a link', () => {
            renderer.rerender(<LinkIcon
                    linkUrl="http://google.com"
                    icon={<p>Hello!</p>}></LinkIcon>)

            const iconLink = screen.queryByRole('link');

            expect(iconLink).not.toBeNull();
            expect(iconLink?.getAttribute('href')).toBe('http://google.com')
        })
    })

    describe('when a link is not provided', () => {
        it('should not render a link', () => {
            renderer.rerender(<LinkIcon
                        icon={<p data-testid='test-icon'>Hello!</p>} />)

            expect(screen.queryAllByRole('link').length).toBe(0)
        })

        it('should render the icon', () => {
            renderer.rerender(<LinkIcon
                        icon={<p data-testid='test-icon'>Hello!</p>} />)

            expect(screen.queryByTestId('test-icon')).not.toBeNull();
        })
    })
})