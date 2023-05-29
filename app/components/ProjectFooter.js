import Image from 'next/image'
import Link from 'next/link';

function ProjectFooter(props) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <p className="text-xs text-zinc-400 mb-6 md:mb-0">More designs and case studies avaialable on request.</p>
      <div className="flex flex-row">
        <Link href={props.nextPath}>
          <div className="mr-4 group rounded-full bg-zinc-900 shadow-sm border border-zinc-800 hover:border-zinc-700 transition duration-150 ease-in-out text-xs px-4 py-2 flex flex-row items-center text-zinc-400 hover:text-zinc-50 w-fit">
            Next project: {props.nextProject}
          </div>
        </Link>
        <Link href='/'>
          <div className="mr-4 group rounded-full bg-zinc-900 shadow-sm border border-zinc-800 hover:border-zinc-700 transition duration-150 ease-in-out text-xs px-4 py-2 flex flex-row items-center text-zinc-400 hover:text-zinc-50 w-fit">
            Home
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectFooter;
