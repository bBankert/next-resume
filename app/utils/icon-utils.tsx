import React, { ReactNode } from "react"
import { 
    SiReact, 
    SiRedux, 
    SiNodedotjs, 
    SiMongodb, 
    SiJest, 
    SiSass, 
    SiDotnet, 
    SiAngular, 
    SiNextdotjs,
    SiDocker
} from "react-icons/si"
import { DiMsqlServer } from "react-icons/di";
import { 
    FaAws
} from 'react-icons/fa'

import Image from 'next/image'
import { ICON_CONSTANTS,TechNologyValues } from "./constants";

/**
 * Get a technology icon from a given key
 * @param {TechnologyNames} technologyName - Key of a given technology name
 * @returns A technology icon
 */
export const getTechnologyIcon = (technologyName: TechNologyValues): ReactNode => {
    switch(technologyName.toLowerCase()){
        case ICON_CONSTANTS.reactNative:
        case ICON_CONSTANTS.react:
            return <SiReact className='h-9 w-9 mr-4' 
            title={
                `${technologyName.toLowerCase() === ICON_CONSTANTS.reactNative ? 'React Native' : 'React.js'} logo`}
                />
        case ICON_CONSTANTS.redux:
            return <SiRedux className='h-9 w-9 mr-4' title='Redux logo'/>
        case ICON_CONSTANTS.node:
            return <SiNodedotjs className='h-9 w-9 mr-4' title='Node.js logo'/>
        case ICON_CONSTANTS.aws:
            return <FaAws className='h-9 w-9 mr-4' title="Amazon's aws logo"/>
        case ICON_CONSTANTS.mongoDb:
            return <SiMongodb className='h-9 w-9 mr-4' title='Mongodb logo'/>
        case ICON_CONSTANTS.jest:
            return <SiJest className='h-9 w-9 mr-4' title='Jest logo'/>
        case ICON_CONSTANTS.sass:
            return <SiSass className='h-9 w-9 mr-4' title='Sass logo' />
        case ICON_CONSTANTS.dotNet:
            return <SiDotnet className='h-9 w-9 mr-4' title='.NET logo'/>
        case ICON_CONSTANTS.angular:
            return <SiAngular className='h-9 w-9 mr-4' title='Angular logo'/>
        case ICON_CONSTANTS.sqlServer:
            return <DiMsqlServer className='h-9 w-9 mr-4' title='SQL Server logo'/>
        case ICON_CONSTANTS.nextJs:
            return <SiNextdotjs className='h-9 w-9 mr-4' title='Next.js logo'/>
        case ICON_CONSTANTS.docker:
            return <SiDocker className='h-9 w-9 mr-4' title='Docker logo' />
        case ICON_CONSTANTS.sitecore:
            return <Image
                        height={36}
                        width={36}
                        src='/sitecore.svg'
                        layout='fixed'
                        alt='Sitecore logo'/>
                        
    }
}
