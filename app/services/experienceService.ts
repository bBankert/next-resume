import { 
    ProfessionalExperience, 
    ProjectsResponse, 
    School 
} from "../models"


export const fetchEducationData = async (): Promise<Array<School>> => {
    const response = await fetch(`${process.env.JSON_BASE_URL}/data/education.json`, { cache: process.env.IS_LOCAL ? 'no-cache' : 'default'})

    if(!response.ok){
        throw new Error(`Error fetching education data statusCode: ${response.status}, status: ${response.statusText}`)
    }

    return await response.json()
}


export const fetchProjectData = async (): Promise<ProjectsResponse> => {
    const response = await fetch(`${process.env.JSON_BASE_URL}/data/projects.json`, { cache: process.env.IS_LOCAL ? 'no-cache' : 'default'})

    if(!response.ok){
        throw new Error(`Error fetching project data statusCode: ${response.status}, status: ${response.statusText}`)
    }

    return await response.json()
}


export const fetchJobData = async (company: string): Promise<ProfessionalExperience> => {
    const response = await fetch(`${process.env.JSON_BASE_URL}/data/${company}.json`, { cache: process.env.IS_LOCAL ? 'no-cache' : 'default'})

    if(!response.ok){
        throw new Error(`Error fetching job data statusCode: ${response.status}, status: ${response.statusText}`)
    }

    return await response.json()
}