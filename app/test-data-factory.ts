import { PreviousProject, ProfessionalExperience, Project, ProjectsResponse, School } from "./models"
import { ICON_CONSTANTS } from './utils/constants'

export const generateMockEducationData = (overrides: Partial<School> = {}): School => {
    const {
        name,
        gpa,
        degree,
        relevantCourses
    } = overrides

    return {
        name: name ?? 'some uni',
        gpa: gpa ?? '1.0',
        degree: degree ?? 'some degree',
        relevantCourses: relevantCourses ?? [
            {
                title: 'some course'
            }
        ]
    }
}


export const generateMockProfessionalExperience = (options: Partial<ProfessionalExperience> & { company?: string  } = {}): ProfessionalExperience & { company: string  } => {
    const {
        company,
        title,
        details,
        technologies
    } = options

    return {
        company: company ?? 'some company',
        title: title ?? 'some title',
        details: details ?? [
            'detail 1',
            'detail 2',
            'detail 3',
        ],
        technologies: technologies ?? [
            {
                name: ICON_CONSTANTS.angular,
                link: 'http://test.com'
            },
            {
                name: ICON_CONSTANTS.aws,
                link: 'http://test2.com'
            }
        ]
    }
}

export const generateMockPreviousProject = (options: Partial<PreviousProject> = {}): PreviousProject => {
    const {
        name,
        description,
        liveLink,
        sourceLink
    } = options

    return {
        name: name ?? 'some previous project',
        description: description ?? 'some previous description',
        liveLink: liveLink ?? 'http://live-link.com',
        sourceLink: sourceLink ?? 'http://source-link.com'

    }
}

export const generateMockUpcomingProject = (options: Partial<Project> = {}): Project => {
    const {
        name,
        description,
    } = options

    return {
        name: name ?? 'some upcoming project',
        description: description ?? 'some upcoming project description'
    }
}

export const generateMockProjectResponseData = (options: Partial<ProjectsResponse> = {}): ProjectsResponse => {
    const {
        previousProjects,
        upcomingProjects
    } = options

    return {
        upcomingProjects: upcomingProjects ?? [
            generateMockUpcomingProject()
        ],
        previousProjects: previousProjects ?? [
            generateMockPreviousProject()
        ]
    }
}

// export const generateResolvedMetadata = (options = {}): Metadata => {
//     return {
//         metadataBase: null,
//         title: null,
//         description: null,
//         applicationName: null,
//         authors: null,
//         generator: null,
//         keywords: null,
//         referrer: null,
//         themeColor: null,
//         colorScheme: null,
//         viewport: null,
//         creator: null,
//         publisher: null,
//         robots: null,
//         alternates: null,
//         icons: null,
//         openGraph: null,
//         manifest: null,
//         twitter: null,
//         verification: null,
//         appleWebApp: null,
//         formatDetection: null,
//         itunes: null,
//         abstract: null,
//         appLinks: null,
//         archives: null,
//         assets: null,
//         bookmarks: null,
//         category: null,
//         classification: null,
//         other: null
//     }
// }