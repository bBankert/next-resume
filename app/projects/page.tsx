import Link from "next/link";
import Card from "../components/card";
import { ExperienceService } from "../services";


const ProjectsPage = async () => {

    const { previousProjects, upcomingProjects } = await ExperienceService.fetchProjectData();

    return (
        <>
            <Card
                useCenterTitle={true}
                centerTitle="Projects" />
            <Card
                leftTitle="Previous"
                leftTitleHeaderLevel={2} />
            {previousProjects?.map(({ name, description, sourceLink, liveLink }) => (
                <Card
                    leftTitle={name}
                    leftTitleHeaderLevel={3}
                    key={`previous-project-${name}`}>
                        <p>{description}</p>
                        <div className='link-container mt-4'>
                            <Link
                                className="mr-4"
                                href={sourceLink}
                                aria-label={`Link to ${name} project github repo`}>
                                    Source Code
                            </Link>
                            {liveLink ? 
                                <Link
                                    href={liveLink}
                                    arai-label={`Link to ${name} live project`}>
                                        Live Link
                                    </Link> :
                                null
                            }
                        </div>

                </Card>
            ))}
            <Card
                leftTitle="Upcoming"
                leftTitleHeaderLevel={2} />
            {upcomingProjects?.length ?  
                upcomingProjects?.map(({ name, description }) => (
                    <Card
                        leftTitle={name}
                        leftTitleHeaderLevel={3}
                        key={`upcoming-project-${name}`}>
                            <p>{description}</p>
                    </Card>
                
                ))
                :
                <Card
                    leftTitle="???"
                    leftTitleHeaderLevel={3}>
                        <p>As of now, there are no planned upcoming projects... but something will be added, that is certain</p>
                    </Card>

            }
        </>
    )
}

export default ProjectsPage;