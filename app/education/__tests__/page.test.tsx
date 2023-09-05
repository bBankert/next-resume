import EducationPage from "../page"
import { render, screen } from "@testing-library/react"
import { ExperienceService } from '../../services';
import * as TestDataFactory from '@/app/TestDataFactory';

const mockedEducationData = TestDataFactory.generateMockEducationData()
const mockEducationDataResponse = [mockedEducationData];
jest.mock('../../services')

const mockedExperienceService = ExperienceService as jest.Mocked<typeof ExperienceService>

describe('EducationPage', () => {
    beforeEach(async () => {

        mockedExperienceService.fetchEducationData.mockResolvedValue(mockEducationDataResponse)

        //Note: Async rendering is not fully supported yet, this is a workaround
        //discussion: https://github.com/testing-library/react-testing-library/issues/1209
        render(await (async () => await EducationPage())())
    })

    afterEach(() =>{
        jest.clearAllMocks();
    })

    it('should fetch the education data', () => {
        expect(mockedExperienceService.fetchEducationData).toHaveBeenCalledTimes(1);
    })

    it('should render the education secions', () => {
        expect(screen.queryByText(`${mockedEducationData.degree} - GPA: ${mockedEducationData.gpa}`)).toBeInTheDocument();
    })
})