import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCircleInfo, faFaceLaugh, faPepperHot, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faJava, faJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import dayjs from 'dayjs';

import { LanguageContext } from '../../Context/Language/LanguageContext';

import './AboutPage.css';
import ImgWhiteNose from '../../assets/images/white-noise-ani-2.gif.gif';
import ImgMeImage from '../../assets/images/meimage.png';
import ImgMeAtOsaka from '../../assets/images/meatosaka.png';
import ImgMeAndGFAtNiagara from '../../assets/images/meandgfatniagara.png';
import ImgHacker from '../../assets/images/hacker-img-2.png';
import ImgMatrix from '../../assets/images/matrix-effect-ani.gif';
import ImgOsakaCastle from '../../assets/images/osaka-castle.png';
import ImgNiagaraFalls from '../../assets/images/niagara-falls.png';

import '../../Components/Utils/icons';
import { AboutMePicture } from './AboutMePicture';

export default function AboutPage() {

    const { cap, changeLang } = useContext(LanguageContext);

    const [index, setIndex] = useState(0);

    const totalPages = 7;

    function goNext() {
        if (index < totalPages - 1) setIndex(index + 1);
    };

    function goPrevious() {
        if (index > 0) setIndex(index - 1);
    };

    const pagesNames = ["1", "2", "3", "4", "5", "6", "7"];

    const [picIndex, setPicIndex] = useState(0);
    const totalPics = 3;

    const nextPic = () => {
        if (picIndex < totalPics - 1) setPicIndex(picIndex + 1);
    };

    const prevPic = () => {
        if (picIndex > 0) setPicIndex(picIndex - 1);
    };

    return (
        <div className="div-info-file">
            <div className="div-terminal-header-top">
                <div className="div-chilli-tamaltronik-file">
                    <span className="blink">{<FontAwesomeIcon icon={faPepperHot} className="chilitoIco" ></FontAwesomeIcon>}</span>
                    <span>{"["}TamaltronikSys - {cap.aboutPageFileName}{"]"}</span>
                </div>
                <div>
                    <NavLink to="/">
                        <span><FontAwesomeIcon icon={faSquareXmark} className="xsquareIco"></FontAwesomeIcon></span>
                    </NavLink>
                </div>
            </div>
            <div className="view-viewport">
                {index > 0 && (
                    <button className="float-nav left" onClick={goPrevious}>
                        {"◄"}
                    </button>
                )}

                {index < totalPages - 1 && (
                    <button className="float-nav right" onClick={goNext}>
                        {"►"}
                    </button>
                )}
                <div
                    className="horizontal-rail"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    <section className="data-section">
                        <div className="div-exp-content">
                            <div className="div-exp-info div-wide">
                                <div className="div-about-log">
                                    <span>{"["}root@garnatronik{"]"}#</span>
                                    <span>{"["}root@garnatronik log{"]"}# tail -f /var/log/{cap.rootMenuAbout}</span>
                                    <span>{dayjs().subtract(5, 'minute').format('MMM DD HH:mm:ss')} {cap.aboutPageLogPLoaded}</span>
                                    <span>{dayjs().subtract(1, 'minute').format('MMM DD HH:mm:ss')} {cap.aboutPageLogPDecrypting}</span>
                                    <span>{dayjs().subtract(10, 'seconds').format('MMM DD HH:mm:ss')} {cap.aboutPageLogPDecryptingStatus}</span>
                                    <span>{dayjs().format('MMM DD HH:mm:ss')} {cap.aboutPageLogPDisplaying}</span>
                                    <hr className="hr-line-log"></hr>
                                </div>
                                <div className="div-file-content">
                                    <div>
                                        <p>{cap.aboutPageFileContentPGreeting}</p>
                                        <p>{cap.aboutPageFileContentPWhoAmI}</p>
                                        <p>{cap.aboutPageFileContentPThinking}<FontAwesomeIcon icon={faFaceLaugh} />.</p>
                                        <p>{cap.aboutPageFileContentPExplore}</p>
                                        <p>{cap.aboutPageFileContentPLetsMeet}</p>
                                    </div>
                                    <div className="div-about-pics">
                                        <div className="div-btn-pic-nav">
                                            <button onClick={prevPic} disabled={picIndex === 0} className="btn-pic-nav">{"◄"}</button>
                                        </div>
                                        <div className="div-about-pics-viewport">
                                            <div
                                                className="div-about-pics-rail"
                                                style={{ transform: `translateX(-${picIndex * 100}%)` }}
                                            >
                                                <div className="div-pic-slide">
                                                    <AboutMePicture ImgOriginal={ImgMeImage} ImgMatrix={ImgMatrix} ImgWhiteNose={ImgWhiteNose} ImgToReplace={ImgHacker} TextImg={"Subject"} />
                                                </div>
                                                <div className="div-pic-slide">
                                                    <AboutMePicture ImgOriginal={ImgMeAndGFAtNiagara} ImgMatrix={ImgMatrix} ImgWhiteNose={ImgWhiteNose} ImgToReplace={ImgNiagaraFalls} TextImg={"Niagara"} />
                                                </div>
                                                <div className="div-pic-slide">
                                                    <AboutMePicture ImgOriginal={ImgMeAtOsaka} ImgMatrix={ImgMatrix} ImgWhiteNose={ImgWhiteNose} ImgToReplace={ImgOsakaCastle} TextImg={"Osaka"} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="div-btn-pic-nav">
                                            <button onClick={nextPic} disabled={picIndex === totalPics - 1} className="btn-pic-nav">{"►"}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-about-log">
                                    <hr className="hr-line-log"></hr>
                                    <span>{dayjs().add(5, 'seconds').format('MMM DD HH:mm:ss')} {cap.aboutPageFileContentPIssues}</span>
                                    <span>{dayjs().add(10, 'seconds').format('MMM DD HH:mm:ss')} {cap.aboutPageFileContentPTamalMethod}</span>
                                    <span>{dayjs().add(12, 'seconds').format('MMM DD HH:mm:ss')} {cap.aboutPageFileContentPNoInstructions}</span>
                                    <div className="div-fakeinfo"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="data-section">
                        <div><h2>{cap.aboutPageProfExpTitle}</h2></div>
                        <div className="div-exp-content">
                            <div className="div-exp-info">
                                <h3>{cap.aboutPageExp1}</h3>
                                <h5>{cap.aboutPageExp1Duration}</h5>
                                <p className="p-experience">{cap.aboutPageExp1DescriptionPoint1}</p>
                                <p className="p-experience">{cap.aboutPageExp1DescriptionPoint2}</p>
                                <p className="p-experience">{cap.aboutPageExp1DescriptionPoint3}</p>
                            </div>
                            <div className="div-used-tech">
                                <img className="img-whitenoise" src={ImgWhiteNose} />
                                <div className="div-caption-used-tech">
                                    {cap.aboutPageExpUsedTechCap}
                                </div>
                                <div className="div-used-tech-icons">
                                    <div>
                                        <div className="div-support">
                                            <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={['ico', 'postgreSQL']}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={['ico', 'csharp']}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={['ico', 'sqlserver']}></FontAwesomeIcon>
                                        </div>
                                        <div className="div-support">
                                            <FontAwesomeIcon icon={['ico', 'dotnetcore']}></FontAwesomeIcon>
                                            <FontAwesomeIcon icon={['ico', 'visualstudio']}></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-fakeinfo"></div>
                        </div>
                    </section>
                    <section className="data-section">
                        <div className="div-exp-content">
                            <div className="div-exp-info">
                                <h3>{cap.aboutPageExp2}</h3>
                                <h5>{cap.aboutPageExp2Duration}</h5>
                                <p className="p-experience">{cap.aboutPageExp2DescriptionPoint1}</p>
                                <p className="p-experience">{cap.aboutPageExp2DescriptionPoint2}</p>
                            </div>
                            <div className="div-used-tech">
                                <img className="img-whitenoise" src={ImgWhiteNose} />
                                <div className="div-caption-used-tech">
                                    {cap.aboutPageExpUsedTechCap}
                                </div>
                                <div className="div-used-tech-icons">
                                    <div><FontAwesomeIcon icon={['ico', 'csharp']}></FontAwesomeIcon></div>
                                    <div><FontAwesomeIcon icon={['ico', 'sqlserver']}></FontAwesomeIcon></div>
                                    <div><FontAwesomeIcon icon={['ico', 'dotnet']}></FontAwesomeIcon></div>
                                    <div><FontAwesomeIcon icon={['ico', 'visualstudio']}></FontAwesomeIcon></div>
                                </div>
                            </div>
                            <div className="div-fakeinfo"></div>
                        </div>
                    </section>
                    <section className="data-section">
                        <div className="div-exp-content">
                            <div className="div-exp-info">
                                <h3>{cap.aboutPageExp3}</h3>
                                <h5>{cap.aboutPageExp3Duration}</h5>
                                <p className="p-experience">{cap.aboutPageExp3DescriptionPoint1}</p>
                                <p className="p-experience">{cap.aboutPageExp3DescriptionPoint2}</p>
                            </div>
                            <div className="div-used-tech">
                                <img className="img-whitenoise" src={ImgWhiteNose} />
                                <div className="div-caption-used-tech">
                                    {cap.aboutPageExpUsedTechCap}
                                </div>
                                <div className="div-used-tech-icons">
                                    <div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'soap']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'csharp']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'sqlserver']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'dotnet']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'visualstudio']}></FontAwesomeIcon></div>
                                        </div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'apirest']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'angular']}></FontAwesomeIcon></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-fakeinfo"></div>
                        </div>
                    </section>
                    <section className="data-section">
                        <div className="div-exp-content">
                            <div className="div-exp-info">
                                <h3>{cap.aboutPageExp4}</h3>
                                <h5>{cap.aboutPageExp4Duration}</h5>
                                <p className="p-experience">{cap.aboutPageExp4DescriptionPoint1}</p>
                                <p className="p-experience">{cap.aboutPageExp4DescriptionPoint2}</p>
                            </div>
                            <div className="div-used-tech">
                                <img className="img-whitenoise" src={ImgWhiteNose} />
                                <div className="div-caption-used-tech">
                                    {cap.aboutPageExpUsedTechCap}
                                </div>
                                <div className="div-used-tech-icons">
                                    <div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'csharp']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'sqlserver']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'dotnet']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'visualstudio']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'jquery']}></FontAwesomeIcon></div>
                                        </div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'oracle']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'aspnet']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={faJs}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-fakeinfo"></div>
                        </div>
                    </section>
                    <section className="data-section">
                        <div className="div-exp-content">
                            <div className="div-exp-info">
                                <h3>{cap.aboutPageExp5}</h3>
                                <h5>{cap.aboutPageExp5Duration}</h5>
                                <p className="p-experience">{cap.aboutPageExp5DescriptionPoint1}</p>
                                <p className="p-experience">{cap.aboutPageExp5DescriptionPoint2}</p>
                                <p className="p-experience">{cap.aboutPageExp5DescriptionPoint3}</p>
                            </div>
                            <div className="div-used-tech">
                                <img className="img-whitenoise" src={ImgWhiteNose} />
                                <div className="div-caption-used-tech">
                                    {cap.aboutPageExpUsedTechCap}
                                </div>
                                <div className="div-used-tech-icons">
                                    <div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'csharp']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'firebase']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'linux']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'dotnet']}></FontAwesomeIcon></div>

                                            <div><FontAwesomeIcon icon={['ico', 'visualstudio']}></FontAwesomeIcon></div>
                                        </div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'jquery']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'apirest']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={faJs}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={faBootstrap}></FontAwesomeIcon></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-fakeinfo"></div>
                        </div>
                    </section>
                    <section className="data-section">
                        <div className="div-exp-content">
                            <div className="div-exp-info">
                                <h3>{cap.aboutPageExp6}</h3>
                                <h5>{cap.aboutPageExp6Duration}</h5>
                                <p className="p-experience">{cap.aboutPageExp6DescriptionPoint1}</p>
                                <p className="p-experience">{cap.aboutPageExp6DescriptionPoint2}</p>
                            </div>
                            <div className="div-used-tech">
                                <img className="img-whitenoise" src={ImgWhiteNose} />
                                <div className="div-caption-used-tech">
                                    {cap.aboutPageExpUsedTechCap}
                                </div>
                                <div className="div-used-tech-icons">
                                    <div>
                                        <div className="div-support">
                                            <div><FontAwesomeIcon icon={['ico', 'csharp']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'sqlserver']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'dotnet']}></FontAwesomeIcon></div>
                                            <div><FontAwesomeIcon icon={['ico', 'visualstudio']}></FontAwesomeIcon></div>

                                            <div>
                                                <FontAwesomeIcon icon={['ico', 'aspnet']}></FontAwesomeIcon>
                                                <div className="div-cap-mvc">MVC</div>
                                            </div>
                                        </div>
                                        <div className="div-support">
                                            <div>
                                                <FontAwesomeIcon icon={['ico', 'sql']}></FontAwesomeIcon>
                                                <div className="div-cap-ssrs">SSRS</div>
                                            </div>
                                            <div><FontAwesomeIcon icon={['ico', 'apirest']}></FontAwesomeIcon></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-fakeinfo"></div>
                        </div>
                    </section>
                </div>
                <div>
                    <div className="div-back"></div>
                    <div className="div-lateral-1"></div>
                    <span className="span-pages-names">{<FontAwesomeIcon icon={faBook}></FontAwesomeIcon>}{cap.aboutPageSpanPages} {pagesNames[index]}</span>
                    <div className="div-lateral-2"></div>
                </div>
                <div>
                    <div className="div-back-2"></div>
                    <span className="span-details">{<FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>}{cap.aboutPageSpanDetails}</span>
                </div>
            </div>
        </div>
    );
}