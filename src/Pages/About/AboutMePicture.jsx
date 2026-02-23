import React from 'react';

export function AboutMePicture({ ImgOriginal, ImgMatrix, ImgWhiteNose, ImgToReplace, TextImg }) {
    return (
        <div className="div-img-about">
            <div className="div-scanlines-about" />
            <img className="img-whitenoise-about" src={ImgWhiteNose} />
            <img className="img-matrix-about" src={ImgMatrix} />
            <img className="img-hacker-about" src={ImgToReplace} />
            <img className="img-about" src={ImgOriginal} />
            <span className="span-text-img">{TextImg}</span>
            <span className="span-text-border-top">┌─────────────<strong class="strong-dot">·</strong>[ONLINE]─┐</span>
            <span className="span-text-border-bottom">└───────────────────────┘</span>
        </div>
    )
}
