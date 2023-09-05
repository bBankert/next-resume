import { ReactNode } from "react"
import { 
    SiReact, 
    SiRedux, 
    SiNodedotjs, 
    SiAmazonaws, 
    SiMongodb, 
    SiJest, 
    SiSass, 
    SiDotnet, 
    SiAngular, 
    SiMicrosoftsqlserver, 
    SiNextdotjs,
    SiDocker
} from "react-icons/si"
import Image from 'next/image'

export const getTechnologyIcon = (technologyName: string): ReactNode => {
    switch(technologyName.toLowerCase()){
        case "react-native":
        case "react":
            return <SiReact className='h-9 w-9 mr-4' title={`${technologyName.toLowerCase() === "react-native" ? 'React Native' : 'React.js'} logo`}/>
        case "redux":
            return <SiRedux className='h-9 w-9 mr-4' title='Redux logo'/>
        case "node.js":
            return <SiNodedotjs className='h-9 w-9 mr-4' title='Node.js logo'/>
        case "aws":
            return <SiAmazonaws className='h-9 w-9 mr-4' title="Amazon's aws logo"/>
        case "mongo-db":
            return <SiMongodb className='h-9 w-9 mr-4' title='Mongodb logo'/>
        case "jest":
            return <SiJest className='h-9 w-9 mr-4' title='Jest logo'/>
        case "sass":
            return <SiSass className='h-9 w-9 mr-4' title='Sass logo' />
        case ".net":
            return <SiDotnet className='h-9 w-9 mr-4' title='.NET logo'/>
        case "angular":
            return <SiAngular className='h-9 w-9 mr-4' title='Angular logo'/>
        case "sql-server":
            return <SiMicrosoftsqlserver className='h-9 w-9 mr-4' title='SQL Server logo'/>
        case "next.js":
            return <SiNextdotjs className='h-9 w-9 mr-4' title='Next.js logo'/>
        case "docker":
            return <SiDocker className='h-9 w-9 mr-4' title='Docker logo' />
        case "sitecore":
            return <Image
                        height={36}
                        width={36}
                        src='/sitecore.svg'
                        layout='fixed'
                        alt='Sitecore logo'/>
                        
    }
}
