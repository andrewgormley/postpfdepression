import Image from 'next/image'

function ProjectHeader(props) {
  return (
    <div>
      <h1 className="text-4xl mb-6 mt-12 md:mt-24">{props.title} <span class="text-zinc-400">— {props.description}</span></h1>
        <div className="text-zinc-400 mb-6 flex flex-row items-center">
        {props.role} | <a href={props.website} className="p-1 group hover:text-zinc-50 transition duration-150 ease-in-out" target="_blank">Website
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block w-3 h-3 ml-1 fill-zinc-400 group-hover:fill-green-400 transition duration-150 ease-in-out">
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
          </svg></a>
        </div>
      <p className="mb-12 md:mb-24 leading-relaxed">{props.copy}</p>
    </div>
  );
}

export default ProjectHeader;
