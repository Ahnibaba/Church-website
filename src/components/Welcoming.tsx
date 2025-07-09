import Link from "next/link";

type welcome = {
  "image": string;
  "title": string;
  "desc": string;
  "link": string;
}

export const Welcoming = () => {
  const welcomingData: welcome[] = [
    {
      image: "https://static.wixstatic.com/media/3b1f25_6fa7e5a4b696428e83a1b2619086ee32.jpg/v1/fill/w_296,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_6fa7e5a4b696428e83a1b2619086ee32.jpg",
      title: "ABOUT OUR CHURCH",
      desc: "I'm a paragraph. Click here to add your own text and edit me.It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.",
      link: "about"
    },
    {
      image: "https://static.wixstatic.com/media/3b1f25_678daf7b0bfc46e0ba184ef4ca990dec.jpg/v1/fill/w_296,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_678daf7b0bfc46e0ba184ef4ca990dec.jpg",
      title: "YOUTH CHURCH",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.",
      link: "youth"
    },
    {
      image: "https://static.wixstatic.com/media/8425ecadf47444dfb40f79663d4cb9c5.jpg/v1/fill/w_298,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8425ecadf47444dfb40f79663d4cb9c5.jpg",
      title: "TEENS CHURCH",
      desc: "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.",
      link: "teens"
    }
  ]
  
  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm md:max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl mb-12">
            <h1 className="text-center font-extralight text-4xl sm:text-5xl tracking-wider font-playFair text-[#EE4B2B]">
              Welcoming You Home
            </h1>
          </div>

          <div className="w-full max-w-3xl mb-12">
            <p className="text-center font-roboto text-gray-700">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or
              double click me to add your own content and make changes to the font.
              I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {welcomingData.map((item: welcome, index) => (
              <div 
                key={index} 
                className="flex flex-col bg-[#D3CCBA]/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full aspect-w-4 aspect-h-3">
                  <img 
                    className="w-full h-full object-cover" 
                    src={item.image} 
                    alt={item.title} 
                  />
                </div>
                
                <div className="p-6 flex flex-col items-center">
                  <h2 className="text-center font-extralight text-2xl tracking-wider font-playFair text-[#EE4B2B] whitespace-nowrap">
                    {item.title}
                  </h2>
                  <hr className="mt-6 mb-4 w-16 border-t border-gray-300" />
                  <p className="text-center text-gray-700 mb-4">
                    {item.desc}
                  </p>
                  <Link 
                    href={`/${item.link}`} 
                    className="flex items-center gap-1 uppercase tracking-tight text-xs text-[#EE4B2B] mt-4 hover:underline"
                  >
                    <span>more info</span>
                    <span>{">>"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}