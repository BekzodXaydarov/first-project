import React from "react";
import Button1 from "./components/button1/index";
import Phone from "./components/zvonok/index";
import One from './components/1/index'
import VideoComponent from './components/video/index'
import Regis from './components/regist/index'
import Logo from './assets/images/Logo.png'
import Whatsap from './assets/images/whatssap.png'
import Telegram from './assets/images/Telegram.png'
import Phone2 from './assets/images/Phone2.png'
import Star from './assets/images/star.png'
import Header_Logo from './assets/images/header_logo.png'
import Shader from './assets/images/shader.png'
import Shader3 from './assets/images/shader3.png'
import Search from './assets/images/Search.png'
import Img_1 from './assets/images/img_1.png'
import Img_2 from './assets/images/img 04.png'
import Img_3 from './assets/images/img_2.png'
import Img_4 from './assets/images/img_3.png'
import Img_5 from './assets/images/img_4.png'
import Img_6 from './assets/images/img_5.png'
import Whatsap2 from './assets/images/whatsap2.png'
import Box_img from './assets/images/box_img.png'
import Tick from './assets/images/Tick_s.png'
import home1 from './assets/images/home1.png'
import home2 from './assets/images/home2.png'
import home3 from './assets/images/home3.png'
import home4 from './assets/images/home4.png'
import home5 from './assets/images/home5.png'
import home6 from './assets/images/home6.png'
import vedio1 from './assets/images/video.jpg'
import vedio2 from './assets/images/video2.jpg'
import vedio3 from './assets/images/video(3).jpg'
import Video from './assets/images/video.mp4'
import './app.css'

