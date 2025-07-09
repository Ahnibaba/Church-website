import Link from "next/link";
import Image from "next/image";

type WelcomeCard = {
  image: string;
  title: string;
  desc: string;
  link: string;
};

export const Welcoming = () => {
  const welcomingData: WelcomeCard[] = [
    {
      image: "/church1.jpg",
      title: "ABOUT OUR CHURCH",
      desc: "I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click &apos;Edit Text&apos; or double click me to add your own content and make changes to the font.",
      link: "about"
    },
    {
      image: "/church2.jpg",
      title: "YOUTH CHURCH",
      desc: "I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click &apos;Edit Text&apos; or double click me to add your own content and make changes to the font.",
      link: "youth"
    },
    {
      image: "/church3.jpg",
      title: "TEENS CHURCH",
      desc: "I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click &apos;Edit Text&apos; or double click me to add your own content and make changes to the font.",
      link: "teens"
    }
  ];
  
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
              I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just click &quot;Edit Text&quot; or
              double click me to add your own content and make changes to the font.
              I&apos;m a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 w-full">
            {welcomingData.map((item: WelcomeCard, index) => (
              <div 
                key={index} 
                className={`w-full flex flex-col bg-[#D3CCBA]/20 hover:shadow-lg transition-shadow duration-300
                  ${index === welcomingData.length - 1 ? "md:col-span-2 md:max-w-md lg:col-span-1" : ""}`}
              >
                <div className="w-full aspect-[4/3] relative">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
  );
};