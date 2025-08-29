import Card from '../../components/card'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
import { getTechnologyIcon } from '../../utils'
import { ExperienceService } from '../../services'
import { Technology } from '../../models'


export type ProfessionalExperiencePageProps = {
    params: Promise<{ company: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const titleFormatter = (route: string) => {
    const splitCompanyName = route.split('-').map((word) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    });
    
    return splitCompanyName.join(' ')
}

export async function generateMetadata(props: ProfessionalExperiencePageProps, _: ResolvingMetadata): Promise<Metadata> {
    const { company } = await props.params;
    const formattedCompanyName = titleFormatter(company);

    return {
        title: `${formattedCompanyName} experience`,
        description: `Brandon Bankert's experience at ${formattedCompanyName}`
    }
}

const ProfessionalExperiencePage = async (props: ProfessionalExperiencePageProps) => {
    const { company } = await props.params;
    const formattedCompanyName = titleFormatter(company)

    const { details, title, technologies } = await ExperienceService.fetchJobData(company);

    return (
        <>
            <Card
                leftTitle={formattedCompanyName}
                leftTitleHeaderLevel={1}
                rightTitle={title}
                rightTitleHeaderLevel={2} >
                    {details?.map((detail: string, idx: number) => (
                            <p key={`${formattedCompanyName}-detail-${idx}`}>{detail}</p>
                    ))}
            </Card>
            <Card leftTitle="What did I use here?">
                <div className='icons-container flex flex-row'>
                    {technologies?.map((technology: Technology, idx: number) => (
                        <p key={`${technology.name}-${idx}`}>{getTechnologyIcon(technology.name)}</p>
                    ))}
                </div>
            </Card>
      </>
    )
}

export default ProfessionalExperiencePage;