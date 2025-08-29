import { ExperienceService } from '..'
import { vi, beforeEach, afterEach, describe, expect, it } from 'vitest'
import path from 'node:path'
import fs from 'node:fs/promises'
import { School } from '../../models'
import process from 'node:process';

vi.mock('node:path');
vi.mock('node:fs/promises');

const mockJsonFile = {
    foo: 'bar'
}

const MOCK_WORKING_DIRECTORY = 'some-directory';


describe('ExperienceService', () => {
    const mockPathJoin = vi.mocked(path.join);
    const mockReadFile = vi.mocked(fs.readFile);

    //Note: Using a spy here as mocking out the entire process, breaks a lot
    const processCurrentWorkingDirectiorySpy = vi.spyOn(process, 'cwd')

    beforeEach(() => {
        mockPathJoin.mockReturnValue('some-full-path');
        mockReadFile.mockResolvedValue(JSON.stringify(mockJsonFile));
        processCurrentWorkingDirectiorySpy.mockReturnValue(MOCK_WORKING_DIRECTORY);
    })

    afterEach(() => {
        vi.clearAllMocks();
    })

    describe('#fetchEducationData', () => {
        let response: School[];

        beforeEach(async () => {
            response = await ExperienceService.fetchEducationData();
        })

        it('should get the json file directory', () => {
            expect(mockPathJoin).toHaveBeenCalledTimes(1);
            expect(mockPathJoin).toHaveBeenNthCalledWith(1,MOCK_WORKING_DIRECTORY,'public','data')
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
            expect(mockPathJoin).toHaveBeenNthCalledWith(1,MOCK_WORKING_DIRECTORY,'public','data')
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
            expect(mockPathJoin).toHaveBeenNthCalledWith(1,MOCK_WORKING_DIRECTORY,'public','data')
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