import Image from 'next/image'

import ProjectHeader from '../components/ProjectHeader';
import ImgDescription from '../components/ImgDescription';
import ProjectFooter from '../components/ProjectFooter';
import TextBlock from '../components/TextBlock';

export default function Crowdcube() {

  return (
    <main className="flex flex-col text-zinc-50 leading-snug bg-zinc-950">

      <div className="flex flex-col max-w-5xl mx-auto px-5 mb-12 md:mb-24">

        <ProjectHeader
          title={'Sweatshop'}
          description={'Ecommerce, Web Design, B2C, Checkout, Branding'}
          role={'Head of UX & Creative Director at DINK | 18-19'}
          website={'https://www.sweatshop.com/'}
          copy={"Redesigned the website increasing commerce conversion by 30%, and reduced both payment drop-offs and confirmation drop-offs by 30% each. Working in a close team of design, product and dev to transform an ecommerce store and brand."}
        />

        <table className="table-auto border-collapse border border-zinc-700 mb-12 md:mb-24">
          <thead>
            <tr>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal"></th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">Old website</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">New website</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">% change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Conversion rate</td>
              <td className="border border-zinc-700 px-4 py-6">2.55%</td>
              <td className="border border-zinc-700 px-4 py-6">3.34%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                30.98%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Payment drop-off</td>
              <td className="border border-zinc-700 px-4 py-6">10%</td>
              <td className="border border-zinc-700 px-4 py-6">7%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                -30%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Confirmation drop-off</td>
              <td className="border border-zinc-700 px-4 py-6">38%</td>
              <td className="border border-zinc-700 px-4 py-6">26%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                -31.58%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        <TextBlock
          title={'The Problem'}
          copy={"I few years prior to my involvement with the project, Sweatshop was acquired by SportsDirect. Unfortunately in the years that followed other sites took priority and Sweatshop was left to slowly become obsolete. However Sweatshop still had a loyal customer base that has been a part of the Sweatshop journey for decades, therefore my team and I were brought on to breathe some life into their business and push Sweatshop up to modern ecommerce standards. This would involve everything from social strategy, branding and their website."}
        />

        <Image
          className="w-full"
          src={'/sweatshop-project/old-homepage.jpg'}
          alt={''}
          priority
          placeholder='blur'
          blurDataURL={'/sweatshop-project/old-homepage.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"The old homepage design"}/>

        <TextBlock
          title={'Limitations'}
          copy={"The main issue we immediately noticed was the lack of buy in from stakeholders when it came to utilising development resources. Dev time was scarce and we had to justify decisions against other business needs. With most projects the stakeholders want results yesterday and with Sweatshop this was no different, with only a few weeks to analyse the current platform and propose a new design the pressure was definitely on."}
        />

        <Image
          className="w-full"
          src={'/sweatshop-project/branding.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/sweatshop-project/branding.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Our branding guidelines"}/>

        <TextBlock
          title={'The Solution'}
          copy={"Due to the developer constraints we decided we had to as little with functionality as possible and concentrate heavily on making big wins within the design, we solved this by reducing the number of images to declutter the site and go bigger with the images we had to give it an up to date modern feel. We also changed the site to full width for most users which gave the design a more immersive feel, this added with the larger images really changed the whole look of the site."}
        />

        <Image
          className="w-full"
          src={'/sweatshop-project/wireframes.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/sweatshop-project/wireframes.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Wireframe concepts"}/>

        <TextBlock
          title={'Project Goals'}
          copy={"With ecommerce websites there are always a few key goals that you need to hit and some key parts of the user journey that require serious attention. Add to basket and each point through the checkout process is absolutely key, giving the site a facelift may have been a goal for the stakeholders but for our team we really wanted to make the site work more fluently for the users, therefore we set ourselves internal KPIs around conversion and drop-off. Although we improved on metrics such as exit and bounce rate I was most proud of our work done to the purchase journey. As a result of our changes we upped the conversion rate from 2.55% to 3.34%. We reduced payment drop-off to 7% from 10% and our biggest difference was the confirmation drop-off which we reduced by 12% which was quite high at 38%."}
        />

        <Image
          className="w-full"
          src={'/sweatshop-project/live-homepage.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/sweatshop-project/live-homepage.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"The new live homepage"}/>

        <TextBlock
          title={'My Role'}
          copy={"I was the project lead on this project working internally with our UI/UX Designer, Product Manager and also our Brand Designer. We also worked closely with the Sweatshop team and their internal developers. This project had no real brief before beginning so a large part of my role was getting buy in from all stakeholders and executing on our vision."}
        />

        <Image
          className="w-full"
          src={'/sweatshop-project/live-list-page.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/sweatshop-project/live-list-page.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"the new live list page"}/>

        <TextBlock
          title={'Learned Lessons'}
          copy={"My main take away from this project was really focusing on our development resources and adapting to making the biggest changes that took as little resource as possible, a lot of this was achieved via manipulating the design and part of it was selling the idea of versioning, the idea of making small incremental changes between other projects got a lot of small functionality changes through that otherwise would have been pushed aside."}
        />

        <Image
          className="w-full"
          src={'/sweatshop-project/live-product-page.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/sweatshop-project/live-product-page.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"the new live product page"}/>

        <TextBlock
          title={'Conclusion'}
          copy={"Overall I am pretty happy with where this project is, the current version is not the finished article but with each small iteration it’s getting there. The underlying UX work that was put in at the start made for a very smooth design process and we made sure we had the data to back up our design choices. Andrew Gormley - Head of UX, Freddie Loveday - UI Designer, Greg Musser - Product Manager, Gareth Sanger - Brand Designer."}
        />

        <ProjectFooter
          nextProject={'PacketFabric'}
          nextPath={'/packetfabric'}
        />

      </div>


    </main>
  )
}
