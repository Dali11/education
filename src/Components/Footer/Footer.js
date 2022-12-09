import React from 'react'
import './Footer.css'
import ScrollToTop from 'react-scroll-to-top'

function Footer() {
  return (
    <div className='footer '>
      <ScrollToTop>to top</ScrollToTop>
        <span><hr /></span>
        <div className="content mt-16 text-center pb-10 flex flex-col items-center">
            <h3 className='text-white font-bold uppercase pb-8'>copyright <span>&copy;</span> 2022 edu meeting co.,ltd.all rights reserved.</h3>
            <h3 className='text-white font-bold uppercase'>developer: <span className='lowercase text-yellow-600'>dalikamphani11@gmail.com</span></h3>
        </div>
    </div>
  )
}

export default Footer