import ProjectsPage from "../page"
import { RenderResult, render, screen } from "@testing-library/react"
import { ExperienceService } from '../../services';
import * as TestDataFactory from '@/app/TestDataFactory';

const mockProjectData = TestDataFactory.generateMockProjectResponseData();
jest.mock('../../services')

const mockedExperienceService = ExperienceService as jest.Mocked<typeof ExperienceService>

let renderApi: RenderResult;
describe('ProjectsPage', () => {
    
    beforeEach(async () => {
        mockedExperienceService.fetchProjectData.mockResolvedValue(mockProjectData);

        //Note: Async rendering is not fully supported yet, this is a workaround
        //discussion: https://github.com/testing-library/react-testing-library/issues/1209
        renderApi = render(await (async () => await ProjectsPage())())
    })

    it('should fetch the project data', () => {
        expect(mockedExperienceService.fetchProjectData).toHaveBeenCalledTimes(1);
    })

    it('should render the project data', () => {
        expect(screen.queryByText('some upcoming project')).toBeInTheDocument();
        expect(screen.queryByText('some previous project')).toBeInTheDocument();
    })

    describe('when the prior projects do not have a live link', () => {
        const mockProjectDataWithoutLiveLink = {
            ...mockProjectData,
            previousProjects: [
                {
                    ...mockProjectData.previousProjects[0],
                    liveLink: null
                }
            ]
        }

        beforeEach(async () => {

            mockedExperienceService.fetchProjectData.mockResolvedValue(mockProjectDataWithoutLiveLink);

            //Note: Async rendering is not fully supported yet, this is a workaround
            //discussion: https://github.com/testing-library/react-testing-library/issues/1209
            renderApi.rerender(await (async () => await ProjectsPage())())
        })

        it('should not render the live link', () => {
            expect(screen.queryByText('Live Link')).not.toBeInTheDocument();
        })
    })

    describe('when there are no upcoming projects', () => {
        const mockProjectDataWithoutUpcomingProjects = {
            ...mockProjectData,
            upcomingProjects: []
        }

        beforeEach(async () => {

            mockedExperienceService.fetchProjectData.mockResolvedValue(mockProjectDataWithoutUpcomingProjects);

            //Note: Async rendering is not fully supported yet, this is a workaround
            //discussion: https://github.com/testing-library/react-testing-library/issues/1209
            renderApi.rerender(await (async () => await ProjectsPage())())
        })

        it('should render the "upcoming projects" default card', () => {
            expect(screen.queryAllByRole('heading',{
                level: 3
            })[1]?.textContent).toEqual('???')
        })
    })
})