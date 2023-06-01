import Image from 'next/image'
import Link from 'next/link';

function Project(props) {
  return (

    <Link href={props.path}>
      <div className="group mb-24 lg:mb-48 overflow-hidden">
        <div class="relative">
          <Image
            className="w-full group-hover:blur-sm group-hover:opacity-75 transition duration-300 ease-in-out"
            src={props.img}
            alt={props.imgAlt}
            placeholder='blur'
            blurDataURL={props.img}
            priority
            width={984}
            height={577}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            View project
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 ml-2 inline-block fill-green-400">
              <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-2 mt-6">
          <h2>{props.title} <span class="text-zinc-400">— {props.description}</span></h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden md:block ml-2 h-4 fill-zinc-400 group-hover:fill-green-400 transition duration-150 ease-in-out">
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
          </svg>
        </div>
        <p className="text-xs text-zinc-400">{props.role}</p>
      </div>
    </Link>

  );
}

export default Project;
