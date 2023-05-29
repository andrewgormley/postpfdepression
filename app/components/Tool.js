import Image from 'next/image'

function Tool(props) {
  return (

    <a href={props.link} className="p-2 md:p-4 md:w-auto transition ease-in-out hover:-translate-y-1 duration-300" target="_blank" rel="noopener noreferrer">

      <Image
        className="h-4 w-auto"
        src={props.img}
        alt={props.imgALT}
        priority
        width={100}
        height={24}
      />

    </a>

  );
}

export default Tool;
