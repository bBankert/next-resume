import ProjectsPage from "../page"
import { RenderResult, render, screen } from "@testing-library/react"
import { ExperienceService } from '../../services';
import { vi, beforeEach, afterEach, describe, it, expect } from 'vitest';
import { generateMockProjectResponseData } from "../../test-data-factory";

const mockProjectData = generateMockProjectResponseData();
vi.mock('../../services')

describe('ProjectsPage', () => {
    const mockedExperienceService = vi.mocked(ExperienceService);
    let renderer: RenderResult;
    
    beforeEach(async () => {
        mockedExperienceService.fetchProjectData.mockResolvedValue(mockProjectData);

        renderer = render(await ProjectsPage());
    })

    afterEach(() => {
        renderer.unmount();
    })

    it('should fetch the project data', () => {
        expect(mockedExperienceService.fetchProjectData).toHaveBeenCalledTimes(1);
    })

    it('should render the project data', () => {
        expect(screen.queryByText('some upcoming project')).not.toBeNull();
        expect(screen.queryByText('some previous project')).not.toBeNull();
    })

    describe('when the prior projects does not have a live link', () => {
        const mockProjectDataWithoutLiveLink = {
            ...mockProjectData,
            previousProjects: [
                {
                    ...(mockProjectData.previousProjects?.[0] ?? {
                        sourceLink: '',
                        name: '',
                        description: '',
                    }),
                    liveLink: undefined,
                }
            ]
        }

        beforeEach(async () => {

            mockedExperienceService.fetchProjectData.mockResolvedValue(mockProjectDataWithoutLiveLink);

            renderer.rerender(await ProjectsPage());
        })

        it('should not render the live link', () => {
            expect(screen.queryByText('Live Link')).toBeNull();
        })
    })

    describe('when there are no upcoming projects', () => {
        const mockProjectDataWithoutUpcomingProjects = {
            ...mockProjectData,
            upcomingProjects: []
        }

        beforeEach(async () => {

            mockedExperienceService.fetchProjectData.mockResolvedValue(mockProjectDataWithoutUpcomingProjects);

            renderer.rerender(await ProjectsPage());
        })

        it('should render the "upcoming projects" default card', () => {
            expect(screen.queryAllByRole('heading',{
                level: 3
            })[1]?.textContent).toEqual('???')
        })
    })
})