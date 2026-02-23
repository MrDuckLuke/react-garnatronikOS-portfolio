
import './ContentFooterComponent.css';
import '../../Pages/Error/ErrorPage.css'
import { useEffect, useRef, useState, useContext } from 'react';

import { LanguageContext } from '../../Context/Language/LanguageContext';

import TerminalIco from '../../assets/images/terminal-ico.png';


export default function ContentFooterComponent() {

    const { cap, changeLang } = useContext(LanguageContext);

    const [arrPhrases, setArrPhrases] = useState([
        cap.typeWriterArrayPhrase1,
        cap.typeWriterArrayPhrase2,
        cap.typeWriterArrayPhrase3,
        cap.typeWriterArrayPhrase4,
        cap.typeWriterArrayPhrase5
    ]

    );
    const writtingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;

    const [currentText, setCurrentText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(writtingSpeed);

    function handleTyping() {
        const fullPhrase = arrPhrases[phraseIndex];

        if (!isDeleting) {
            setCurrentText(fullPhrase.substring(0, currentText.length + 1));
            setTypingSpeed(100);

            if (currentText === fullPhrase) {
                setIsDeleting(true);
                setTypingSpeed(pauseTime);
            }
        } else {
            setCurrentText(fullPhrase.substring(0, currentText.length - 1));
            setTypingSpeed(eraseSpeed);

            if (currentText === '') {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % arrPhrases.length);
                setTypingSpeed(writtingSpeed);
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, typingSpeed, arrPhrases]);

    useEffect(() => {
        setArrPhrases([
            cap.typeWriterArrayPhrase1,
            cap.typeWriterArrayPhrase2,
            cap.typeWriterArrayPhrase3,
            cap.typeWriterArrayPhrase4,
            cap.typeWriterArrayPhrase5
        ]);
        setPhraseIndex(0);
        setCurrentText('');
        setIsDeleting(false);
    }, [cap]);

    const [textLinux, setTextLinux] = useState("");
    const [activeTerminal, setActiveTerminal] = useState(false);
    const maxChars = 30;

    const refTextLinux = useRef();

    useEffect(() => {
        if (activeTerminal && refTextLinux.current) {
            const timeOut = setTimeout(() => {
                refTextLinux.current.focus();
            }, 10)
            return () => clearTimeout(timeOut);
        }
    }, [activeTerminal]);

    function showTerminal() {
        activeTerminal ? setActiveTerminal(false) : setActiveTerminal(true);

        if (!activeTerminal) {
            setTextLinux('');
        }
    }

    function countChars(event) {
        const currentValue = event.target.value;
        if (currentValue.length <= maxChars) {
            setTextLinux(currentValue);
        }
    }

    function sendTermText(event) {
        if (event.key === "Enter") {
            const textConsoleLinux = textLinux.trim();
            if (textConsoleLinux !== "") {
                setArrPhrases([...arrPhrases, textConsoleLinux]);
                setTextLinux('');
                setActiveTerminal(false);
            }
        }
    }

    const numChars = textLinux.length;
    const leftChars = maxChars - numChars;

    return (
        <div className="div-content-footer">
            <div className="div-wholeterminal">
                <div className="div-typewriter-effect-console">
                    <span className="span-root">root@tamaltronik</span>
                    <span className="span-twopoints">:</span>
                    <span className="span-swungdash">~</span>
                    <span className="span-twopoints">#</span>
                    <span className="span-twopoints">{currentText}<span className="cursor-typing">▓</span></span>
                </div>
                <div className="div-linux-terminal">
                    <div className="div-linux-whole-terminal">
                        <img className="btn-icon-console" src={TerminalIco} onClick={showTerminal} />
                        <div className={activeTerminal ? "div-root-terminal-show" : "div-root-terminal-hide"}>
                            <span className="span-terminal-root">root@tamaltronik</span>
                            <span className="span-terminal-twopoints">:</span>
                            <span className="span-terminal-swungdash">~</span>
                            <span className="span-terminal-twopoints">#</span>
                            <input className="text-linux-console" placeholder={cap.typeWriterPlaceholder} value={textLinux} maxLength={maxChars} onChange={countChars} onKeyDown={sendTermText} ref={refTextLinux} />
                            <span className="span-characters-left">{numChars === 0 ? '' : leftChars}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
