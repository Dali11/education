import React from 'react'
import Button from '../Button/Button'
import './Meeting.css'
import meeting1 from '../../images/meeting-01.jpg'
import meeting2 from '../../images/meeting-02.jpg'
import meeting3 from '../../images/meeting-03.jpg'
import meeting4 from '../../images/meeting-04.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom'

const image = [meeting1, meeting2, meeting3, meeting4]

const data = [
    {
        id: 1,
        image: image[0],
        title: "new lecture meeting",
        descriptive: "Morbi in libero blandit lectuscursus ullamcorper.",
        date: 10,
        month: "nov",
        amount: "$22.00"
    },
    {
        id: 2,
        image: image[1],
        title: "online teaching",
        descriptive: "Morbi in libero blandit lectuscursus ullamcorper.",
        date: 24,
        month: "nov",
        amount: "$36.00"
    },
    {
        id: 3,
        image: image[2],
        title: "higher education conference",
        descriptive: "Morbi in libero blandit lectuscursus ullamcorper.",
        date: 26,
        month: "nov",
        amount: "$48.00"
    },
    {
        id: 4,
        image: image[3],
        title: "student training meetup",
        descriptive: "Morbi in libero blandit lectuscursus ullamcorper.",
        date: 30,
        month: "nov",
        amount: "$14.00"
    }

]

function Meeting() {
    return (
        <div className='meeting p-2 mt-24 laptop:p-16' id='meeting'>
            <div className="container">
                <h1 className='font-bold text-white uppercase text-2xl flex justify-center mt-10 mb-8'>upcoming  meetings</h1>
                <div className='mt-8'><hr /></div>
                <div className="cards-container mt-10 flex flex-col laptop:flex-row gap-20">
                    <div className="category pb-8 h-full bg-white flex justify-center flex-col p">
                        <h1 className='text-xl pt-5 laptop:pt-0 pb-10 uppercase font-bold'>meeting categories</h1>
                        <ul className='ml-8 flex  gap-4 mb-5 flex-col'>
                            <li className='hover:text-red-600'><ArrowRightAltIcon sx={{ color: 'red' }} /><a href="#">sed tempus enim leo</a></li>
                            <li className='hover:text-red-600'><ArrowRightAltIcon sx={{ color: 'red' }} /><a href="#">Aenean molestie quis</a></li>
                            <li className='hover:text-red-600'><ArrowRightAltIcon sx={{ color: 'red' }} /><a href="#">Cras et metus vestibulum</a></li>
                            <li className='hover:text-red-600'><ArrowRightAltIcon sx={{ color: 'red' }} /><a href="#">Nam et condimentum</a></li>
                            <li className='hover:text-red-600'><ArrowRightAltIcon sx={{ color: 'red' }} /><a href="#">Phasellus nec sapien</a></li>
                        </ul>
                        <Button>all upcoming meetings</Button>
                    </div>

                    <div className="cards grid w-full  grid-cols-1 laptop:grid-cols-2 gap-8">
                        {
                            data.map((data) => {
                                return (
                                    <div className="card relative shadow-2xl" key={data.id}>
                                        <Link to={'/details/' + data.id}>
                                            <img className='w-full' src={data.image} alt={data.image} />
                                            <span className='bg-white p-2 font-bold text-lg rounded-md absolute top-0'>{data.amount}</span>

                                            <div className="items bg-white flex  gap-6 p-4">
                                                <div className="date flex flex-col">
                                                    <span className='text-lg text-red-700 font-bold capitalize'>{data.month}</span>
                                                    <span className='text-xl font-bold  capitalize'>{data.date}</span>
                                                </div>
                                                <div className="content">
                                                    <h1 className='text-xl font-bold pb-3 capitalize'>{data.title}</h1>
                                                    <p>{data.descriptive}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Meeting