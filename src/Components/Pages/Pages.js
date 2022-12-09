import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import MeetingDetails from './MeetingDetails'
import Upcoming from './Upcoming'

function Pages() {
  return (
    <BrowserRouter>
        <Router>
            <Routes>
                <Route path='/meetingDetails' element={<MeetingDetails />} />
                <Route path='/upcoming' element={<Upcoming />} />
            </Routes>
        </Router>
    </BrowserRouter>
  )
}

export default Pages