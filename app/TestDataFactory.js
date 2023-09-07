export const generateMockEducationData = (options = {}) => {
    const {
        name,
        gpa,
        degree,
        relevantCourses
    } = options

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


export const generateMockProfessionalExperience = (options = {}) => {
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
                name: 'tech 1',
                link: 'http://test.com'
            },
            {
                name: 'test 2',
                link: 'http://test2.com'
            }
        ]
    }
}

export const generateMockPreviousProject = (options = {}) => {
    const {
        name,
        descripton,
        liveLink,
        sourceLink
    } = options

    return {
        name: name ?? 'some previous project',
        descripton: descripton ?? 'some previous description',
        liveLink: liveLink ?? 'http://live-link.com',
        sourceLink: sourceLink ?? 'http://source-link.com'

    }
}

export const generateMockUpcomingProject = (options = {}) => {
    const {
        name,
        descripton,
    } = options

    return {
        name: name ?? 'some upcoming project',
        descripton: descripton ?? 'some upcoming project description'
    }
}

export const generateMockProjectResponseData = (options = {}) => {
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

export const generateResolvedMetadata = (options = {}) => {

    return {
        metadataBase: null,
        title: null,
        description: null,
        applicationName: null,
        authors: null,
        generator: null,
        keywords: null,
        referrer: null,
        themeColor: null,
        colorScheme: null,
        viewport: null,
        creator: null,
        publisher: null,
        robots: null,
        alternates: null,
        icons: null,
        openGraph: null,
        manifest: null,
        twitter: null,
        verification: null,
        appleWebApp: null,
        formatDetection: null,
        itunes: null,
        abstract: null,
        appLinks: null,
        archives: null,
        assets: null,
        bookmarks: null,
        category: null,
        classification: null,
        other: null
    }
}