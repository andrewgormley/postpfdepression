import Image from 'next/image'

function Socials() {
  return(

      <ul className="flex flex-row">
        <li className="flex">
          <a href="https://github.com/andrewgormley" target="_blank" className="px-3 py-5 transition ease-in-out hover:-translate-y-1 duration-300">
            <Image
              className="h-4 w-auto"
              src="/github-icon.svg"
              alt="Github logo"
              priority
              width={100}
              height={24}
            />
          </a>
        </li>
        <li className="flex">
          <a href="https://read.cv/andrewgormley" target="_blank" className="px-3 py-5 transition ease-in-out hover:-translate-y-1 duration-300">
            <Image
              className="h-4 w-auto"
              src="/read.png"
              alt="read.cv logo"
              priority
              width={100}
              height={24}
            />
          </a>
        </li>
        <li className="flex">
          <a href="https://www.linkedin.com/in/andrew-gormley-designer/" target="_blank" className="px-3 py-5 transition ease-in-out hover:-translate-y-1 duration-300">
            <Image
              className="h-4 w-auto"
              src="/linkedin.svg"
              alt="LinkedIn logo"
              priority
              width={100}
              height={24}
            />
          </a>
        </li>
      </ul>

  );
}

export default Socials;
