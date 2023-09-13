import  './BackGroundImgStyle.css'

import React from 'react'

export default function BackGroundImg(props) {
  return (
    <div>
      <div className='bg-image'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>

      </div>
    </div>
  )
}

