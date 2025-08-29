import { render, RenderResult, screen } from "@testing-library/react"
import Card from "../card"
import { beforeEach, afterEach, describe, it, expect } from 'vitest'
import React from "react";

describe('Card', () => {
    describe('when there is a center title', () => {
        let testRenderer: RenderResult;

        beforeEach(() => {
            testRenderer = render(<Card 
                    useCenterTitle={true}
                    centerTitle="some title" />)
        })

        afterEach(() => {
            testRenderer.unmount();
        })

        it('should only render a center title', () => {
            expect(screen.getByText('some title')).not.toBeNull();
        })

        it('should only render the text as a header level 1', () => {
            const centerText = screen.getByRole('heading',{
                //equivalent to h1
                level: 1
            });
            expect(centerText.textContent).toBe('some title')
        })  
    })

    describe('the left header title', () => {
        let testRenderer: RenderResult;

        describe('when there is a left header level', () => {
            beforeEach(() => {
                testRenderer = render(<Card 
                        leftTitle="some title"
                        leftTitleHeaderLevel={2} />)
            })

            //TODO - Figure out why the unmount is needed, for some reason cleanup is not happening
            afterEach(() => {
                testRenderer.unmount();
            })
    
            it('should render the left header title', () => {
                expect(screen.queryByText('some title')).not.toBeNull();
            })
    
            it('should render the text as the corresponding header level', () => {
                const leftTitle = screen.getByRole('heading',{
                    level: 2
                });
                expect(leftTitle?.textContent).toBe('some title')
            })  
        })

        describe('when there is no left title header level', () => {

            let testRenderer: RenderResult;

            beforeEach(() => {
                testRenderer = render(<Card 
                        leftTitle="some title" />)
            })

            afterEach(() => {
                testRenderer.unmount();
            })
    
            it('should render the left header title', () => {
                expect(screen.queryByText('some title')).not.toBeNull();
            })
    
            it('should default the text as a header level 3', () => {
                const leftTitle = screen.getByRole('heading',{
                    level: 3
                });
                expect(leftTitle?.textContent).toBe('some title')
            })  
        })
    })

    describe('the right header level', () => {
        describe('when the right title is not provided', () => {
            describe('when the right header level is provided', () => {
                let testRenderer: RenderResult;

                beforeEach(() => {
                    testRenderer = render(<Card
                            rightTitleHeaderLevel={2} />)
                })

                afterEach(() => {
                    testRenderer.unmount();
                })

                it('should not render the right header', () => {
                    expect(screen.queryAllByText('some text').length).toBe(0);
                })
            })

            describe('when the right header level is not provided', () => {
                let testRenderer: RenderResult;

                beforeEach(() => {
                    testRenderer = render(<Card />)
                })

                afterEach(() => {
                    testRenderer.unmount();
                })


                it('should not render the right header', () => {
                    expect(screen.queryAllByText('some text').length).toBe(0);
                })
            })
        })

        describe('when the right title header level is not provided', () => {
            describe('when the right title is provided', () => {
                let testRenderer: RenderResult;
                
                beforeEach(() => {
                    testRenderer = render(<Card
                            rightTitle="some text" />)
                })

                afterEach(() => {
                    testRenderer.unmount();
                })


                it('should not render the right header', () => {
                    expect(screen.queryAllByText('some text').length).toBe(0);
                })
            })

            describe('when the right title is not provided', () => {
                beforeEach(() => {
                    render(<Card />)
                })


                it('should not render the right header', () => {
                    expect(screen.queryAllByText('some text').length).toBe(0);
                })
            })
        })

        describe('when both the right title and header level are provided', () => {

            let testRenderer: RenderResult;

            beforeEach(() => {
                testRenderer = render(<Card
                        rightTitle="some text"
                        rightTitleHeaderLevel={2} />)
            })

            afterEach(() => {
                testRenderer.unmount();
            })

            it('should only render a center title', () => {
                expect(screen.getByText('some text')).not.toBeNull();
            })
    
            it('should only render the text as a header level 2', () => {
                const rightText = screen.getByRole('heading',{
                    level: 2
                });
                expect(rightText?.textContent).toBe('some text')
            })  
        })

    })

    describe('the children', () => {
        describe('when children props are passed', () => {
            it('should render the children', () => {
                const tempRenderer = render(<Card>
                    <p data-testid='test-id'>test text</p>
                </Card>)

                expect(screen.getByTestId('test-id')).not.toBeNull();
                tempRenderer.unmount();
            })
        })

        describe('when children are not passed', () => {
            it('should not render the children', () => {
                const tempRenderer = render(<Card />)

                expect(screen.queryByTestId('card-content')).toBeNull();
                tempRenderer.unmount();
            })
        })
    })
})