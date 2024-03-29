import React from 'react'
import Icon from '../../assets/images/Phone.svg'
import './phone.css'

export default function Phone() {
    return (
        <div className='phone_number'>
            <p>Ответим на ваши <br /> вопросы прямо сейчас</p>
            <img src={Icon} alt="" className='img' />
        </div>
    )
}
