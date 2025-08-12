import Image from 'next/image'
import Card from './components/card';
import LinkIcon from './components/link-icon';
import { getTechnologyIcon } from './utils';

const HomePage = () => {
  return (
    <>
      <Image
        src="/face.png"
        alt="Brandon Bankert"
        height={250}
        width={250}
        layout='fixed'
        />
      <div className='title-container text-center'>
        <h1 className='text-4xl'>Brandon Bankert</h1>
        <h2 className='text-3xl'>Tech Lead</h2>
      </div>
      <Card leftTitle="A little about this site...">
        <div className='intro-container pb-2'>
          <p>Hello! Welcome to my resume website, this has been my own little personal project that I have built up over time.</p>
          <p>It started as just a chance for me to teach myself react, but it has evolved over time.</p>
          <p>Originally, this website was built with just JavaScript, React, and CSS.</p> 
          <p>Then to make the site available it was deployed manually to gh-pages.</p>
          <p>Now, it is built width React, TypeScript, TailWind CSS, Next.js and is deployed automatically on PR completion through GitHub Actions. The site is also taking advantage of Redux for state management along with RTK Query to simulate http requests for dynamic content.</p>
          <p>This site is also tested with Jest, which are run in the actions.</p>
        </div>
        <div className='built-with-container border-t-2 border-slate-950 p-2 flex flex-col'>
            <div className='built-with-title mb-2'>
              <h4 className='text-xl'>Built with</h4>
            </div>
            <div className='icons-container flex flex-row'>
              {getTechnologyIcon('next.js')}
              {getTechnologyIcon('react')}
              {getTechnologyIcon('jest')}
              {getTechnologyIcon('redux')}
            </div>
        </div>
      </Card>
      <Card leftTitle="A little about me...">
        <div className='intro-container pb-2'>
        <p>I feel that this site is a pretty good example of me. 
          It is a fun little project that I can work on over time and 
          learn new things. I have always enjoyed going out and learning new 
          things. React has been my favorite environment ever since I started 
          learning it. It has kept my interest and continuously made me want 
          to learn new things ever since. Some other passions of mine included
           cyber security, which is an extremely interesting field, the 
           biggest thing that draws me to cyber security is how even though 
           new security features come out seemingly daily, the exploiters seem 
           to be able to find a new vulnerability. The amount of creativity 
           that goes into finding those vulnerabilities is insprining.</p>
        </div>
      </Card>
      <Card leftTitle="What is my current stack?">
        <div className='icons-container flex flex-row'>
          <LinkIcon
            linkUrl="https://reactjs.org"
            linkAriaLabel='Link to react website'
            icon={getTechnologyIcon('react')}
            />
          {/* The logos for React and React Native are the same, so just updating the link & aria-label */}
          <LinkIcon
            linkUrl="https://reactnative.dev/"
            linkAriaLabel='Link to react website'
            icon={getTechnologyIcon('react-native')}
            />
          <LinkIcon
            linkUrl="https://nodejs.org/en"
            linkAriaLabel='Link to node.js site'
            icon={getTechnologyIcon('node.js')}
            />
          <LinkIcon
            linkUrl="https://aws.amazon.com/"
            linkAriaLabel='Link to aws site'
            icon={getTechnologyIcon('aws')}
            />
          <LinkIcon
            linkUrl="https://jestjs.io/"
            linkAriaLabel='Link to jest site'
            icon={getTechnologyIcon('jest')}
            />
          <LinkIcon
            linkUrl="https://www.mongodb.com/"
            linkAriaLabel='Link to mongodb site'
            icon={getTechnologyIcon('mongo-db')}
            />
          <LinkIcon
            linkUrl="https://redux.js.org/"
            linkAriaLabel='Link to redux site'
            icon={getTechnologyIcon('redux')}
            />
          
        </div>
      </Card>
      <Card leftTitle="What have I used before?">
        <div className='icons-container flex flex-row'>
          <LinkIcon
            linkUrl="https://dotnet.microsoft.com/en-us/"
            linkAriaLabel='Link to .NET website'
            icon={getTechnologyIcon('.net')}
            />
          {/* The logos for React and React Native are the same, so just updating the link & aria-label */}
          <LinkIcon
            linkUrl="https://angular.io/"
            linkAriaLabel='Link to angular website'
            icon={getTechnologyIcon('angular')}
            />
          <LinkIcon
            icon={getTechnologyIcon('sql-server')}
            />
          <LinkIcon
            icon={getTechnologyIcon('docker')}
            linkAriaLabel='Link to docker website'
            linkUrl='https://www.docker.com/'
            />
            <LinkIcon
            icon={getTechnologyIcon('sitecore')}
            linkAriaLabel='Link to sitecore website'
            linkUrl='https://www.sitecore.com/'
            />
        </div>
      </Card>
    </>
  )
}

export default HomePage;