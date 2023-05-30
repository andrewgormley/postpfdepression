import Image from 'next/image'

import ProjectHeader from '../components/ProjectHeader';
import ImgDescription from '../components/ImgDescription';
import ProjectFooter from '../components/ProjectFooter';

export default function Contrast() {

  return (
    <main className="flex flex-col text-zinc-50 leading-snug bg-zinc-950">

      <div className="flex flex-col max-w-5xl mx-auto px-5 mb-12 md:mb-24">

        <ProjectHeader
          title={'Contrast'}
          description={'Video, Live Streaming, Analytics, Data, Dashboard, Interaction'}
          role={'Senior Designer | 21-22'}
          website={'https://www.getcontrast.io/'}
          copy={"Pivoting Airfair's online conference software through a rebranding to Contrast and designing a new platform focused on making webinars more engaging. During my time at Contrast I worked on the back end dashboard and analytics for webinar hosts and interactions design for viewers, as well as various conversion flows."}
        />

        <Image
          className="w-full"
          src={'/contrast-project/contrast-1.png'}
          alt={''}
          priority
          placeholder='blur'
          blurDataURL={'/contrast-project/contrast-1.png'}
          width={984}
          height={560}
        />
        <ImgDescription copy={"Channel page, where live streams are hosted"}/>

        <Image
          className="w-full"
          src={'/contrast-project/contrast-2-2.png'}
          alt={''}
          priority
          placeholder='blur'
          blurDataURL={'/contrast-project/contrast-2-2.png'}
          width={984}
          height={560}
        />
        <ImgDescription copy={"Live stream session with chat"}/>

        <Image
          className="w-full"
          src={'/contrast-project/contrast-3-2.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/contrast-project/contrast-3-2.png'}
          width={984}
          height={560}
        />
        <ImgDescription copy={"Live stream session ended"}/>

        <Image
          className="w-full"
          src={'/contrast-project/contrast-4.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/contrast-project/contrast-4.png'}
          width={984}
          height={560}
        />
        <ImgDescription copy={"Studio for hosting live streams"}/>

        <Image
          className="w-full"
          src={'/contrast-project/contrast-5.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/contrast-project/contrast-5.png'}
          width={984}
          height={560}
        />
        <ImgDescription copy={"Admin dashboard for content management and analytics"}/>

        <Image
          className="w-full"
          src={'/contrast-project/contrast-6.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/contrast-project/contrast-6.png'}
          width={984}
          height={560}
        />
        <ImgDescription copy={"Early concept of creating snippets"}/>

        <ProjectFooter
          nextProject={'PacketFabric'}
          nextPath={'/packetfabric'}
        />

      </div>


    </main>
  )
}
