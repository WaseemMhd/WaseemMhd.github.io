import './Workcard.css'
import '../index.css'
import cardData from './Carddata';
import Card from './Card'

import React from 'react'

function Workcard() {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
       {cardData.map((value,index)=>
        (
            <Card 
                key={index}
                image={value.image}
                title={value.title}
                text={value.text}
                link={value.link}
            />
        )
       )

       }
      </div>
    </div>
  )
}

export default Workcard



