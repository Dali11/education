import React from 'react'
import './Courses.css'
import mainBg from '../../images/service-item-bg.jpg'
import course1 from '../../images/course-01.jpg'
import course2 from '../../images/course-02.jpg'
import course3 from '../../images/course-03.jpg'
import course4 from '../../images/course-04.jpg'
import Swipper from './Swiper.js/Swiper'



const image = [course1, course2, course3, course4]

const data = [
    {
        image: image[0],
        id:1,
        amount:"$22.00",
        rating:"rated",
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        image: image[1],
        amount:"$34.00",
        rating:"rated",
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
        id:2
    },
    {
        image: image[2],
        amount:"$18.00",
        rating:"rated",
        id:3,
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image: image[3],
        amount:"$68.00",
        rating:"rated",
        id:4,
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        image: image[0],
        amount:"$36.00",
        rating:"rated",
        id:5,
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        image: image[1],
        amount:"$12.00",
        rating:"rated",
        id:6,
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        image: image[2],
        amount:"$89.00",
        rating:"rated",
        id:6,
        descriptive: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
]



function Courses() {
  return (
    <div className='main-courses sticky p-6 laptop:pt-24 laptop:p-16' id='courses'>
        <div className="header">
            <h1 className='font-bold text-white uppercase text-2xl  mb-8'>our popular courses</h1>
            <hr />
        </div>
        <div className="cards-section">
            <Swipper data={data} image={image} />
        </div>
    </div>
  )
}

export default Courses