import { 
    ProfessionalExperience, 
    ProjectsResponse, 
    School 
} from "../models"

import path from 'path';
import { promises as fs } from 'fs'
import process from 'process'

export const fetchEducationData = async (): Promise<Array<School>> => {
    try{
        const directory = path.join(process.cwd(),'public','data')
        return JSON.parse(await fs.readFile(`${directory}/education.json`,'utf-8'));
    }
    catch(exception: any){
        //actual logging would go here...
        console.log('Exception!',exception);
        throw new Error('Exception reading education json file')
    }
}


export const fetchProjectData = async (): Promise<ProjectsResponse> => {
    try{
        const directory = path.join(process.cwd(),'public','data')
        return JSON.parse(await fs.readFile(`${directory}/projects.json`,'utf-8'));
    }
    catch(exception){
        //actual logging would go here...
        console.log('Exception!',exception);
        throw new Error('Exception reading project json file')
    }
}

export const fetchJobData = async (company: string): Promise<ProfessionalExperience> => {
    try{
        const directory = path.join(process.cwd(),'public','data')
        return JSON.parse(await fs.readFile(`${directory}/${company}.json`,'utf-8'));
    }
    catch(exception){
        //actual logging would go here...
        console.log('Exception!',exception);
        throw new Error(`Exception reading ${company} json file`)
    }
}