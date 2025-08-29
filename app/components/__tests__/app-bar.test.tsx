import AppBar from "../app-bar"
import { fireEvent, RenderResult, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest'
import { renderWithProviders } from "../../utils/test-utils";
import React from 'react'
import { drawerSlice } from '../../../libs'

describe('appBar', () => {

    let renderer: RenderResult;

    //using spies as there is some jankiness, where rendering with providers multiple times
    //causes it to duplicate the entire DOM...
    const selectOpenSpy = vi.spyOn(drawerSlice.selectors, 'selectOpen');

    beforeAll(() => {
        renderer = renderWithProviders(<AppBar />, {
            preloadedState: {
                drawer: {
                    open: false
                }
            }
        })
    })

    beforeEach(() => {
        selectOpenSpy.mockReturnValue(false);
    })

    describe('when the appbar is closed', () => {
        it('should render the toggle button', () => {
            renderer.rerender(<AppBar />)

            const toggleButton = screen.queryByTestId('navbar-toggle');

            expect(toggleButton).not.toBeNull();
        })

        describe('when the open menu button is clicked', () => {
            it('should open the app bar', () => {
                renderer.rerender(<AppBar />)

                const toggleButton = screen.getByTestId('navbar-toggle');

                fireEvent.click(toggleButton)

                const navLinks = screen.queryByTestId('nav-links');
                expect(navLinks?.classList).not.toContain('hidden')

            })
        })
    })

    describe('when the appbar is open', () => {

        beforeEach(() => {
            selectOpenSpy.mockReturnValue(true);
        })

        describe('when the overlay is clicked', () => {
            it('should close the appbar', () => {
                renderer.rerender(<AppBar />)

                const navbarOverlay = screen.getByTestId('navbar-overlay');


                fireEvent.click(navbarOverlay);

                const navLinks = screen.getByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            });
        })

        describe('when a link is clicked', () => {
            it('should close the appbar', () => {
                renderer.rerender(<AppBar />)

                const navLink = screen.getByTestId('nav-link');

                fireEvent.click(navLink);

                const hiddenLinkSection = screen.getByTestId('nav-links')

                expect(hiddenLinkSection?.classList).toContain('hidden')
            })
        })

        describe('when the close button is clicked', () => {
            it('should close the appbar', () => {
                renderer.rerender(<AppBar />)

                const closeButton = screen.getByTestId('navbar-close-button');

                fireEvent.click(closeButton);

                const navLinks = screen.getByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            })
        })
    })
})