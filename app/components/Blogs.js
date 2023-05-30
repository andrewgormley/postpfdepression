import Image from 'next/image'
import parse from 'html-react-parser';

function Blogs() {
  return (
    <div className="pb-12 lg:pb-24">
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
        {
          fetch('https://lifestyleofthecreative.com/ghost/api/content/posts/?key=0bb1f2920f5f372d1c0e71f8f3&fields=title,url,feature_image,published_at,excerpt,html,reading_time&limit=3')
          .then(response => response.json())
          .then(result => {
            let posts = result['posts']
            let postHTML = ''
            for (var i = 0; i < posts.length; i++) {
              postHTML += `<a href="${posts[i].url}" className="group overflow-hidden" target="_blank">
              <div className="h-60 lg:h-48 mb-4 overflow-hidden bg-cover opacity-100 group-hover:opacity-80 transition duration-150 ease-in-out" style="background-image: url(${posts[i].feature_image})"></div>
              <h3 className="mb-1 text-justify">${posts[i].title}</h3>
              <p className="text-xs text-zinc-400 mb-4 line-clamp-3 text-justify">${posts[i].excerpt}</p>
              <div class="flex items-center justify-between">
              <p className="text-xs text-zinc-400">${posts[i].reading_time} min read</p>
              <div class="flex items-center">
              <p className="text-xs text-zinc-400 group-hover:text-zinc-50 transition duration-150 ease-in-out">Read blog</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 w-3 h-3 fill-zinc-400 group-hover:fill-green-400 transition duration-150 ease-in-out">
                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
              </svg>
              </div>

              </div>


              </a>`
            }
            return parse(postHTML)
          })}
      </div>

      <a href="https://www.lifestyleofthecreative.com/" target="_blank" className="mt-12 mx-auto group rounded-full bg-zinc-900 shadow-sm border border-zinc-800 hover:border-zinc-700 transition duration-150 ease-in-out text-xs px-4 py-2 flex flex-row items-center text-zinc-400 hover:text-zinc-50 w-fit">
        Lifestyle of the Creative blog
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-2 fill-zinc-400 group-hover:fill-green-400 transition duration-150 ease-in-out">
          <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
        </svg>
      </a>
    </div>

  );
}

export default Blogs;
