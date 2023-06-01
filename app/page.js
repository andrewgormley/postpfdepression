import Image from 'next/image'

import Banner from './components/Banner';
import LatestPost from './components/LatestPost';
import ToolRow from './components/ToolRow';
import Blogs from './components/Blogs';
import Project from './components/Project';
import Socials from './components/Socials';
import Footer from './components/Footer';

export default function Home() {

  return (
    <main className="flex flex-col text-zinc-50 leading-snug bg-zinc-950">

      <div className="flex flex-col max-w-5xl mx-auto px-5">
        <div className="py-24 lg:py-48">
          <Banner/>
          <LatestPost/>
        </div>

        <Project
          path={'/packetfabric'}
          img={'/pf-project.png'}
          imgAlt={'PacketFabric dashboard'}
          title={'PacketFabric'}
          description={'NaaS, B2B, Analytics, Data, Dashboard, Commerce, Information Architecture'}
          role={'Design Lead | 20 - 23'} />

        <Project
          path={'/contrast'}
          img={'/contrast-project-3.png'}
          imgAlt={'Contrast admin dashboard'}
          title={'Contrast'}
          description={'Video, B2B, B2C, Live Streaming, Analytics, Data, Dashboard, Interaction'}
          role={'Senior Designer | 21-22'} />

        <Project
          path={'/crowdcube'}
          img={'/crowdcube-project.png'}
          imgAlt={''}
          title={'Crowdcube'}
          description={'Financial Tech, B2B, B2C, Web Design, Information Architecture, Commerce'}
          role={'Lead UI Designer | 16-17'} />

        <Project
          path={'/sweatshop'}
          img={'/sweatshop-project/sweatshop-cover.gif'}
          imgAlt={''}
          title={'Sweatshop'}
          description={'Ecommerce, Web Design, B2C, Checkout, Branding'}
          role={'Head of UX & Creative Director at DINK | 18-19'} />

        <ToolRow/>

        <Blogs/>
      </div>


    </main>
  )
}
