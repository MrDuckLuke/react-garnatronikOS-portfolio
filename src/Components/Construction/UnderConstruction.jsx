import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { LanguageContext } from '../../Context/Language/LanguageContext';

import '../../Pages/Error/ErrorPage.css';
import './UnderConstruction.css';
import { ProgressBar } from './ProgressBar';


export function UnderConstruction({ appTitle, appProgress }) {

    const { cap, changeLang } = useContext(LanguageContext);

    return (
        <>
            <title>{appTitle}</title>
            <div className="div-uc-layout">
                <div className="div-ucinfo-log">
                    <div className="div-p-uc-log">
                        <p className="p-uc-log">{cap.underConstructionPageTitle}: {appTitle}</p>
                        <p className="p-uc-log">{cap.underConstructionPageStatus}</p>
                        <p className="p-uc-log">{cap.underConstructionPageLog1}</p>
                        <p className="p-uc-log">{cap.underConstructionPageLog2}</p>
                        <p className="p-uc-log">{cap.underConstructionPageLog3}</p>
                        <p className="p-uc-progress">{cap.underConstructionPageProgress}</p>
                        <ProgressBar target={appProgress} label={cap.underConstructionCompilingModules} />
                        <p className="p-uc-log">{cap.underConstructionPageMessage}</p>
                    </div>
                    <div className="error-return-home">
                        <NavLink to="/">
                            <span>{cap.underConstructionReturnHome}</span>
                        </NavLink>
                    </div>
                </div>
                <div className="div-uc-error-items">
                    <p className="error-glitch-text error-text p-uc" data-text="Error 423">Error 423</p>
                    <p className="error-glitch-text p-uc" data-text={cap.underConstructionPageTitleStatus}>{cap.underConstructionPageTitleStatus}</p>
                </div>
            </div >
        </>
    )
}
