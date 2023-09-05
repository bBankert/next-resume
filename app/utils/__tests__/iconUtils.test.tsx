import { SiAmazonaws, SiAngular, SiDocker, SiDotnet, SiJest, SiMicrosoftsqlserver, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSass } from "react-icons/si"
import Image from 'next/image'
import { getTechnologyIcon } from ".."

describe('iconUtils', () => {
    describe('#getTechnologyIcon', () => {
        describe.each`
            technologyName      |   expectedOutput
            ${'react-native'}   |   ${<SiReact className='h-9 w-9 mr-4' title='React Native logo'/>}
            ${'react'}          |   ${<SiReact className='h-9 w-9 mr-4' title='React.js logo'/>}
            ${'redux'}          |   ${<SiRedux className='h-9 w-9 mr-4' title='Redux logo'/>}
            ${'node.js'}        |   ${<SiNodedotjs className='h-9 w-9 mr-4' title='Node.js logo'/>}
            ${'aws'}            |   ${<SiAmazonaws className='h-9 w-9 mr-4' title="Amazon's aws logo"/>}
            ${'mongo-db'}       |   ${<SiMongodb className='h-9 w-9 mr-4' title='Mongodb logo'/>}
            ${'jest'}           |   ${<SiJest className='h-9 w-9 mr-4' title='Jest logo'/>}
            ${'sass'}           |   ${<SiSass className='h-9 w-9 mr-4' title='Sass logo' />}
            ${'.net'}           |   ${<SiDotnet className='h-9 w-9 mr-4' title='.NET logo'/>}
            ${'angular'}        |   ${<SiAngular className='h-9 w-9 mr-4' title='Angular logo'/>}
            ${'sql-server'}     |   ${<SiMicrosoftsqlserver className='h-9 w-9 mr-4' title='SQL Server logo'/>}
            ${'next.js'}        |   ${<SiNextdotjs className='h-9 w-9 mr-4' title='Next.js logo'/>}
            ${'docker'}         |   ${<SiDocker className='h-9 w-9 mr-4' title='Docker logo' />}
            ${'sitecore'}       |   ${<Image height={36} width={36} src='/sitecore.svg' layout='fixed' alt='Sitecore logo'/>}
        `('when the technology name is $technologyName', ({ technologyName, expectedOutput }) => {
            it(`should return ${expectedOutput}`, () => {
                expect(getTechnologyIcon(technologyName)).toEqual(expectedOutput)
            })
        })
    })
})