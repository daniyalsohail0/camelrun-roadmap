/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Roadmap = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 5000;
    }
    
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 5000;
    }

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-[#FBF0DB] to-[#BFB6A3] h-screen'>
        <img className='absolute top-0' src='/border-top.png' alt='' />
        <div className='flex flex-col justify-center items-center'>
            <img className='absolute top-20 m-3 p-3 cursor-pointer' src='/roadmap.png' width={535} height={72} alt=''/>
            <br></br>
            <div className='relative flex justify-center items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 ease-in-out duration-300' onClick={slideLeft} size={40} />
                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide w-5/6'>
                    <img className='inline-block p-2' src='/RoadMapImage&Contents.png' width={2604.64} height={393.37} alt=''/>
                    <img className='inline-block p-2' src='/RoadMapImage&Contents2.png' width={2604.64} height={393.37} alt=''/>
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 ease-in-out duration-300' onClick={slideRight} size={40} />
            </div>
        </div>
        <img className='absolute bottom-0' src='/border-bottom.png' alt='' />
    </div>
  )
}

export default Roadmap