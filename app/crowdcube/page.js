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
          title={'Crowdcube'}
          description={'Financial Tech, Web Design, B2B, B2C, Information Architecture, Commerce'}
          role={'Lead UI Designer | 16-17'}
          website={'https://www.crowdcube.com/'}
          copy={"Redesigned the website increasing conversion of registrations by 100%, conversion to their secondary goal by 23% and reduced exit and bounce rate by 9% each. Working with Engineering to ship new products and improve on existing features. Maintaining consistency throughout the entire UI by creating style guides. Conducting in person user testing using wireframes and prototypes. Pushing production code using Git."}
        />

        <table className="table-auto border-collapse border border-zinc-700 mb-12 md:mb-24">
          <thead>
            <tr>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal"></th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">Old homepage</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">New homepage</th>
              <th className="border border-zinc-700 px-4 py-6 text-left font-normal">% change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Conversion to registration page</td>
              <td className="border border-zinc-700 px-4 py-6">1.38%</td>
              <td className="border border-zinc-700 px-4 py-6">2.92%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                111.59%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Conversion to investment opportunities</td>
              <td className="border border-zinc-700 px-4 py-6">43.71%</td>
              <td className="border border-zinc-700 px-4 py-6">53.81%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                23.10%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Exit rate</td>
              <td className="border border-zinc-700 px-4 py-6">28.52%</td>
              <td className="border border-zinc-700 px-4 py-6">25.96%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                -8.97%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
            <tr>
              <td className="border border-zinc-700 px-4 py-6">Bounch Rate</td>
              <td className="border border-zinc-700 px-4 py-6">30.22%</td>
              <td className="border border-zinc-700 px-4 py-6">27.51%</td>
              <td className="border border-zinc-700 px-4 py-6 text-green-400">
                -8.96%
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 inline-block ml-1">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>

        <TextBlock
          title={'The Problem'}
          copy={"I was brought into the Crowdcube team to help push for more design focused thinking and to work with the current design team to give the website and product a much needed visual update. The goal was to improve on the aesthetics of the site without damaging and if possible improving on certain key statistics such as increasing sign up rates and increasing visibility on all investment opportunities."}
        />

        <Image
          className="w-full"
          src={'/crowdcube-project/old-homepage.jpg'}
          alt={''}
          priority
          placeholder='blur'
          blurDataURL={'/crowdcube-project/old-homepage.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"The old homepage design"}/>

        <TextBlock
          title={'Limitations'}
          copy={"What I did not expect was the sheer amount of technical debt that already existed within the product, this issue was exacerbated by Front-End being limited on time since the already small team were tied into other deadlines and commitments. The other issue was that Front-End were having to create a lot of custom code constantly, this was was taking up a large chunk of their time."}
        />

        <Image
          className="w-full"
          src={'/crowdcube-project/concept-homepage.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/crowdcube-project/concept-homepage.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"High fidelity concept"}/>

        <TextBlock
          title={'The Solution'}
          copy={"Due to the our resource and time constraints we decided to make the visual changes a very gradual project. This involved lot’s of small releases but done quickly. And for the larger changes using split tests against the originals to ensure our users engagement was not affected. To help combat the amount of customs code the Front-End team were churning out we decided to work on a component library which would allow them to reuse elements across the site, this was time consuming to set up as expected but we quickly started seeing the benefits. Once a plan of attack and brief had been created with product I went about creating a new version of the homepage which was to be tested against the existing homepage. The new version proved to be a success by positively affecting our primary goal of increasing sign ups, going from 1.38% to 2.92%. It also achieved it’s goal of not damaging other metrics but also improved on those metrics. Click throughs to ‘Investment Opportunities’ was increased from 43.73% to 51.81% and bounce rate was decreased from 30.22% to 27.51% which are both major achievements. This data allowed us to justify pushing all traffic to the new design."}
        />

        <Image
          className="w-full"
          src={'/crowdcube-project/whiteboard-wireframes.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/crowdcube-project/whiteboard-wireframes.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Whiteboard wireframing"}/>

        <TextBlock
          title={'Project Goals'}
          copy={"A lot of the site has and is still undergoing this visual update therefore I will just focus on the homepage for this case study. There were 2 goals we had for this project: make the page more aesthetically pleasing and reduce the amount of unnecessary information. Although this project was further down the roadmap it was something I was keen to attack as soon as possible, therefore I started collecting data from Google Analytics and meeting with our Data Analyst to get insight on what elements were being engaged with and what was a waste of real estate. I then created a quick concept design on the side to spark interest and conversations with stakeholders. Although I knew aspects of the concept would not make it into the project it was the best way to get people excited about the prospect of a new homepage. Once a plan of attack and brief had been created with product I went about creating a new version of the homepage which was to be tested against the existing homepage. The new version proved to be a success by positively affecting our primary goal of increasing sign ups, going from 1.38% to 2.92%. It also achieved it’s goal of not damaging other metrics but also improved on those metrics. Click throughs to ‘Investment Opportunities’ was increased from 43.73% to 51.81% and bounce rate was decreased from 30.22% to 27.51% which are both major achievements. This data allowed us to justify pushing all traffic to the new design."}
        />

        <Image
          className="w-full"
          src={'/crowdcube-project/new-homepage.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/crowdcube-project/new-homepage.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"The new homepage"}/>

        <TextBlock
          title={'My Role'}
          copy={"I learned a few things from this project and reinforced existing practise methods. Firstly to get reliable results from split testing, you have to use a larger percentage of traffic. Stakeholders were hesitant to send so much traffic to the new page to begin with, this delayed getting the results we needed and therefore held the end result up. Part way through the test I was fortunate enough to grab @multimichel for a chat at Generate Conference, Michel was a speaker at the conference and is a designer at Booking.com and he reinforced my point about traffic levels in AB testing. I knew backing up designs and briefs with data was important but this project really strengthened that fact. Some of the stakeholders involved with the project had been with the company for a while and were therefore very hard to convince on changes. Having data to back us up every step of the way was an important method to protect ourselves from being directed by the HiPPO, otherwise known as the ‘highest paid person's opinion’."}
        />

        <Image
          className="w-full"
          src={'/crowdcube-project/design-team.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/crowdcube-project/design-team.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"The Crowdcube design team"}/>

        <TextBlock
          title={'Conclusion'}
          copy={"In conclusion, the project is in a much better place now after a bit of a face lift and dealing with the legacy information and code. However I will always try and improve on the page and will hopefully implement changes to the page and run little experiments on the side. Metrics can always improve!"}
        />

        <ProjectFooter
          nextProject={'Sweatshop'}
          nextPath={'/sweatshop'}
        />

      </div>


    </main>
  )
}
