import React from 'react'
import './road.css'
import bone from'../assets/bone-removebg-preview.png'

const Road = () => {
    return (
        <div className='road-map'>
           <div className='dot'>
               <img src={bone}/>
           </div>

            <div className='dot'>
                <img src={bone}/>
            </div>

            <div className='dot'>
                <img src={bone}/>
            </div>

            <div className='dot'>
                <img src={bone}/>
            </div>

        </div>
    )

}

export default Road
