import { render, screen } from "@testing-library/react"
import Card from "../card"
import React from "react";
import '@testing-library/jest-dom'

describe('Card', () => {
    describe('when there is a center title', () => {
        beforeEach(() => {
            render(<Card 
                    useCenterTitle={true}
                    centerTitle="some title" />)
        })

        it('should only render a center title', () => {
            const centerText = screen.queryByText('some title');
            expect(centerText).toBeInTheDocument();
        })

        it('should only render the text as a header level 1', () => {
            const centerText = screen.queryByRole('heading',{
                //equivalent to h1
                level: 1
            });
            expect(centerText).toBeInTheDocument();
            expect(centerText?.textContent).toBe('some title')
        })  
    })

    describe('the left header title', () => {

        describe('when there is a left header level', () => {
            beforeEach(() => {
                render(<Card 
                        leftTitle="some title"
                        leftTitleHeaderLevel={2} />)
            })
    
            it('should render the left header title', () => {
                const leftTitle = screen.queryByText('some title');
                expect(leftTitle).toBeInTheDocument();
            })
    
            it('should render the text as the corresponding header level', () => {
                const leftTitle = screen.queryByRole('heading',{
                    level: 2
                });
                expect(leftTitle).toBeInTheDocument();
                expect(leftTitle?.textContent).toBe('some title')
            })  
        })

        describe('when there is no left title header level', () => {
            beforeEach(() => {
                render(<Card 
                        leftTitle="some title" />)
            })
    
            it('should render the left header title', () => {
                const leftTitle = screen.queryByText('some title');
                expect(leftTitle).toBeInTheDocument();
            })
    
            it('should default the text as a header level 3', () => {
                const leftTitle = screen.queryByRole('heading',{
                    level: 3
                });
                expect(leftTitle).toBeInTheDocument();
                expect(leftTitle?.textContent).toBe('some title')
            })  
        })
    })

    describe('the right header level', () => {
        describe('when the right title is not provided', () => {
            describe('when the right header level is provided', () => {
                beforeEach(() => {
                    render(<Card
                            rightTitleHeaderLevel={2} />)
                })


                it('should not render the right header', () => {
                    expect(screen.queryAllByText('some text').length).toBe(0);
                })
            })

            describe('when the right header level is not provided', () => {
                beforeEach(() => {
                    render(<Card />)
                })


                it('should not render the right header', () => {
                    expect(screen.queryAllByText('some text').length).toBe(0);
                })
            })
        })

        describe('when the right title header level is not provided', () => {
            describe('when the right title is provided', () => {
                beforeEach(() => {
                    render(<Card
                            rightTitle="some text" />)
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
            beforeEach(() => {
                render(<Card
                        rightTitle="some text"
                        rightTitleHeaderLevel={2} />)
            })

            it('should only render a center title', () => {
                const rightText = screen.queryByText('some text');
                expect(rightText).toBeInTheDocument();
            })
    
            it('should only render the text as a header level 2', () => {
                const rightText = screen.queryByRole('heading',{
                    level: 2
                });
                expect(rightText).toBeInTheDocument();
                expect(rightText?.textContent).toBe('some text')
            })  
        })

    })

    describe('the children', () => {
        describe('when children props are passed', () => {
            it('should render the children', () => {
                render(<Card>
                    <p data-testid='test-id'>test text</p>
                </Card>)

                expect(screen.queryByTestId('test-id')).toBeInTheDocument();
            })
        })

        describe('when children are not passed', () => {
            it('should not render the children', () => {
                render(<Card></Card>)

                expect(screen.queryByTestId('card-content')).not.toBeInTheDocument();
            })
        })
    })
})