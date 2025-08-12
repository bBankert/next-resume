import Card from "../components/card"
import React from "react";
import { ExperienceService } from "../services";
import { School } from "../models";

const EducationPage = async () => {

    const schools = await ExperienceService.fetchEducationData();

    return (
        <>
            <Card
                useCenterTitle={true}
                centerTitle="Education"/>
                {schools.map(({ name, gpa, degree, relevantCourses}: School) => (
                    <Card
                        leftTitle={name}
                        leftTitleHeaderLevel={2}
                        key={name}>
                            <h3 className="text-xl">{degree} - GPA: {gpa}</h3>
                            <div className="relevant-course-container mt-4">
                                <h4 className="text-lg border-b-2 border-slate-950">Relevant courses</h4>
                                <ul className="relevant-courses flex flex-wrap">
                                    {relevantCourses.map((course, idx) => (
                                        <li className="course basis-1/2 py-2 pr-4" key={`${name}-course-${idx}`}>{course.title}</li>
                                    ))}
                                </ul>
                            </div>
                    </Card>
                 ))}
        </>
    )
}

export default EducationPage