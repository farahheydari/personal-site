import React from 'react'
import TransitionText from './transirionText/Transition'
import TransitionText2 from './TransitionText2'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import TransitionImg from './transitionImg/TransitionImg'




export default function MyProject({id}) {
  const data =[
    { 
      title:'glasses-shop',
      description:'Discover our curated collection of designer frames and high-performance lenses. Seamless online shopping experience built with Next.js and Tailwind CSS.',
      image:'/glasses-shop.png',
      demo:'https://glasses-shop-three.vercel.app/',
      git:'https://github.com/farahheydari/glasses-shop'
    },
    { 
      title:'khanoomi',
      description:'Discover our curated collection of designer frames and high-performance lenses. Seamless online shopping experience built with Next.js and Tailwind CSS.',
      image:'/khanoomi.png',
      demo:'https://farahheydari.github.io/khanoomi/',
      git:"https://github.com/farahheydari/khanoomi"
    },
      { 
      title:'lepein',
      description:'Discover our curated collection of designer frames and high-performance lenses. Seamless online shopping experience built with Next.js and Tailwind CSS.',
      image:'/bread.png',
      demo:'https://farahheydari.github.io/AwwwardsProject/',
      git:'https://github.com/farahheydari/AwwwardsProject?tab=readme-ov-file'
    },
  ]

  return (
    <div id={id} className='w-full border-b border-b-neutral-600 p-5 md:p-15'>
      <div className='w-full h-[300px] md:h-[200px]  '>
        <TransitionText>
          <h1 className='text-6xl'>FEATURED PROJECTS</h1>
        </TransitionText>
        <TransitionText2>
        <p className='mt-5'>Here are some of the selected projects that showcase my passion for front-end development</p>
        </TransitionText2>
      </div>
      {/* addProject */}
      {data.map((val , i)=>(
      <div key={i}>
      <div className='w-full h-[100vh] md:h-[600px] md:flex '>
        <div className='w-full md:w-[50%] h-[30%] md:h-[80%] flex justify-center px-2 md:px-10  items-center bg-neutral-700 rounded-2xl' >
          <TransitionImg src={val.image} customStyle={{borderRadius:'15px'}}/>
        </div>
        <div className='w-full md:w-[50%] h-[50%] md:h-full  md:p-15'>
          <div className='border-b md:pb-5 border-b-gray-300'>
              <TransitionText>
                <h1 className='text-2xl'>{val.title}</h1>
              </TransitionText>
              <TransitionText2>
              <p className='text-[15px] my-10'>{val.description}</p>
              </TransitionText2>
              <span>PROJECT INFO</span>
          </div>
          <TransitionText2>
          <div className='flex justify-between py-3 border-b border-b-gray-300 *:text-[13px]'>
            <p>year</p>
            <span>2025</span>
          </div>
          </TransitionText2>
          <TransitionText2>
          <div className='flex justify-between py-3 border-b border-b-gray-300 *:text-[13px]' >
            <p>role</p>
            <span>front-endDeveloper</span>
          </div>
          </TransitionText2>
          <div className='flex h-[100px] justify-evenly items-center *:text-[13px] text-amber-300'>
            <Link href={val.demo}>
            <div className='flex border-b-amber-300 border-b '>
              <h3>LIVE DEMO</h3>
              <ArrowOutwardIcon/>
            </div>
            </Link>
            <Link href={val.git}>
            <div className='flex  border-b-amber-300 border-b'>
              <h3>SEE ON GITHUB</h3>
              <GitHubIcon/>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    ))}
    </div>
  )
}
