import EducationPage from "../page"
import { render, RenderResult, screen } from "@testing-library/react"
import { vi, beforeEach, afterEach, describe, it, expect } from 'vitest'
import { ExperienceService } from '../../services';
import { generateMockEducationData } from '../../test-data-factory';

vi.mock('../../services')

describe('EducationPage', () => {
    const mockedEducationData = generateMockEducationData()
    const mockEducationDataResponse = [mockedEducationData];

    const mockedExperienceService = vi.mocked(ExperienceService);

    let renderer: RenderResult;


    beforeEach(async () => {

        mockedExperienceService.fetchEducationData.mockResolvedValue(mockEducationDataResponse)
        
        renderer = render(await EducationPage());
    })

    afterEach(() =>{
        vi.clearAllMocks();
        renderer.unmount();

    })

    it('should fetch the education data', () => {
        expect(mockedExperienceService.fetchEducationData).toHaveBeenCalledTimes(1);
    })

    it('should render the education secions', () => {
        expect(screen.queryByText(`${mockedEducationData.degree} - GPA: ${mockedEducationData.gpa}`)).not.toBeNull();
    })
})