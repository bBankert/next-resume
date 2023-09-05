import { ExperienceService } from '..'

const mockFetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
        value: 'test'
    })
}))

describe('ExperienceService', () => {

    let originalFetch = global.fetch;

    beforeEach(() => {
        global.fetch = mockFetch

        mockFetch.mockImplementation(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                value: 'test'
            })
        }))
    })

    afterEach(() => {
        global.fetch = originalFetch
        jest.clearAllMocks();
    })

    describe('#fetchEducationData', () => {
        it('should fetch the education data', async () => {
            await ExperienceService.fetchEducationData();

            expect(mockFetch).toHaveBeenCalledTimes(1);
            expect(mockFetch).toHaveBeenNthCalledWith(1,'some-base-url/data/education.json',{cache: 'default'})
        })

        it('should return the json response', async () => {
            const result = await ExperienceService.fetchEducationData();

            expect(result).toEqual({ value: 'test' })
        });

        describe('when the request fails', () => {
            beforeEach(() => {
                mockFetch.mockImplementation(() => Promise.resolve({
                    ok: false,
                    status: 301,
                    statusText: 'some bad status',
                }))
            })

            it('should throw an error', async () => {
                const result = await ExperienceService.fetchEducationData().catch(e => e);

                expect(result).toEqual(new Error('Error fetching education data statusCode: 301, status: some bad status'))
            });
        })
    })

    describe('#fetchProjectData', () => {
        it('should fetch the project data', async () => {
            await ExperienceService.fetchProjectData();

            expect(mockFetch).toHaveBeenCalledTimes(1);
            expect(mockFetch).toHaveBeenNthCalledWith(1,'some-base-url/data/projects.json',{cache: 'default'})
        })

        it('should return the json response', async () => {
            const result = await ExperienceService.fetchProjectData();

            expect(result).toEqual({ value: 'test' })
        });

        describe('when the request fails', () => {
            beforeEach(() => {
                mockFetch.mockImplementation(() => Promise.resolve({
                    ok: false,
                    status: 301,
                    statusText: 'some bad status',
                }))
            })

            it('should throw an error', async () => {
                const result = await ExperienceService.fetchProjectData().catch(e => e);

                expect(result).toEqual(new Error('Error fetching project data statusCode: 301, status: some bad status'))
            });
        })
    })

    describe('#fetchJobData', () => {
        it('should fetch the job data', async () => {
            await ExperienceService.fetchJobData('some-job');

            expect(mockFetch).toHaveBeenCalledTimes(1);
            expect(mockFetch).toHaveBeenNthCalledWith(1,'some-base-url/data/some-job.json',{cache: 'default'})
        })

        it('should return the json response', async () => {
            const result = await ExperienceService.fetchJobData('some-job');

            expect(result).toEqual({ value: 'test' })
        });

        describe('when the request fails', () => {
            beforeEach(() => {
                mockFetch.mockImplementation(() => Promise.resolve({
                    ok: false,
                    status: 301,
                    statusText: 'some bad status',
                }))
            })

            it('should throw an error', async () => {
                const result = await ExperienceService.fetchJobData('some-job').catch(e => e);

                expect(result).toEqual(new Error('Error fetching job data statusCode: 301, status: some bad status'))
            });
        })
    })
})