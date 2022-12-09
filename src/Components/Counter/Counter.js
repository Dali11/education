import React from 'react'
import CountUp from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'

function Counter({start,end}) {
  return (
    <CountUp start={start} end={end} duration={2} decimal={0}>
        {({countUpRef,start}) => (
            <ReactVisibilitySensor onChange={start}>
                <span ref={countUpRef}/>
            </ReactVisibilitySensor>
        )}
    </CountUp>
  )
}

export default Counter