import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
 AiFillTwitterCircle,
 AiFillLinkedin,
 AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";


export default function Home() {

 const [darkMode, setDarkMode] = useState(false)

 return (
  <div className={darkMode ? 'dark' : ''}>
   <Head>
    <title>PortFolio Next Js</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
    <section className=" min-h-screen">
     <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font">Developed by Me</h1>
      <ul className="flex items-center">
       <li>
        <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
       </li>
       <li>
        <a
         href="#"
         className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
        >
         Resume
        </a>
       </li>
      </ul>
     </nav>
     <div className="text-center p-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
       Andrew Marco
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl">Developer and designer</h3>
      <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
       Freelancer, providing services for programming and design content
       needs
      </p>
     </div>
     <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <AiFillTwitterCircle />
      <AiFillLinkedin />
      <AiFillYoutube />
     </div>
     <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
      <Image
       src={
        "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       }
       alt="person image"
       // layout='fill'
       objectFit="cover"
       width="192"
       height="288"
       layout="fill"
       priority
      />
     </div>
    </section>

    <section>
     <div>
      <h3 className="text-3xl py-1">Services I Offer</h3>
      <p className="text-md py-2 leading-8 text-gray-800">
       Since the beginning of my journey as freelance designer and
       developer i have done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create products for both business and consumer use
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
       I offer from a wide range of services, including programming and teaching
      </p>
     </div>
     <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
       <Image
        className="rounded-xl"
        src={'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        width="100"
        height="100"
       />
       <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
       <p className="py-2">Creating elegant designs suited for your needs design theory.</p>
       <h4 className="py-4 text-teal-600">Design tools i use</h4>
       <p className="text-gray-800 py-1">Vs Code</p>
       <p className="text-gray-800 py-1">Figma</p>
       <p className="text-gray-800 py-1">Canva</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
       <Image
        className="rounded-xl"
        src={'https://images.pexels.com/photos/48606/pexels-photo-48606.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        width="100"
        height="100"
       />
       <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
       <p className="py-2">Creating elegant designs suited for your needs design theory.</p>
       <h4 className="py-4 text-teal-600">Design tools i use</h4>
       <p className="text-gray-800 py-1">Vs Code</p>
       <p className="text-gray-800 py-1">Figma</p>
       <p className="text-gray-800 py-1">Canva</p>
      </div>
      <div className="text-center shadow-lg p-10 rounded-xl my-10">
       <Image
        className="rounded-xl"
        src={'https://images.pexels.com/photos/907487/pexels-photo-907487.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        width="100"
        height="100"
       />
       <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
       <p className="py-2">Creating elegant designs suited for your needs design theory.</p>
       <h4 className="py-4 text-teal-600">Design tools i use</h4>
       <p className="text-gray-800 py-1">Vs Code</p>
       <p className="text-gray-800 py-1">Figma</p>
       <p className="text-gray-800 py-1">Canva</p>
      </div>
     </div>
    </section>
    <section>
     <div>
      <h3 className="text-3xl py-1">Portfolio</h3>
      <p className="text-md py-2 leading-8 text-gray-800">
       Since the beginning of my journey as freelance designer and
       developer i have done remote work for <span className="text-teal-500">agencies</span> consulted for <span className="text-teal-500">startups</span> and collaborated with talented people to create products for both business and consumer use
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
       I offer from a wide range of services, including programming and teaching
      </p>
     </div>
     <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1">
       <Image className="rounded-lg object-cover"
        src={'https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        // layout="fill"
        width='800'
        height='600'
       />
      </div>
      <div className="basis-1/3 flex-1">
       <Image className="rounded-lg object-cover"
        src={'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        // layout="fill"
        width='800'
        height='600'
       />
      </div>
      <div className="basis-1/3 flex-1">
       <Image className="rounded-lg object-cover"
        src={'https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        // layout="fill"
        width='800'
        height='600'
       />
      </div>
      <div className="basis-1/3 flex-1">
       <Image className="rounded-lg object-cover"
        src={'https://images.pexels.com/photos/291777/pexels-photo-291777.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        // layout="fill"
        width='800'
        height='600'
       />
      </div>
      <div className="basis-1/3 flex-1">
       <Image className="rounded-lg object-cover"
        src={'https://images.pexels.com/photos/2833666/pexels-photo-2833666.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'}
        alt='notebook'
        // layout="fill"
        width='800'
        height='600'
       />
      </div>
     </div>

    </section>
   </main>
  </div>
 );
}
