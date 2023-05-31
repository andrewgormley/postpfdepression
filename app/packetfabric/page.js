import Image from 'next/image'

import ProjectHeader from '../components/ProjectHeader';
import ImgDescription from '../components/ImgDescription';
import ProjectFooter from '../components/ProjectFooter';

export default function PacketFabric() {

  return (
    <main className="flex flex-col text-zinc-50 leading-snug bg-zinc-950">

      <div className="flex flex-col max-w-5xl mx-auto px-5 mb-12 md:mb-24">

        <ProjectHeader
          title={'PacketFabric'}
          description={'NaaS, B2B, Analytics, Data, Dashboard, Commerce, Information Architecture'}
          role={'Design Lead | 20 - 23'}
          website={'https://packetfabric.com/'}
          copy={"Increased conversion of the purchase flow for PacketFabric’s top four products by 38%. Redesigned their B2B web app, reducing  u-turns and rage clicks by 19% and 16% respectively. Rapidly prototyping new features across multiple teams and projects as part of an async engineering and product team. Watching Hotjar recordings of real users and implementing UX improvements based on internal and external feedback. Building and maintaining a continuously evolving Tailwind based component library in Figma. Championing design throughout the company. Presenting analytical data and upcoming UX changes to 100+ team members live."}
        />

        <Image
          className="w-full"
          src={'/pf-project/dashboard.png'}
          alt={''}
          priority
          placeholder='blur'
          blurDataURL={'/pf-project/dashboard.png'}
          width={984}
          height={577}
        />
        <ImgDescription copy={'Dashboard / Home'}/>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Image
            className="w-full"
            src={'/pf-project/old-1.png'}
            alt={''}
            placeholder='blur'
            blurDataURL={'/pf-project/old-1.png'}
            width={984}
            height={577}
          />

          <Image
            className="w-full"
            src={'/pf-project/old-2.png'}
            alt={''}
            priority
            placeholder='blur'
            blurDataURL={'/pf-project/old-2.png'}
            width={984}
            height={577}
          />

          <Image
            className="w-full"
            src={'/pf-project/old-3.png'}
            alt={''}
            placeholder='blur'
            blurDataURL={'/pf-project/old-3.png'}
            width={984}
            height={577}
          />

          <Image
            className="w-full"
            src={'/pf-project/old-4.png'}
            alt={''}
            placeholder='blur'
            blurDataURL={'/pf-project/old-4.png'}
            width={984}
            height={577}
          />
        </div>
        <ImgDescription copy={"PacketFabric's old portal"}/>

        <Image
          className="w-full"
          src={'/pf-project/list-populated.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/pf-project/list-populated.png'}
          width={984}
          height={577}
        />
        <ImgDescription copy={"Services list page"}/>

        <Image
          className="w-full"
          src={'/pf-project/port-creation-billing.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/pf-project/port-creation-billing.png'}
          width={984}
          height={577}
        />
        <ImgDescription copy={"Purchase service flow"}/>

        <Image
          className="w-full"
          src={'/pf-project/port-details.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/pf-project/port-details.png'}
          width={984}
          height={577}
        />
        <ImgDescription copy={"Service details page"}/>

        <Image
          className="w-full"
          src={'/pf-project/map-view.png'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/pf-project/map-view.png'}
          width={984}
          height={577}
        />
        <ImgDescription copy={"Topology map view"}/>

        <ProjectFooter
          nextProject={'Contrast'}
          nextPath={'/contrast'}
        />

      </div>


    </main>
  )
}
