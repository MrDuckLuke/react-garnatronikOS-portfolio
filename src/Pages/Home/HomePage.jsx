import { NavLink } from 'react-router-dom';
import './HomePage.css';
import '../Error/ErrorPage.css';
import { useContext, useEffect, useRef, useState } from 'react';
import HomePageTypeWriter from './HomePageTypeWriter';
import HomePageStaticBlock from './HomePageStaticBlock';
import { LanguageContext } from '../../Context/Language/LanguageContext';
import parse from 'html-react-parser';

export default function HomePage() {

    const { cap, changeLang } = useContext(LanguageContext);

    const [visibleLines, setVisibleLines] = useState(1);

    const [userIP, setUserIP] = useState("Detecting...");

    const messRef = useRef(null);

    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                setUserIP(`${data.ip} (${data.city}, ${data.country_name})`);
            })
            .catch(() => setUserIP("127.0.0.1 (Local Node)"));
    }, []);

    const termArray = cap.homePageTermArray.map((item) => {
        if (typeof item === 'string') {
            return item
                .replace("{{USER_IP}}", userIP)
        }
        return item;
    });

    useEffect(() => {
        if (messRef.current) {
            messRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [visibleLines]);


    function handleLineFinished() {
        if (visibleLines < termArray.length)
            setVisibleLines(prev => prev + 1);
    }

    return (
        <>
            <div className="div-home-receiver">
                <div>
                    <p className="p-initial" />
                    {termArray.slice(0, visibleLines).map((item, i) => {
                        const isLast = i === visibleLines - 1;
                        const callback = isLast ? handleLineFinished : null;
                        if (typeof item === 'object' && item.isHTML) {
                            return (
                                <HomePageStaticBlock
                                    key={i}
                                    onFinished={callback}
                                >
                                    {parse(item.content)}
                                </HomePageStaticBlock>
                            )
                        }

                        return (
                            <HomePageTypeWriter
                                key={i}
                                message={item}
                                onFinished={i === visibleLines - 1 ? handleLineFinished : null}
                            />
                        )
                    })}
                    <p className="cursor-typing" ref={messRef}>▓</p>
                    <p className="p-initial" />
                </div>
            </div>
        </>
    );
}
