import Link from 'next/link'
import React from 'react'
import TransitionText from './transirionText/Transition'
import TransitionText2 from './TransitionText2'




export default function AboutMe({id}) {
  return (
    <div id={id} className='w-full p-20 md:flex border-b border-b-neutral-600'>
      <div className='w-full md:w-[50%] h-full md:p-20'>
        <TransitionText>
        <h1 className='text-[70px]'>ABOUT ME</h1>
        </TransitionText>
      </div>
      <div className='md:w-[50%] h-full md:p-7'>
        <TransitionText>
        <h2 className='my-10 text-2xl'>Frontend Software Engineer | Building Scalable UIs with React & Next.js</h2>
        </TransitionText>
        <TransitionText2>
        <p className='my-10 text-gray-500'>
            A results-driven Frontend Engineer with a deep command over the modern JavaScript stack, including React, Next.js, and advanced state management with Zustand. I focus on delivering pixel-perfect designs translated directly from concepts into functional code using Tailwind CSS for rapid, robust styling, often augmented by MUI for complex components. My expertise ensures high-performance, scalable UIs.

Beyond the Code:

My technical curiosity is mirrored by a passion for the humanities and continuous learning. I am an enthusiast of Theater, which sharpens my understanding of narrative and presentation, and I find creative release through Painting. In my free time, I fuel my intellectual curiosity with long hikes, where I immerse myself in in-depth political, historical, and medical podcasts, constantly seeking new perspectives to inform my approach to problem-solving and design.
        </p>
        </TransitionText2>
        <Link href={'https://github.com/farahheydari'}>
        <span className='border-b border-b-amber-400 text-amber-400'>MORE ABOUT ME</span>
        </Link>
      </div>
    </div>
  )
}
