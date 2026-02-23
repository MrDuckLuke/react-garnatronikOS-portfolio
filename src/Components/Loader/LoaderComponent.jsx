import React from 'react';
import { useContext } from 'react';

import './LoaderComponent.css';
import { LanguageContext } from '../../Context/Language/LanguageContext';

export default function LoaderComponent() {
    const { cap, changeLang } = useContext(LanguageContext);
    return (
        <div className="loader-container">
            <p className="loader-text line-1">{">"}{cap.loaderTextLine1}</p>
            <p className="loader-text line-2">{">"}{cap.loaderTextLine2}</p>
            <p className="loader-text line-3">{">"}{cap.loaderTextLine3}</p>
            <span className="loader-cursor">▓</span>
        </div>
    );
};
