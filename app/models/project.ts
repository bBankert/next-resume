export interface Project {
    name: string,
    description: string
}


export interface PreviousProject extends Project {
    liveLink?: string,
    sourceLink: string
}

export interface ProjectsResponse {
    previousProjects?: PreviousProject[],
    upcomingProjects?: Project[]
}