import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Image from 'next/image';
import TransitionText from './transirionText/Transition';
import TransitionText2 from './TransitionText2';
export default function ConnectMe({id}) {
  return (
    <div id={id} className='w-full md:flex py-20  px-20'>
        <div className='w-[50%] '>
            <TransitionText>
            <h1 className='text-[50px]'>LETS CONNECT</h1>
            <div className='flex'> 
                <p>Say hello at </p>
                <Link href={'https://mail.google.com'}>
                <p className='underline text-amber-400'>farahheydar@gmail.com</p>
                </Link>
            </div>
            <div className='flex'>
                  <p>For more info,heres</p><p className='underline text-amber-400'> my resume</p>
            </div>
          </TransitionText>
        </div>
        <div className='w-[50%] p-7'>
        <TransitionText2>
            <div className='w-[300px] h-[50px]  *:mx-5'>
                <LinkedInIcon/>
                <InstagramIcon/>
                <TelegramIcon/>
            </div>
            <div className='md:mx-5'>
                <h3>address : Iren-Tehran</h3>
                <span>phone : 09044536956</span>
            </div>
            </TransitionText2>
        </div>
        <div>
            <Image src={'/prof1.jpg'} width={300} height={300} alt='farah' style={{borderRadius:'15px'}}/>
        </div>
    </div>
  )
}
