import ProfessionalExperiencePage, { generateMetadata } from "../page"
import { ExperienceService } from "@/app/services"
import * as TestDataFactory from '@/app/TestDataFactory';
import { render, screen } from "@testing-library/react";

jest.mock('../../../services')

const mockedExperienceService = ExperienceService as jest.Mocked<typeof ExperienceService>

const mockJobData = TestDataFactory.generateMockProfessionalExperience();

describe('generateMetadata', () => {
    it('should return page metadata based on the route params', async () => {
        const result = await generateMetadata({
            params: {
                company: 'some-company'
            },
            searchParams: {}
        })

        expect(result).toEqual({
            title: 'Some Company experience',
            description: 'Brandon Bankert\'s experience at Some Company'
        })
    })
})


describe('ProfessionalExperiencePage', () => {

    beforeEach(async () => {
        mockedExperienceService.fetchJobData.mockResolvedValue(mockJobData)

        //Note: Async rendering is not fully supported yet, this is a workaround
        //discussion: https://github.com/testing-library/react-testing-library/issues/1209
        render(await (async () => await ProfessionalExperiencePage({ 
            params: { 
                company: 'some-company'
            }, 
            searchParams: {
                foo: 'bar'
            } 
        }))())
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should fetch the job data',() => {
        expect(mockedExperienceService.fetchJobData).toHaveBeenCalledTimes(1);
        expect(mockedExperienceService.fetchJobData).toHaveBeenNthCalledWith(1,'some-company')
    })

    it('should render the formatted company name', () => {
        expect(screen.queryByRole('heading',{
            level: 1
        })?.textContent).toBe('Some Company')
    })
})