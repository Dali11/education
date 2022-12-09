import React,{useState} from 'react'

function Button(props) {
  const [tooltip, settooltip] = useState(false)
  return (

    <div>
         <button className='mt-4 p-2 rounded-md text-lg uppercase text-white font-bold bg-red-700 hover:bg-white hover:text-black' title="sorry we currently unavailable now">{props.children}</button>
    </div>
  )
}

export default Button