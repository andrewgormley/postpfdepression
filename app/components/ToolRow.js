import Image from 'next/image'
import Tool from './Tool';

function ToolRow() {
  return (
    <div>

      <p className="w-full text-center text-xs text-zinc-400 mb-4">The stack that makes me happiest.</p>
      <div className="flex w-full justify-center pb-24 lg:pb-48">

        <Tool
          link={'https://nextjs.org/'}
          img={'/nextjs.svg'}
          imgALT={'Nextjs Logo'} />

        <Tool
          link={'https://tailwindcss.com/'}
          img={'/tailwindcss.svg'}
          imgALT={'Tailwind Logo'} />

        <Tool
          link={'https://github.com/'}
          img={'/github.svg'}
          imgALT={'Github Logo'} />

        <Tool
          link={'https://www.figma.com/'}
          img={'/figma.svg'}
          imgALT={'Figma Logo'} />

        <Tool
          link={'https://www.hotjar.com/'}
          img={'/hotjar.svg'}
          imgALT={'Hotjar Logo'} />

        <Tool
          link={'https://maze.co/'}
          img={'/maze.svg'}
          imgALT={'Maze Logo'} />

      </div>

    </div>
  );
}

export default ToolRow;
