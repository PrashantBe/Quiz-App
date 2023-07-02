'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

//components
import Button from "@/components/Button/Button";
//Homepage Image
import homepageImage from '../assets/home-pic.png';

const Home = () => {
  const router = useRouter();
  
  const handleButtonClick = () => router.push('/quiz');

  return (
    <div className='text-center'>
      <p className='text-white p-4'>Do you have what it takes to become the React-Quiz master</p>
    <Image className='max-width-[700px] w-full rounded-[10px] ' src={homepageImage} alt = 'home-page' />
    <p className='text-[#9f50ac] pt-2 pb-8 text-[10px]'>Image from Unsplash by Milad Fakuria</p>
    <Button text="Start Quiz" onClick={handleButtonClick}/>
    </div>
  );
};

export default Home;
