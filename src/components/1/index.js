import React from 'react'
import Search from '../../assets/images/Search.png'
import Tick from '../../assets/images/Tick_s.png'
import './One.css'

export default function One({ title, prop, number, Img }) {
    console.log(prop);
    return (
        <div className='container_one'>
            <div className="one_1">
                <div className="card">
                    <p>{number}</p>
                    <div>
                        <img src={Img} alt="" className='search' />
                        <img src={Tick} alt="" className='tick' />
                    </div>
                </div>
                {
                    prop ? <button className='card_btn'>{title}</button> : <button className='card_btn1'>{title}</button>
                }

            </div>
        </div>
    )
}
