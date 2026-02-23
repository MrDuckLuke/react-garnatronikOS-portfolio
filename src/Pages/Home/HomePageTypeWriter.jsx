import React, { useEffect, useState } from 'react'

export default function HomePageTypeWriter({ message, onFinished }) {

    const [letters, setLetters] = useState("");

    useEffect(() => {
        if (letters.length !== message.length) {
            const timeOut = setTimeout(() => {
                setLetters(message.slice(0, letters.length + 1));
            }, 2);
            return () => clearTimeout(timeOut);
        } else if (onFinished) {
            const pause = setTimeout(() => {
                onFinished();
            }, 3);
            return () => clearTimeout(pause);
        }
    }, [letters, message, onFinished]);

    return (
        <p className="p-text">{letters}</p>
    );
};
