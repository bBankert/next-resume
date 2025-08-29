import ProfessionalExperiencePage, { generateMetadata } from "../page"
import { vi, beforeEach, it, describe, afterEach, expect } from 'vitest'
import { ExperienceService } from "../../../services"
import { generateMockProfessionalExperience } from '../../../test-data-factory';
import { render, RenderResult, screen } from "@testing-library/react";
import { ResolvingMetadata } from "next";

vi.mock('../../../services')

const mockJobData = generateMockProfessionalExperience();


describe('ProfessionalExperiencePage', () => {
    //TODO - Ideally, lets only render once if we need to
    let wrapper: RenderResult;

    const mockedExperienceService = vi.mocked(ExperienceService);

    const formattedCompanyName = `${mockJobData.company.charAt(0).toUpperCase()}${mockJobData.company.slice(1)}`;

    beforeEach(async () => {
        mockedExperienceService.fetchJobData.mockResolvedValue(mockJobData)

        //TODO - Remove type any
        wrapper = render(await ProfessionalExperiencePage(({ 
            params: { 
                company: mockJobData.company
            }, 
            searchParams: {
                foo: 'bar'
            } 
        } as any)))
    })

    afterEach(() => {
        vi.clearAllMocks();
        wrapper.unmount();
    })

    it('should fetch the job data',() => {
        expect(mockedExperienceService.fetchJobData).toHaveBeenCalledTimes(1);
        expect(mockedExperienceService.fetchJobData).toHaveBeenNthCalledWith(1,mockJobData.company)
    })

    it('should render the formatted company name', () => {
        expect(screen.queryByRole('heading',{
            level: 1
        })?.textContent).toBe(formattedCompanyName)
    })

    describe('generateMetadata', () => {
        it('should return page metadata based on the route params', async () => {
            const result = await generateMetadata({
                params: {
                    company: 'some company'
                }} as any,{} as ResolvingMetadata)

            expect(result).toEqual({
                title: `${formattedCompanyName} experience`,
                description: `Brandon Bankert's experience at ${formattedCompanyName}`
            })
        })
    })
})