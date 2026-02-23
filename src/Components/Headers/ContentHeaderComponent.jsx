import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom';

import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LanguageContext } from '../../Context/Language/LanguageContext';

import './ContentHeaderComponent.css';

import GitHubIco from '../../assets/images/github-ico.png';
import MailIco from '../../assets/images/mail-ico-2.png';
import TermiIco from '../../assets/images/terminal-ico.png';
import { faGithub, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faHashtag, faPepperHot } from '@fortawesome/free-solid-svg-icons';



export default function ContentHeaderComponent() {

    const { cap, changeLang } = useContext(LanguageContext);

    const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

    const [shProjectMenu, setShProjectMenu] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'));
        }, 1000);
    }, [])

    function closeWithAnimation() {
        setIsClosing(true);

        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 300);
    }


    function goPersGitHub() {
        window.location.href = "https://github.com/MrDuckLuke";
    }

    function goMail() {
        window.location.href = "mailto:rbrtcmg@protonmail.com";
    }

    function shProjects() {
        setShProjectMenu(!shProjectMenu);
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            {isMenuOpen && (
                <div className="menu-overlay" onClick={closeWithAnimation}></div>
            )}
            <div className="div-border-content-main-header">

                <div className={`div-menu ${isMenuOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
                    <div className="div-menu-title">
                        <span className="span-root">root@menu</span>
                        <span className="span-twopoints">:</span>
                        <span className="span-swungdash">~</span>
                        <span className="span-twopoints">#</span>
                        <span className="span-twopoints">ls<span className="cursor-typing">▓</span></span>
                    </div>
                    <div className="div-menu-items">
                        <ul class="ul-menu">
                            <li><div><NavLink className="menu-link menu-item" to="/" onClick={closeWithAnimation}><FontAwesomeIcon icon={faReact}></FontAwesomeIcon>{cap.rootMenuHome}</NavLink></div></li>
                            <li><div>
                                <div class="menu-link menu-item" onClick={shProjects}><FontAwesomeIcon icon={faFolder}></FontAwesomeIcon><span>{cap.rootMenuProjects}</span></div></div>
                                <ul className={shProjectMenu ? "ulProjsVis" : "ulProjsNon"}>
                                    <li><div><NavLink className="menu-link menu-item" to="/books" onClick={closeWithAnimation}><FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>Quesatronik.cs</NavLink></div></li>
                                    <li><div><NavLink className="menu-link menu-item" to="/search" onClick={closeWithAnimation}><FontAwesomeIcon icon={faPython}></FontAwesomeIcon>Tacotronik.py</NavLink></div></li>
                                    <li><div><NavLink className="menu-link menu-item" to="/visitors" onClick={closeWithAnimation}><FontAwesomeIcon icon={faJava}></FontAwesomeIcon>Empatronik.jar</NavLink></div></li>
                                </ul>
                            </li>
                            <li><div><NavLink className="menu-link menu-item" to="/about" onClick={closeWithAnimation}><FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>{cap.rootMenuAbout}</NavLink></div></li>
                        </ul>
                    </div>
                </div>
                <div className="div-app-title">
                    <div className="div-title">
                        <div className="div-chilito">
                            <FontAwesomeIcon icon={faPepperHot} className="faChilito"></FontAwesomeIcon>
                        </div>
                        <div className="div-caption-title">
                            {`

░██████╗░░█████╗░██████╗░███╗░░██╗░█████╗░████████╗██████╗░░█████╗░███╗░░██╗██╗██╗░░██╗  ░█████╗░░██████╗
██╔════╝░██╔══██╗██╔══██╗████╗░██║██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗████╗░██║██║██║░██╔╝  ██╔══██╗██╔════╝
██║░░██╗░███████║██████╔╝██╔██╗██║███████║░░░██║░░░██████╔╝██║░░██║██╔██╗██║██║█████═╝░  ██║░░██║╚█████╗░
██║░░╚██╗██╔══██║██╔══██╗██║╚████║██╔══██║░░░██║░░░██╔══██╗██║░░██║██║╚████║██║██╔═██╗░  ██║░░██║░╚═══██╗
╚██████╔╝██║░░██║██║░░██║██║░╚███║██║░░██║░░░██║░░░██║░░██║╚█████╔╝██║░╚███║██║██║░╚██╗  ╚█████╔╝██████╔╝
░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝╚═╝╚═╝░░╚═╝  ░╚════╝░╚═════╝░
    `}
                        </div>
                    </div>
                    <div className="div-subtitle">
                        <span class="error-glitch-text" data-text={cap.appTitleMode}>{cap.appTitleMode}</span>
                    </div>
                </div>
                <div className="div-time">
                    <div className="div-menu-trigger" onClick={toggleMenu}>
                        <img className="img-term-ico" src={TermiIco} />
                        <span className="span-glitch">[Term_Menu]</span>
                        <span className="cursor-typing">▓</span>
                    </div>
                    <div className="div-content-clock-elements">
                        <FontAwesomeIcon icon={faGithub} onClick={goPersGitHub} className="faIcon"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faEnvelope} onClick={goMail} className="faIcon"></FontAwesomeIcon>

                    </div>
                    <div className="div-clock">
                        <img class="img-clock-matrix" src="/assets/images/matrix-effect-ani.gif" />
                        <img class="img-clock-white-noise" src="/assets/images/white-noise-ani-2.gif" />
                        <div class="div-clock-scan-lines"></div>
                        <span className="span-clock">{time}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
