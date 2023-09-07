import { ExperienceService } from '..'
import path from 'path'
import { promises as fsPromises  } from 'fs'

jest.mock('path')
jest.mock('fs', () => ({
    promises: {
        readFile: jest.fn()
    }
}))

jest.mock('process', () => ({
    cwd: () => 'some-directory'
}))

const mockJsonFile = {
    foo: 'bar'
}

const mockPathJoin = path.join as jest.MockedFunction<typeof path.join>
const mockReadFile = fsPromises.readFile as jest.MockedFunction<typeof fsPromises.readFile>

describe('ExperienceService', () => {

    beforeEach(() => {
        mockPathJoin.mockReturnValue('some-full-path')
        mockReadFile.mockResolvedValue(JSON.stringify(mockJsonFile))
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    describe('#fetchEducationData', () => {
        let response: any;

        beforeEach(async () => {
            response = await ExperienceService.fetchEducationData();
        })

        it('should get the json file directory', () => {
            expect(mockPathJoin).toHaveBeenCalledTimes(1);
            expect(mockPathJoin).toHaveBeenNthCalledWith(1,'some-directory','public','data')
        })

        it('should read the json file', () => {
            expect(mockReadFile).toHaveBeenCalledTimes(1);
            expect(mockReadFile).toHaveBeenNthCalledWith(1,'some-full-path/education.json','utf-8')
        })

        it('should return the parsed json', () => {
            expect(response).toEqual(mockJsonFile)
        })
        

        describe('when the file reading fails', () => {
            beforeEach(() => {
                mockPathJoin.mockImplementation(() => {
                    throw new Error('test error')
                })
            })

            it('should throw an error', async () => {
                const result = await ExperienceService.fetchEducationData().catch(e => e);

                expect(result).toEqual(new Error('Exception reading education json file'))
            });
        })
    })

    describe('#fetchProjectData', () => {
        let response: any;

        beforeEach(async () => {
            response = await ExperienceService.fetchProjectData();
        })

        it('should get the json file directory', () => {
            expect(mockPathJoin).toHaveBeenCalledTimes(1);
            expect(mockPathJoin).toHaveBeenNthCalledWith(1,'some-directory','public','data')
        })

        it('should read the json file', () => {
            expect(mockReadFile).toHaveBeenCalledTimes(1);
            expect(mockReadFile).toHaveBeenNthCalledWith(1,'some-full-path/projects.json','utf-8')
        })

        it('should return the parsed json', () => {
            expect(response).toEqual(mockJsonFile)
        })
        

        describe('when the request fails', () => {
            beforeEach(() => {
                mockPathJoin.mockImplementation(() => {
                    throw new Error('test error')
                })
            })

            it('should throw an error', async () => {
                const result = await ExperienceService.fetchProjectData().catch(e => e);

                expect(result).toEqual(new Error('Exception reading project json file'))
            });
        })
    })

    describe('#fetchJobData', () => {
        let response: any;

        beforeEach(async () => {
            response = await ExperienceService.fetchJobData('some-company');
        })

        it('should get the json file directory', () => {
            expect(mockPathJoin).toHaveBeenCalledTimes(1);
            expect(mockPathJoin).toHaveBeenNthCalledWith(1,'some-directory','public','data')
        })

        it('should read the json file', () => {
            expect(mockReadFile).toHaveBeenCalledTimes(1);
            expect(mockReadFile).toHaveBeenNthCalledWith(1,'some-full-path/some-company.json','utf-8')
        })

        it('should return the parsed json', () => {
            expect(response).toEqual(mockJsonFile)
        })
        

        describe('when the file reading fails', () => {
            beforeEach(() => {
                mockPathJoin.mockImplementation(() => {
                    throw new Error('test error')
                })
            })

            it('should throw an error', async () => {
                const result = await ExperienceService.fetchJobData('some-company').catch(e => e);

                expect(result).toEqual(new Error('Exception reading some-company json file'))
            });
        })
    })
})