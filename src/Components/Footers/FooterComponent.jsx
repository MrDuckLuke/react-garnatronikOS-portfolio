import { useContext } from 'react';

import '../../Context/Modal/ModalContext.css'
import './FooterComponent.css';

import ShutDownIcon from '../../assets/images/shutdown-ico.png';
import GoogleIcon from '../../assets/images/google-ico.png';

import LangIcon from '../../assets/images/lang-ico.png';
import SpaIcon from '../../assets/images/spain-ico.png';
import EngIcon from '../../assets/images/england-ico.png';
import ItaIcon from '../../assets/images/italy-ico.png';

import { useModal } from '../../Context/Modal/ModalContext';
import { LanguageContext } from '../../Context/Language/LanguageContext';

export default function FooterComponent() {

    const { cap, changeLang } = useContext(LanguageContext);

    const { openModal } = useModal();

    function handleOMInfo() {

        function goGoogle() {
            window.location.href = "https://www.google.com";
        }

        openModal(
            <div>
                {cap.modalContentText}
            </div>
            , cap.modalTitleLeaving,
            <>
                <button className="modal-btn modal-shutdown-btn" onClick={() => window.close()}><img className="modal-shutdown-ico" src={ShutDownIcon} /> {cap.modalButtonShutdown}</button>
                <button className="modal-btn modal-google-btn" onClick={goGoogle}>{cap.modalButtonGoogle}<img className="modal-google-ico" src={GoogleIcon} /></button>
            </>
        );
    }

    function handleLang() {
        openModal(
            <div>
                {cap.modalContentTextLang}
                <div className='modal-flag-div'>
                    <img className="modal-flag-ico" src={SpaIcon} onClick={() => changeLang('es')} />
                    <img className="modal-flag-ico" src={EngIcon} onClick={() => changeLang('en')} />
                    <img className="modal-flag-ico" src={ItaIcon} onClick={() => changeLang('it')} />
                </div>
            </div>
            , cap.modalTitleChangeLang,
            <>

            </>
        )
    }

    return (
        <>
            <div className="div-footer">
                <div>

                </div>
                <div>

                </div>
                <div className="div-corner">
                    <img className="imgShutDown imgShutDown-Glowing" src={LangIcon} onClick={handleLang} />
                    <img className="imgShutDown imgShutDown-Glowing" src={ShutDownIcon} onClick={handleOMInfo} />
                </div>
            </div>
        </>
    );
}