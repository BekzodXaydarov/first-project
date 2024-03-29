import React from 'react'
import './btn1.css'

export default function button1({ title, prop }) {
    return (
<>
        {
            prop ? <button className = 'btn1'>{ title }</button> : <button className='btn2'>{title}</button>
}
</>
    )
}
