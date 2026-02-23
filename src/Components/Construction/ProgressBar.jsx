import React, { useState, useEffect } from 'react';

export const ProgressBar = ({ target = 100, label = "Progress" }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress < target) {
            const timeout = setTimeout(() => {
                setProgress(prev => prev + 1);
            }, 30);
            return () => clearTimeout(timeout);
        }
    }, [progress, target]);

    const totalBlocks = 20;
    const filledBlocks = Math.floor((progress / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    const visualBar = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

    return (
        <div className="progress-container">
            <div className="progress-label">{label}: {progress}%</div>
            <div className="progress-bar-visual">
                <span className="bar-bracket">[</span>
                <span className="bar-content">{visualBar}</span>
                <span className="bar-bracket">]</span>
            </div>
        </div>
    );
};