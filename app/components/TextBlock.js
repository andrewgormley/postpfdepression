import Image from 'next/image'

function TextBlock(props) {
  return (
    <div className="text-zinc-400">
      <h2 className="text-2xl mb-3">{props.title}</h2>
      <p className="mb-12 md:mb-24 leading-relaxed">{props.copy}</p>
    </div>
  );
}

export default TextBlock;
