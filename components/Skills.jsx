import React from 'react'
import styles from '../styles/Skills.module.scss'
import { SlSocialVkontakte } from "react-icons/sl";
import { PiTelegramLogoThin } from "react-icons/pi";
export default function Skills() {
    return (
        <div className={styles.wrapper} id='skills'>
            <div className={styles.wrapper__container}>
                <div className={styles.wrapper__container__leftBlock}>
                    <div>
                        <h1>Мои умения</h1>
                        <span>Меня зовут Антон. <br /> Я занимаюсь веб-программированием более 2 лет. <br /> Я готов к сорудничеству с Вами.</span>
                    </div>
                    <div className={styles.contacts}>
                        <div>
                            <h4>Телефон</h4>
                            <span>+7 992 141 71 55</span>
                        </div>
                        <div>
                            <h4>Почта</h4>
                            <span>tacontactta@gmail.com</span>
                        </div>
                        <div>
                            <h4>Место проживания</h4>
                            <span>Россия, Санкт-Петербург</span>
                        </div>
                        <div>
                            <h4>Социальные сети</h4>
                            <span><a href="https://vk.com/6old6"><SlSocialVkontakte/></a> <a href="tg://resolve?domain=yourantosha"><PiTelegramLogoThin /></a></span>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper__container__rightBlock}>
                    <div>
                        <h2>Web Development</h2>
                        <span>JavaScript, Git, MySQL, Node.js, VSCode
                            <div className={styles.line}></div>
                        </span>
                    </div>
                    <div>
                        <h2>Design</h2>
                        <span>Figma, PhotoShop, GIMP
                            <div className={styles.line}></div>
                        </span>
                    </div>
                    <div>
                        <h2>Frontend Development</h2>
                        <span>html, css, scss, ReactJs(в планах изучение TS&NextJS)
                            <div className={styles.line}></div>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}
