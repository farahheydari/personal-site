import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TransitionText2 from './TransitionText2';
import Image from 'next/image';
import Link from 'next/link';



export default function ShowMe() {

  return (

    <div className='w-full mt-20 md:flex h-[110vh] border-b border-b-gray-600  '>
      <div className='w-[90%] md:w-[50%] h-[50%] md:h-full'>
        <div className='w-full pt-10 h-full  ml-20'>
            <TransitionText2>
            <h1 className='text-2xl  md:text-[70px]'>HI,IAM<br/> FARAHNAZ HEYDARI.</h1>
            <p className='w-[150px] md:w-[400px]'>Im junior front-end developer passionate about building accessible and user friendly website</p>
            </TransitionText2>
        <div className='w-[200px] h-[80px] flex items-center justify-evenly *:hover:bg-amber-300 *:rounded-2xl *:duration-700 md:w-[300px] mt-10'>
           <Link href='https://t.me/Farahi420'> <h3 className='w-[100px] md:w-[150px] h-[50px] rounded-3xl flex justify-center items-center text-black bg-[#e7e977]'>Contact Me</h3></Link>
            <Link href='https://www.linkedin.com/in/farah-heydari-9a4737197?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><span className='w-[40px] h-[40px] rounded-3xl flex justify-center items-center bg-gray-500'><LinkedInIcon/></span></Link>
            <Link href='https://github.com/farahheydari'><span className='w-[40px] h-[40px] rounded-3xl flex justify-center items-center bg-gray-500'><GitHubIcon/></span></Link>
        </div>
        </div>
    
      </div>
        <div className='w-[90%] md:w-[50%]  h-[50%] md:h-full flex justify-center items-center '>
    <Image 
        src={'/prof2.png'} 
        alt="پروفایل فرحناز حیدری" 
        width={400} 
        height={500}
        style={{ width: '95%', height: '95%', objectFit: 'cover' , borderRadius:'15px'}}
        />
        </div>
    </div>

  )
}
