import AppBar from "../app-bar"
import { fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import { renderWithProviders } from "../../utils/test-utils";
import React from 'react'

describe('appBar', () => {
    describe('when the appbar is closed', () => {
        it('should render the toggle button', () => {
            renderWithProviders(<AppBar />,{
                preloadedState: {
                    drawer: {
                        open: false
                    }
                }
            })

            const toggleButton = screen.queryByTestId('navbar-toggle');
    
            expect(toggleButton).not.toBeNull();
        })

        describe('when the open menu button is clicked', () => {
            it('should open the app bar', () => {
                renderWithProviders(<AppBar />,{
                    preloadedState: {
                        drawer: {
                            open: false
                        }
                    }
                })

                const toggleButton = screen.getByTestId('navbar-toggle');
    
                fireEvent.click(toggleButton)
    
                const navLinks = screen.queryByTestId('nav-links');
                expect(navLinks?.classList).not.toContain('hidden')
                
            })
        })
    })

    describe('when the appbar is open', () => {
        describe('when the overlay is clicked', () => {
            it('should close the appbar', () => {
                renderWithProviders(<AppBar />,{
                    preloadedState: {
                        drawer: {
                            open: true
                        }
                    }
                })

                const navbarOverlay = screen.getByTestId('navbar-overlay');
                

                fireEvent.click(navbarOverlay);

                const navLinks = screen.getByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            });
        })

        describe('when a link is clicked', () => {
            it('should close the appbar', () => {
                renderWithProviders(<AppBar />,{
                    preloadedState: {
                        drawer: {
                            open: true
                        }
                    }
                })

                const navLink = screen.getByTestId('nav-link');
                
                fireEvent.click(navLink);

                const navLinks = screen.queryByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            })
        })

        describe('when the close button is clicked', () => {
            it('should close the appbar', () => {
                renderWithProviders(<AppBar />,{
                    preloadedState: {
                        drawer: {
                            open: true
                        }
                    }
                })

                const closeButton = screen.getByTestId('navbar-close-button');
                

                fireEvent.click(closeButton);

                const navLinks = screen.getByTestId('nav-links');

                expect(navLinks?.classList).toContain('hidden')
            })
        })
    })
})