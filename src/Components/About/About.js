import React from 'react'
import './About.css'
import videoItem from '../../images/video-item-bg.jpg'
import play from '../../images/play-icon.png'
import Counter from '../Counter/Counter'


function About() {
    return (
        <div className='about laptop:p-10'>
            <div className="header pt-24">
                <h1 className='text-5xl text-white font-black laptop:w-1/2 capitalize'>A few facts about our university</h1>
            </div>

            <div className="cards  flex flex-col laptop:flex-row justify-evenly pt-24 gap-24">

                <div className="about p-4 grid laptop:grid-cols-2 gap-4 grid-rows-4">
                    <div className="card1 bg-slate-700 h-40  laptop:w-60 p-4 opacity-50 rounded-lg  flex flex-col justify-center text-cente">
                        <h1 className='text-yellow-400 text-3xl ml-24 laptop:ml-16 font-black'><Counter start={12} end={94}/>%</h1>
                        <h3 className='text-white text-2xl capitalize ml-12 laptop:ml-0'>succesed students</h3>
                    </div>

                    <div className="card1 bg-slate-700 h-40 laptop:w-60 p-4 opacity-50 rounded-lg  flex flex-col justify-center text-cente">
                        <h1 className='text-yellow-400 text-3xl ml-24 laptop:ml-16 font-black'><Counter start={500} end={2345}/></h1>
                        <h3 className='text-white text-2xl capitalize ml-12 laptop:ml-0'>new students</h3>
                    </div>

                    <div className="card1  bg-slate-700 h-40 laptop:w-60 p-4 opacity-50 rounded-lg  flex flex-col justify-center text-cente">
                        <h1 className='text-yellow-400 text-3xl ml-24 laptop:ml-16 font-black'><Counter start={18} end={126}/></h1>
                        <h3 className='text-white text-2xl capitalize ml-12 laptop:ml-0'>current teacher</h3>
                    </div>

                    <div className="card1 bg-slate-700 h-40 laptop:w-60 p-4 opacity-30 rounded-lg  flex flex-col justify-center text-cente">
                        <h1 className='text-yellow-400 text-3xl ml-24 laptop:ml-16 font-black'><Counter start={0} end={32}/></h1>
                        <h3 className='text-white text-2xl capitalize ml-16 laptop:ml-12'>awards</h3>
                    </div>

                    
                </div>


                <div className="video relative">
                    <a href="https://www.youtube.com/watch?v=ChXzJJJ8S9s">
                        <img src={videoItem} alt={videoItem} />
                    </a>
                    <img className='absolute top-28 laptop:top-52 left-36 laptop:left-64 cursor-pointer' src={play} alt={play} />
                </div>
            </div>
        </div>
    )
}

export default About