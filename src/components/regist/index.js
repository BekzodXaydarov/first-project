import React from 'react'
import Button1 from "../button1/index";
import './regis.css'

export default function index() {
    return (
        <div className='regis_card'>
            <h2>Забери свою скидку прямо сейчас</h2>
            <form>
                <input type="text" placeholder='Ваше имя' /><br />
                <input type="text" placeholder='Ваш телефон' /><br />
                <Button1 title='Получить скидку' />
            </form>
        </div>
    )
}
