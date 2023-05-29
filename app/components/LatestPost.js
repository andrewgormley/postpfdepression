import Image from 'next/image'
import parse from 'html-react-parser';

function LatestPost() {
  return (
    <div className="">
      {
        fetch('https://lifestyleofthecreative.com/ghost/api/content/posts/?key=0bb1f2920f5f372d1c0e71f8f3&fields=title,url&limit=1')
        .then(response => response.json())
        .then(result => {
          let posts = result['posts']
          let postHTML = ''
          for (var i = 0; i < posts.length; i++) {
            postHTML += `<a href="${posts[i].url}" className="group rounded-full bg-zinc-900 shadow-sm border border-zinc-800 hover:border-zinc-700 transition duration-150 ease-in-out text-xs px-4 py-2 flex flex-row items-center text-zinc-400 hover:text-zinc-50 w-fit" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-2 fill-zinc-400 group-hover:fill-zinc-50 transition duration-150 ease-in-out">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              Latest blog: ${posts[i].title}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-2 fill-zinc-400 group-hover:fill-green-400 transition duration-150 ease-in-out">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
              </svg>
              </a>`
          }
          return parse(postHTML)
        })}
    </div>
  );
}

export default LatestPost;
