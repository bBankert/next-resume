export interface Technology {
    name: string,
    link: string
}

export interface ProfessionalExperience {
    title: string,
    details: string[],
    technologies: Technology[]
}