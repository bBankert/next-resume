import Card from '@/app/components/card'
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'
import { getTechnologyIcon } from '@/app/utils'
import { ExperienceService } from '@/app/services'
import { Technology } from '@/app/models'


type ProfessionalExperiencePageProps = {
    params: { company: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

const titleFormatter = (route: string) => {
    const splitCompanyName = route.split('-').map((word) => {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    });
    
    return splitCompanyName.join(' ')
}

export async function generateMetadata({
    params, searchParams
}: ProfessionalExperiencePageProps,
parent: ResolvingMetadata): Promise<Metadata> {
    const formattedCompanyName = titleFormatter(params.company);

    console.log('Parent',parent)

    return {
        title: `${formattedCompanyName} experience`,
        description: `Brandon Bankert's experience at ${formattedCompanyName}`
    }
}

const ProfessionalExperiencePage = async ({ params }: ProfessionalExperiencePageProps) => {
    const { company } = params;
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