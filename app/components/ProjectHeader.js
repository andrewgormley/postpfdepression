import Image from 'next/image'

function ProjectHeader(props) {
  return (
    <div>
      <h1 className="text-4xl mb-6 mt-12 md:mt-24">{props.title} <span class="text-zinc-400">— {props.description}</span></h1>
      <p className="text-zinc-400 mb-6">{props.role}</p>
      <p className="mb-12 md:mb-24 leading-relaxed">{props.copy}</p>
    </div>
  );
}

export default ProjectHeader;
