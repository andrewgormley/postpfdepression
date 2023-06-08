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
          title={'LDN19'}
          description={'Ecommerce, Web Design, B2C, Animation, Interaction Design'}
          role={'Designer/Developer | 15-16'}
          website={'https://www.instagram.com/prodirect_ldn'}
          copy={"Winner in the BT Retail Week Tech & Ecomm Awards. Interactive features that display on 32 inch 4K touch screens. The goal of the project was to immerce customers in the world of Football, educate them on products and ultimately push them to make a purchase."}
        />

        <div className="mb-12 md:mb-24 max-w-full relative h-0" style={{ paddingBottom: '51%' }}>
          <iframe className="absolute w-full h-full top-0 left-0" src="https://www.youtube.com/embed/SWWrd4M6SGA" frameBorder="0" allowFullScreen=""></iframe>
        </div>

        <TextBlock
          title={'The Goal'}
          copy={"The LDN19 store was built with one purpose - To revolutionize soccer retail. A small team varying in specialities was put together to turn this into reality. As the design lead on this project my purpose was to engage and interact with a range of different customers through nine 32” 4K touch displays located throughout the store."}
        />

        <Image
          className="w-full"
          src={'/ldn19-project/1.jpg'}
          alt={''}
          priority
          placeholder='blur'
          blurDataURL={'/ldn19-project/1.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Pantofola d'Oro - Interactive feature"}/>

        <TextBlock
          title={'Limitations'}
          copy={"I rarely had development resources at my disposal which meant that I was acting as an end to end product designer. From concept to production ready features. Another limitation was keeping the content original, whenever a new soccer product was to be released it required a feature to be built by myself. This required a lot of creativity and collaboration between videographers, photographers and the brands themselves."}
        />

        <Image
          className="w-full"
          src={'/ldn19-project/2.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/ldn19-project/2.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Łukasz Fabiański - Interactive feature"}/>

        <TextBlock
          title={'The Build'}
          copy={"This project posed different challenges from the usual web builds. Even though it was one big web application, the viewport never changed size and touch gestures were the only way to navigate and interact with content. HTML and CSS were my main tools to get the basic functionality and aesthetics of the pages, through directly watching our users we quickly found the most engaging content utilised animations and interactive content. To tackle this issue I took advantage of existing libraries such as Animate.CSS and WOW.js for the animations and a basic understanding of JavaScript to allow for functions on click (or touch in this case). The content was the most important thing therefore it was key to not overdo the bells and whistles on each feature."}
        />

        <Image
          className="w-full"
          src={'/ldn19-project/3.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/ldn19-project/3.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Łukasz Fabiański - Interacting with his live feature"}/>

        <TextBlock
          title={'My Role'}
          copy={"It was up to me to maintain timelines and hit deadlines by not only creating content but pushing for sign off from both Marketing and the Brands such as Nike, adidas, PUMA and Under Armour to name a few. It was also extremely important to liaise with the Video department to make sure our content aligned since their work could also be seen throughout the store. It was the impact of both video and interactive content that truly made LDN19 a digital experience."}
        />

        <Image
          className="w-full"
          src={'/ldn19-project/4.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/ldn19-project/4.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Łukasz Fabiański - Interacting with his live feature"}/>

        <TextBlock
          title={'Learned Lessons'}
          copy={"Libraries can be a lifesaver, although they can be restrictive at times they can also keep you and check. Knowing that a feature would need custom code can be the decision between implementing it or axing it. For the months I was tasked with this projects I was glad I made the decision to include these libraries early. Another lesson learned was to not waste time with poor content. LDN19 sold a range of products from various brands, it was clear which brands for the most engaging just from the assets received from them. After trying over and over again I made the decision to use a standard presentation for less engaging content which gave me more time to focus on the products that were making a real impact."}
        />

        <Image
          className="w-full"
          src={'/ldn19-project/5.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/ldn19-project/5.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Customer interacting with the Mizuno display"}/>

        <TextBlock
          title={'Conclusion'}
          copy={"Not only did the LDN19 store win and get shortlisted for several awards. The store hosted and still host a range of top flight athletes and legends of the game. Seeing these superstars just as engaged with the experience as our customers is an achievement in itself. The LDN19 store is taking the right steps to revolutionize retail and has truly set the stage for their largest audience, social media, most significantly Instagram with over 425,000 followers."}
        />

        <Image
          className="w-full"
          src={'/ldn19-project/6.jpg'}
          alt={''}
          placeholder='blur'
          blurDataURL={'/ldn19-project/6.jpg'}
          width={984}
          height={584}
        />
        <ImgDescription copy={"Customer interacting with the Mizuno display"}/>

        <ProjectFooter
          nextProject={'PacketFabric'}
          nextPath={'/packetfabric'}
        />

      </div>


    </main>
  )
}
