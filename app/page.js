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
          description={'NaaS, Analytics, Data, Dashboard, Commerce, Information Architecture'}
          role={'Design Lead | 20 - 23'} />

        <Project
          path={'/contrast'}
          img={'/contrast-project-3.png'}
          imgAlt={'Contrast admin dashboard'}
          title={'Contrast'}
          description={'Video, Live Streaming, Analytics, Data, Dashboard, Interaction'}
          role={'Senior Designer | 21-22'} />

        <ToolRow/>

        <Blogs/>
      </div>


    </main>
  )
}
