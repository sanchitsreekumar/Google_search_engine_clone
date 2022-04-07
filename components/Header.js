import React, { useRef } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const inputRef = useRef();

    const clearInput = () =>{
        inputRef.current.value = ""
    }

    const searchItem = (e) =>{
        e.preventDefault();

        const term = inputRef.current.value;

        if(!term){
            return
        }
        
        router.push(`/search?term=${term}`)

    }


  return (
  <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={()=> router.push('/')}
        />
        <form className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow'>
            <input type="text" ref={inputRef} className='flex-grow w-full focus:outline-none'
            />
            <XIcon className='h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3'
            onClick={clearInput}
            />
            <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300'
            />
            <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'
            />
            <button hidden type="submit" onClick={searchItem}>Search</button>
        </form>
        <Avatar 
        className="ml-auto"
        url="https://cdn.dribbble.com/users/1040983/screenshots/5578298/media/9386c308d2817a9721dec7bb1b4617d8.png?compress=1&resize=400x300"/>
    </div>


    {/* Header options */}
    
    <HeaderOptions/>



  </header>
  )
}

export default Header;
