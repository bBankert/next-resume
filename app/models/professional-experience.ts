import { TechnologyValues } from "../utils/constants"

export interface Technology {
    name: TechnologyValues,
    link: string
}

export interface ProfessionalExperience {
    title: string,
    details: string[],
    technologies: Technology[]
}