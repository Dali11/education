import React from 'react'
import Button from '../Button/Button'
import './Contact.css'

function Contact() {
    return (
        <div className="" id='contact'>
            <div className='contact p-2 laptop:p-24 grid laptop:grid-rows-2 laptop:grid-cols-4 gap-8 '>
                <div className="form col-span-3 p-10 mt-16 bg-white rounded-lg laptop:w-95">
                    <div className="header mb-8">
                        <h1 className='text-2xl font-black uppercase'>let's get in touch</h1>
                    </div>
                    <span><hr /></span>
                    <form className='mt-8'>
                        <div className="input">
                            <input className='bg-zinc-100 border border-gray-200 rounded-2xl p-2 mb-2 laptop:p-1 mr-2 shadow-sm' type="text" placeholder='YOUR NAME...*' required />
                            <input className='bg-zinc-100 border border-gray-200 rounded-2xl p-2 mb-2 laptop:p-1 mr-2 shadow-sm' type="email" name="" id="" placeholder='YOUR EMAIL...' />
                            <input className='bg-zinc-100 border border-gray-200 rounded-2xl p-2 mb-2 laptop:p-1 mr-2 shadow-sm' type="text" name="" id="" placeholder='SUBJECT...*' required />
                        </div>
                        <div className="text-field mt-4">
                            <textarea className='bg-zinc-100 border border-gray-200 rounded-2xl p-1 mr-2 shadow-sm' name="" id="" cols="30" rows="5" placeholder='YOUR MESSAGE'></textarea>
                        </div>
                        <div className="ml-16 laptop:ml-0"><Button>send message now</Button></div>
                    </form>
                </div>

                <div className="about-section row-span-2 mb-24 laptop:0 ml-16 laptop:ml-0 laptop:h-1/2 mt-9 bg-red-900 p-6 text-white rounded-lg">
                    <div className="content laptop:mt-16 flex flex-col justify-center text-center">
                        <div className="section1 h-">
                            <h1 className='text-xl font-black capitalize'>phone number</h1>
                            <h1 className='mb-4 text-xl font-black'>010-020-0340</h1>
                        </div>
                        <span ><hr /></span>

                        <div className="section1 mt-4">
                            <h1 className='text-xl font-black capitalize'>email adress</h1>
                            <h1 className='mb-4 text-xl font-black'>info@meeting.edu</h1>
                        </div>
                        <span ><hr /></span>

                        <div className="section1 mt-4">
                            <h1 className='text-xl font-black capitalize'>street adress</h1>
                            <h1 className='mb-4 text-xl font-black'>Rio de Janeiro - RJ, 22795-008, Brazil</h1>
                        </div>
                        <span ><hr /></span>

                        <div className="section1 mt-4">
                            <h1 className='text-xl font-black capitalize'>Website URL</h1>
                            <h1 className='mb-4 text-xl font-black'>www.meeting.edu</h1>
                        </div>
                        <span ><hr /></span>
                    </div>
                </div>
            </div> 
        </div>

    )
}

export default Contact