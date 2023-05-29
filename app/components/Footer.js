import Image from 'next/image'
import Socials from './Socials';

function Footer() {
  return(
    <div className="flex flex-col justify-center py-12">
      <div className="mx-auto max-w-5xl">
        <Socials/>
      </div>
      <p className="text-center text-zinc-400 text-xs mb-1">Designed and built from scratch over a weekend using Nextjs, Tailwind, Heroicons, SVGPorn and Google.</p>
      <p className="text-center text-zinc-400 text-xs">P.S. Please hire me, I need money for food and holidays.</p>
    </div>
  );
}

export default Footer;
