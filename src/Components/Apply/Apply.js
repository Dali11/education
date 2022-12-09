import React, {useState} from 'react'
import Button from '../Button/Button'
import './Apply.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const data = [
    {
        header: 'about edu meeting',
        content: 'Mauris sit amet leo id ipsum luctus varius. Cras diam leo, bibendum eu egestas accumsan, rutrum ut augue. Morbi ut neque ut orci ullamcorper fringilla. Integer in diam sollicitudin elit interdum commodo. In mollis auctor diam, ac cursus mauris faucibus eu. Vestibulum iaculis luctus ultrices. Cras viverra velit vitae orci rhoncus, in facilisis augue euismod. ',
        id:1,
    },
    {
        header: 'about masters degree',
        content: 'Cras vestibulum sit amet mauris sit amet feugiat. Ut non leo in diam tristique tincidunt. Etiam sit amet risus nibh. Nullam pellentesque tellus est, ut feugiat ante porttitor ac. In id aliquet odio. Ut iaculis convallis felis, sit amet vehicula ex pellentesque vitae. Mauris ante sapien, egestas in congue vitae, eleifend non magna. Etiam et mi tellus. ',
        id:2,
    },
    {
        header: 'about online learning',
        content: 'Quisque lobortis pellentesque massa, ac porttitor felis malesuada vitae. Sed purus velit, eleifend eget placerat vestibulum, venenatis sed libero. Fusce scelerisque mollis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus pulvinar volutpat. Suspendisse in ultrices nulla, sit amet viverra felis. Praesent a venenatis mi.',
        id:3,
    },
    {
        header: 'how to apply',
        content: 'Vestibulum at eros vulputate, scelerisque purus sed, viverra risus. Nunc at risus urna. Cras ex nunc, malesuada in augue in, vehicula imperdiet dui. Integer a sapien condimentum, tempor arcu ut, tristique urna. Proin ut turpis eget augue faucibus scelerisque. Curabitur in ornare est. Aenean accumsan leo eget ipsum luctus, ac pharetra erat maximus. Nulla vel risus a ex sodales sagittis.',
        id:4,
    }
]

function Apply() {

    const [isDropDown, setisDropDown] = useState(-1)

    const handleDropdown = (i) => {
        setisDropDown(i)
    }

  return (
    <div className='main-apply pt-16 p-6 laptop:pt-24 laptop:p-16 flex flex-col laptop:flex-row ' id='apply'>

        <div className="apply-section flex flex-col gap-8">
            <div className="card-1 laptop:p-12 relative laptop:w-3/5 w-full">
                <div className="bold absolute top-0 bg-zinc-400 w-full h-full opacity-30"></div>
            <h1 className='text-2xl font-black pl-16 pt-8 laptop:pt-0 pb-1 text-white uppercase'>apply for bachelor degree</h1>
            <h4 className='text-white pl-16 text-lg p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
            quidem eos modi sunt nihil inventore minus praesentium cumque provident,</h4>
            <div className='pl-16 pb-8'><Button>join us now!</Button></div>
            </div>

            <div className="card-1 laptop:p-12 relative laptop:w-3/5 w-full">
                <div className="bold absolute top-0 bg-zinc-400 w-full h-full opacity-30"></div>
            <h1 className='text-2xl font-black pl-16 pb-1 pt-8 pr-2 laptop:pt-0 text-white uppercase'>apply for masters degree</h1>
            <h4 className='text-white pl-16 text-lg p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
            quidem eos modi sunt nihil inventore minus praesentium cumque provident,</h4>
            <div className='pl-16 pb-8'><Button>join us now!</Button></div>
            </div>
        </div>

        <div className="about-section laptop:w-1/2 mt-24 bg-white p-8 laptop:p-16 mb-24">
            {
                data.map((data,i) => {
                    return(
                        <div key={data.id}>
                            <h1 className='text-xl laptop:text-2xl capitalize font-bold cursor-pointer mt-8' onClick={() => handleDropdown(i)}>
                                {data.header} {(isDropDown !== i) ? <span><ArrowForwardIosIcon />  </span> : <span><KeyboardArrowDownIcon /></span>} 
                            </h1>
                            {
                                (isDropDown === i) ? <p className='text-lg text-orange-700'>{data.content}</p> :  <p className='text-lg'>{data.content.substring(0,40)}...</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Apply