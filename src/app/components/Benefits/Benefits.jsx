"use client"

import Container from '@/app/utils/Container';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Benefits = () => {
  const playerWidth = typeof window !== 'undefined' && window.innerWidth >= 768 ? 500 : 300;
  const Benefits = [
    {
      "id": 1,
      "description": "Effortless PDF Management for Time Savings"
    },
    {
      "id": 2,
      "description": "Securely Handle Sensitive Documents"
    },
    {
      "id": 3,
      "description": "Versatile Support for Various File Formats"
    },
    {
      "id": 4,
      "description": "User-Friendly Interface for a Smooth Experience"
    },
    {
      "id": 5,
      "description": "Responsive Customer Support for Your Needs"
    },
    {
      "id": 6,
      "description": "Stay Updated with Innovative Features Regularly"
    }
  ]

  return (
    <Container>
      <div className='md:flex grid justify-center items-center  my-12'>
        <div className=' ml-2 md:w-1/2'>
          <ReactPlayer width={playerWidth} url='https://www.youtube.com/watch?v=En1TDojx8KY' />
        </div>
        <div className='text-center col-span-1 md:w-1/2'>
          <p className='md:text-5xl text-3xl text-black font-bold my-4'>Benefits</p>
          <ol className='md:text-xl text-xs  text-black my-4 '>
            {
              Benefits.map(data => (
                <li
                  key={data.id}
                  className='my-2 '
                >
                  {data.id}
                  <span> .</span>
                  {data.description}
                </li>
              ))
            }
            {/* <li>1. Effortless PDF Management for Time Savings</li>
            <li>2. Securely Handle Sensitive Documents</li>
            <li>3. Versatile Support for Various File Formats</li>
            <li>4. User-Friendly Interface for a Smooth Experience</li>
            <li>5. Responsive Customer Support for Your Needs</li>
            <li>6. Stay Updated with Innovative Features Regularly</li> */}
          </ol>
        </div>
      </div>
    </Container>
  );
};

export default Benefits;
