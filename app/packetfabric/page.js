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

        <table className="table-auto border-collapse border border-zinc-700">
          <thead>
            <tr>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal"></th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">Old portal</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">New portal</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">% change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">U-turns</td>
              <td className="border border-zinc-700 px-4 py-6">20.3%</td>
              <td className="border border-zinc-700 px-4 py-6">16.5%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                -18.7%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Rage clicks</td>
              <td className="border border-zinc-700 px-4 py-6">0.6%</td>
              <td className="border border-zinc-700 px-4 py-6">0.5%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                -16.6%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <ImgDescription copy={'U-turns and rage clicks as defined by Hotjar analytics'}/>

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

        <table className="table-auto border-collapse border border-zinc-700">
          <thead>
            <tr>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal"></th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">Old purchase flow</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">New purchase flow</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">% change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Ports</td>
              <td className="border border-zinc-700 px-4 py-6">15.4%</td>
              <td className="border border-zinc-700 px-4 py-6">21.5%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                39.6%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Point-to-Points</td>
              <td className="border border-zinc-700 px-4 py-6">7.1%</td>
              <td className="border border-zinc-700 px-4 py-6">11.7%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                64.7%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Backbone</td>
              <td className="border border-zinc-700 px-4 py-6">27.1%</td>
              <td className="border border-zinc-700 px-4 py-6">46.1%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                70.1%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Hosted Cloud</td>
              <td className="border border-zinc-700 px-4 py-6">19.8%</td>
              <td className="border border-zinc-700 px-4 py-6">26.4%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                33.3%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <ImgDescription copy={'Purchase flow conversion for top four products'}/>

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
