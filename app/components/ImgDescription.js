import Image from 'next/image'

function ImgDescription(props) {
  return (
    <p className="mb-12 md:mb-24 mt-6 text-center text-xs text-zinc-400">{props.copy}</p>
  );
}

export default ImgDescription;
