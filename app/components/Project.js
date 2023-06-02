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
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex items-center mb-2 mt-6">
          <h2>{props.title} <span class="text-zinc-400">— {props.description}</span></h2>
        </div>
        <p className="text-xs text-zinc-400">{props.role}</p>
      </div>
    </Link>

  );
}

export default Project;
