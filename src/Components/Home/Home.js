import React from 'react'
import video from '../../images/course-video.mp4'
import Button from '../Button/Button'
import './Home.css'
import Swipper from './Swiper/Swiper'
import Swiper from './Swiper/Swiper'
import mainBg from '../../images/service-item-bg.jpg'
import service1 from '../../images/service-icon-01.png'
import service2 from '../../images/service-icon-02.png'
import service3 from '../../images/service-icon-03.png'

const image = [service1, service2, service3]

const data = [
  {
    image: image[0],
    id: 1,
    header: "best student",
    descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earumquidem eos modi sunt nihil inventore minus praesentium cumque provident"
  },
  {
    image: image[1],
    header: "best teachers",
    descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earumquidem eos modi sunt nihil inventore minus praesentium cumque provident",
    id: 2
  },
  {
    image: image[2],
    id: 3,
    header: "best student",
    descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earumquidem eos modi sunt nihil inventore minus praesentium cumque provident"
  },
  {
    image: image[1],
    id: 4,
    header: "best education",
    descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earumquidem eos modi sunt nihil inventore minus praesentium cumque provident"
  },
  {
    image: image[0],
    id: 5,
    header: "online meeting",
    descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earumquidem eos modi sunt nihil inventore minus praesentium cumque provident"
  },
  {
    image: image[2],
    id: 6,
    header: "best Networking",
    descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A earumquidem eos modi sunt nihil inventore minus praesentium cumque provident"
  }
]



function Home() {
  return (
    <div id='/'>
      <div className='main h-full sticky'>
        <div className="absolute top-0 laptop:top-0 bg-black opacity-50 left-0 w-full h-full z-0"></div>
        <video src={video} autoPlay loop />

        <div className="content absolute top-60 flex flex-col justify-end items-start text-white laptop:w-1/2 pl-2 laptop:pl-24">
          <h2 className='font-bold uppercase text-xl pb-3'>hello students</h2>
          <h1 className='font-black uppercase text-2xl laptop:text-4xl pb-4'>welcome to education</h1>
          <p className='text-gray-100 laptop:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
            quidem eos modi sunt nihil inventore minus praesentium cumque provident,
            

          </p>
          <Button>join us now!</Button>
          
          
          
        </div>
      </div>
      <div className="sticky"><Swipper data={data} image={image} mainBg={mainBg} /></div>
    </div>
  )
}

export default Home