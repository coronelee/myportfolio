import styles from '../styles/WelcomeFrame.module.scss'
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowCircleDown } from "react-icons/fa";
import ButtonBarHeader from './ButtonBarHeader';

import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
const header = document.getElementsByClassName("styles.wrapper__header")
function getWindowWidth() {
  const { innerWidth: width } = window;
  return {
    width
  };
}
export default function WelcomeFrame() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  const [clickHamb, setClickHamb] = useState(false);

  const [clicked, setClicked] = useState(false)
  console.log(clickHamb)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clickMenuHam = () => {
    setClickHamb(!clickHamb);
    setClicked(true)
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={scrollPosition > 920 ? styles.wrapper__header__fixed : styles.wrapper__header}>
          <div className={styles.wrapper__headerContainer}>
            <div className={styles.headerLogo}>Tony.</div>
            <div className={styles.headerButtonsBar}>
              {getWindowWidth().width > 450 ? <ButtonBarHeader /> :
                (
                  <>
                    <div className={styles.hamburger} onClick={() => setClicked(!clicked)}>
                      {clicked ? (
                        <CiMenuFries onClick={() => setClickHamb(!clickHamb)} />
                      ) : (
                        <IoCloseOutline onClick={() => setClickHamb(!clickHamb)} />
                      )}
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
        <div className={styles.wrapper__contentContainer}>
          {clickHamb ? (
            <div className={styles.menuHamburger} onClick={() => clickMenuHam()}>
              <a href='skills' onClick={() => clickMenuHam()}>
                Знания
              </a>
              <a href='works' onClick={() => clickMenuHam()}>
                Работы
              </a>
              <a href='hireme' onClick={() => clickMenuHam()}>
                Связь со мной
              </a>
            </div>
          ) : (
            <></>
          )}
          <h1>Привет! Это мое портфолио.</h1>
          <a href='skills'>Приступить к просмотру. <span><FaArrowCircleDown /></span></a>
        </div>
      </div>
    </>
  );
}
