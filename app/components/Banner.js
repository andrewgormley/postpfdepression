'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';

function Banner() {
  return (
    <div className="text-2xl md:text-4xl">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hey, I'm Andrew")
            .pauseFor(1500)
            .deleteAll()
            .typeString("Oi, eu sou André")
            .deleteAll()
            .typeString("Salut, je suis André")
            .start();
        }}
      />
      <h1 className="text-zinc-400 mt-4 mb-8 leading-snug">An experienced remote designer based in Devon, England with over 10 years experience in NaaS, SaaS, video, ecom, fintech, branding and advertising.</h1>
    </div>
  );
}

export default Banner;
