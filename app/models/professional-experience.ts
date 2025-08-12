import { TechnologyNames } from "../utils/constants"

export interface Technology {
    name: TechnologyNames,
    link: string
}

export interface ProfessionalExperience {
    title: string,
    details: string[],
    technologies: Technology[]
}