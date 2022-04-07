import Head from 'next/head'
import Avatar from '../components/Avatar'
import {ViewGridIcon, MicrophoneIcon} from '@heroicons/react/solid'
import {SearchIcon} from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'

import { useRouter } from 'next/router'


export default function Home() {

  const inputRef = useRef(null)
  const router = useRouter()

  const search = e =>{
    e.preventDefault();
    const term = inputRef.current.value;

    if(!term){
      return
    }

    router.push(`/search?term=${term}`)

  }




  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Search Engine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className='flex justify-between w-full p-5 text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          {/* left section */}
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          {/* right section */}
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon
          className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'
          />


          {/* Avatar */}
          <Avatar 
          url="https://cdn.dribbble.com/users/1040983/screenshots/5578298/media/9386c308d2817a9721dec7bb1b4617d8.png?compress=1&resize=400x300"
          />
        </div>
      </header>


      {/* Body */}
      <form className='flex flex-col items-center mt-36 flex-grow w-4/5'>
        <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        alt="google logo"
        width={300}
        height={100}
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl transition-all duration-500'>
          <SearchIcon
          className='h-5 mr-3 text-gray-500'
          />
          <input type="text" className='focus:outline-none flex-grow' 
          ref={inputRef}/>
          <MicrophoneIcon
          className='h-5'
          />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn' onClick={search}>Google Search</button>
          <button className='btn' onClick={search}>I&apos;m Feeling Lucky</button>
        </div>
      </form>


      {/* footer */}
      <Footer/>
    </div>
  )
}