const App = () => {

  return (
    <div className="container">
      {/* <Button1 title='Получить скидку' />
      <Button1 title='Забрать скидку' />
      <Phone />
      <One title='Работа без посредников' prop={true} />
      <One title="Оставить заявку" prop={false} />
      <Regis /> */}
      <nav>
        <img src={Logo} alt="" />
        <div className="right">

          <div className="right_1">
            <img src={Whatsap} alt="" className="whatsap" />
            <img src={Telegram} alt="" className="telegram" />
          </div>
          <img src={Phone2} alt="" className="phone" />
          <div>
            <span>Круглосуточно</span><br />
            <p>+7 (961) 321-11-14</p>
          </div>
        </div>
      </nav>
      <header>
        <img src={Shader} alt="" className="shader1" />
        <img src={Shader3} alt="" className="shader3" />
        <div className="left">
          <h1><span>Демонтажные работы </span> <br /> любой сложности <br /> в г. Ростов-на-Дону<br />  <span>под ключ</span></h1><br />
          <img src={Header_Logo} alt="" />
          <p><span>Забирайте скидку 25%.</span> <br /> Перезвоним в течение 5 минут</p>
          <br />
          <Button1 title="Забрать скидку" prop={true} />
          <div className="right_2">
            <img src={Whatsap} alt="" className="whatsap" />
            <img src={Telegram} alt="" className="telegram" />
          </div>
        </div>

        <div className="imgs">
          <img src={Header_Logo} alt="" />
          <div className="phone">
            <Phone />
          </div>
        </div>
      </header>
      <div className="header">

        <div className="header_about">
          <h1><span>Сносим дома, перегородки, гаражи </span><br /> демонтируем квартиры - под ключ!</h1><br />
          <h3>Старые строения стяжка, фундамент, плитка - ничто не стоит на нашем пути. <br /> Почему выбирают нас?</h3>
        </div>
        <div className="row">
          <One title='Работа без посредников' prop={true} number='01' Img={Search} />
          <One title='Свой парк автотехники' prop={true} number='02' Img={Img_1} />
          <One title='Профессиональный инструмент' prop={true} number='03' Img={Img_1} />
          <One title='Скорость без потери качества' prop={true} number='04' Img={Img_2} />
          <One title='Соблюдение сроков' prop={true} number='05' Img={Img_3} />
          <One title='Бригадир на объекте' prop={true} number='06' Img={Img_4} />
          <One title='Лучшие цены на рынке' prop={true} number='07' Img={Img_5} />
          <One title='Бесплатный выезд' prop={true} number='08' Img={Img_6} />
        </div>
        <div class="container1">
          <div class="grand11">
            <div class="imgh1">
              <div class="h101">
                <h1>Оставьте заявку прямо сейчас</h1>
                <h2>и мы сделаем предварительный расчет моментально</h2>
              </div>
            </div>
            <div class="inputs">
              <input type="Name" name="Name" placeholder="Ваше имя" />
              <input type="Number" name="Nummber" placeholder="Ваш телефон" />
              <Button1 title='Получить скидку' prop={false} />
            </div>
            <div class="end">
              <img src={Whatsap2} alt="" />
              <h5><a href="#">Написать в WhatsApp</a></h5>
            </div>
          </div>
        </div>

      </div>
      <div className="cont">
        <div className="cont_nav">
          <h1 className="cont_nav_h1">Мы предоставляем любые услуги в сфере Демонтажа, а именно</h1>
        </div>
        <div className="cont_namber">
          <div className="cont_namber_btn">

            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" /> 01</h1>

            <p className="cont_namber_btn_p">Демонтаж помещений под ключ</p>

          </div>
          <div className="cont_namber_btn">

            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />02</h1>
            <p className="cont_namber_btn_p">Демонтаж настенных
              и напольных покрытий</p>

          </div>
          <div className="cont_namber_btn">
            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />03</h1>
            <p className="cont_namber_btn_p">Демонтаж сантехкабины</p>

          </div>
          <div className="cont_namber_btn">
            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />04</h1>
            <p className="cont_namber_btn_p">Демонтаж стяжки
              и бетона</p>

          </div>
          <div className="cont_namber_btn">
            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />05</h1>
            <p className="cont_namber_btn_p">Демонтаж сантехники
              и электрики</p>

          </div>
          <div className="cont_namber_btn">
            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />06</h1>
            <p className="cont_namber_btn_p">Демонтаж потолков</p>

          </div>
          <div className="cont_namber_btn">
            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />07</h1>
            <p className="cont_namber_btn_p">Вывоз мусора</p>

          </div>
          <div className="cont_namber_btn">
            <h1 className="cont_namber_btn_h1"><img src={Tick} alt="" className="cont_number_img" />08</h1>
            <p className="cont_namber_btn_p">любого уровня сложности</p>

          </div>
          <div className="cont_namber_btn_p2">При необходимости заключаем договор на оказание услуг</div>

        </div><br />
        <div className="cont_card">
          <div className="cont_card_box">
            <div className="cont_card_box_right"><h1 className="cont_card_box_right_h1">Работаем на результат и время</h1><br />
              <p className='cont_card_box_right_p'>Если Вам нужно быстро, качественно и недорого, тогда Вам к нам</p>
              <h2 className="cont_card_box_right_h2">Оставляйте заявку</h2>
              <p className='cont_card_box_right_p2'> Наш мастер перезвонит в течение 5 минут и ответит на любые вопросы</p>
              <button className='cont_card_box_right_btn'>Оставить заявку</button>
            </div>
            <div className="cont_card_box_left">
              <img src={Box_img} alt="" />
            </div>
          </div>
        </div>
        <div className="cont_homecard">
          <div className="cont_homecard_nav"><h1 className="cont_homecard_nav_h1">Посмотрите как мы работаем</h1></div>
          <div className="cont_homecard_img">
            <img className='homeimg' src={home1} alt="" />
            <img className='homeimg' src={home2} alt="" />
            <img className='homeimg' src={home3} alt="" />
            <img className='homeimg' src={home4} alt="" />
            <img className='homeimg' src={home5} alt="" />
            <img className='homeimg' src={home6} alt="" />
            <img className='imgvedio' src={vedio1} alt="" />
            <img className='imgvedio' src={vedio2} alt="" />
            <img className='imgvedio' src={vedio3} alt="" />
            <VideoComponent src={Video} className="video" />
          </div>
        </div>


      </div>
      <div class="container_2">
        <div class="big_count">
          <div class="grand1">
            <div class="h1">
              <h1>Мы работаем в сфере демонтажа вот уже 8</h1>
              <h1>лет и успели помочь сотням клиентов</h1>
            </div>
            <h3>Это лишь часть отзывов за выполненные работы</h3>
          </div>
          <div class="grand2">
            <div class="parent1">
              <h4>Николай</h4>
              <div class="tabler">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <h5>
                Отличные ребята. Сделано все, как договаривались. В процессе,
                любой мелкий момент соазу уточняется. Регулярные отчеты фото и
                видео в ватсап. За собой все убрали. Мурад вежлив и приятен в
                обшении. И все сделали под ключ. Впечатления только положительные
              </h5>
            </div>
            <div class="parent1">
              <h4>Никита</h4>
              <div class="tabler">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <h5>
                Отличные ребята, быстро договорились о работе, приехали в тот же
                день.
              </h5>
              <h5>
                Ответственный подход и качественно проделанная работа, советую
              </h5>
            </div>
          </div>
          <div class="grand3">
            <div class="imgh1">
              <div class="h11">
                <h1>Перезвоните мне сейчас</h1>
                <h2>и предоставьте скидку 25%</h2>
              </div>
              <img src="./image 38-Photoroom 1.svg" alt="" />
            </div>
            <div class="inputs">
              <input type="Name" name="Name" placeholder="Ваше имя" />
              <input type="Number" name="Nummber" placeholder="Ваш телефон" />
              <Button1 title="Получить скидку" />
            </div>
            <div class="end">
              <img src={Whatsap2} alt="" />
              <a href="#">Или заберите скидку в WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="count2_par">
          <div class="count2_par1">
            <div class="cont2_ch">
              <img src={Logo} alt="" />
              <img src="./лого.svg" alt="" />
            </div>
            <div class="count2_ch1">
              <img src="./ic_round-phone.png" alt="" />
              <div class="h5">
                <h5>Круглосуточно</h5>
                <h4>+7 (961) 321-11-14</h4>
              </div>
            </div>
          </div>
          <div class="count2_ch2">
            <img src={Whatsap} alt="" />
            <img src={Telegram} alt="" />
          </div>
          <h5>Политика конфиденциальности</h5>
        </div>
      </div>

    </div>
  );
};

export default App;



