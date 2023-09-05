export interface RelevantCourse {
    title: string
}

export interface School {
    name: string,
    gpa: string,
    degree: string,
    relevantCourses: RelevantCourse[]
}