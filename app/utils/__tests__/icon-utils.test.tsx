import { SiAngular, SiDocker, SiDotnet, SiJest, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiSass } from "react-icons/si"
import { DiMsqlServer } from "react-icons/di";
import { 
    FaAws
} from 'react-icons/fa'
import React from "react";
import Image from 'next/image'
import { getTechnologyIcon } from ".."
import { ICON_CONSTANTS } from "../constants"

describe('iconUtils', () => {
    describe('#getTechnologyIcon', () => {
        describe.each`
            technologyName      |   expectedOutput
            ${ICON_CONSTANTS.reactNative}   |   ${<SiReact className='h-9 w-9 mr-4' title='React Native logo'/>}
            ${ICON_CONSTANTS.react}          |   ${<SiReact className='h-9 w-9 mr-4' title='React.js logo'/>}
            ${ICON_CONSTANTS.redux}          |   ${<SiRedux className='h-9 w-9 mr-4' title='Redux logo'/>}
            ${ICON_CONSTANTS.node}        |   ${<SiNodedotjs className='h-9 w-9 mr-4' title='Node.js logo'/>}
            ${ICON_CONSTANTS.aws}            |   ${<FaAws className='h-9 w-9 mr-4' title="Amazon's aws logo"/>}
            ${ICON_CONSTANTS.mongoDb}       |   ${<SiMongodb className='h-9 w-9 mr-4' title='Mongodb logo'/>}
            ${ICON_CONSTANTS.jest}           |   ${<SiJest className='h-9 w-9 mr-4' title='Jest logo'/>}
            ${ICON_CONSTANTS.sass}           |   ${<SiSass className='h-9 w-9 mr-4' title='Sass logo' />}
            ${ICON_CONSTANTS.dotNet}           |   ${<SiDotnet className='h-9 w-9 mr-4' title='.NET logo'/>}
            ${ICON_CONSTANTS.angular}        |   ${<SiAngular className='h-9 w-9 mr-4' title='Angular logo'/>}
            ${ICON_CONSTANTS.sqlServer}     |   ${<DiMsqlServer className='h-9 w-9 mr-4' title='SQL Server logo'/>}
            ${ICON_CONSTANTS.nextJs}        |   ${<SiNextdotjs className='h-9 w-9 mr-4' title='Next.js logo'/>}
            ${ICON_CONSTANTS.docker}         |   ${<SiDocker className='h-9 w-9 mr-4' title='Docker logo' />}
            ${ICON_CONSTANTS.sitecore}       |   ${<Image height={36} width={36} src='/sitecore.svg' layout='fixed' alt='Sitecore logo'/>}
        `('when the technology name is $technologyName', ({ technologyName, expectedOutput }) => {
            it(`should return ${expectedOutput}`, () => {
                expect(getTechnologyIcon(technologyName)).toEqual(expectedOutput)
            })
        })
    })
})