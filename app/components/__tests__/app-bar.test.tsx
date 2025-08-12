import AppBar from "../app-bar"
import { screen } from '@testing-library/react';
import * as TestUtils from "@/app/utils/test-utils";
import userEvent from '@testing-library/user-event'
import React from 'react'

describe('appBar', () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('when the appbar is closed', () => {
        beforeEach(() => {
            TestUtils.renderWithProviders(<AppBar />,{
                preloadedState: {
                    drawer: {
                        open: false
                    }
                }
            })
        })

        it('should render the toggle button', () => {
            const toggleButton = screen.queryByTestId('navbar-toggle');
    
            expect(toggleButton).not.toBeNull();
        })

        describe('when the open menu button is clicked', () => {
            it('should open the app bar', async () => {
                const user = userEvent.setup();
                const toggleButton = screen.queryByTestId('navbar-toggle');
    
                await user.click(toggleButton!!)
    
                const navLinks = screen.queryByTestId('nav-links');
                expect(navLinks?.classList).not.toContain('hidden')
                
            })
        })
    })

    describe('when the appbar is open', () => {

        beforeEach(() => {
            TestUtils.renderWithProviders(<AppBar />,{
                preloadedState: {
                    drawer: {
                        open: true
                    }
                }
            })
        })


        describe('when the overlay is clicked', () => {
            it('should close the appbar', async () => {
                const user = userEvent.setup();

                const navbarOverlay = screen.queryByTestId('navbar-overlay');
                

                await user.click(navbarOverlay!!);

                const navLinks = screen.queryByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            });
        })

        describe('when a link is clicked', () => {
            it('should close the appbar', async () => {
                const user = userEvent.setup();

                const navLink = screen.queryByTestId('nav-link');
                
                await user.click(navLink!!);

                const navLinks = screen.queryByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            })
        })

        describe('when the close button is clicked', () => {
            it('should close the appbar', async () => {
                const user = userEvent.setup();

                const closeButton = screen.queryByTestId('navbar-close-button');
                

                await user.click(closeButton!!);

                const navLinks = screen.queryByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            })
        })
    })
})