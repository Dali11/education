import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'

function Dropdown() {
    const [dropdown, setdropdown] = useState(false)
  return (
    <div className='dropdown'>
        <ul 
        
        className=
        {
            (dropdown) ? ' hidden' : "bg-white z-50 text-black p-3 absolute space-y-3 cursor-pointer font-bold transition-all ease-in duration-300"
            }
        >
            <li onClick={() => Navigate('/upcoming')} className='hover:text-orange-700'>upcoming meeting</li>
            <li className='hover:text-orange-700'>meeting details</li>
        </ul>
    </div>
  )
}

export default Dropdown