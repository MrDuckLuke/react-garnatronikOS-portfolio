import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const langTranslations = {
    es: {
        appTitleMode: "Modo Portafolio v1.0",
        rootMenuHome: "Inicio.jsx",
        rootMenuProjects: "Proyectos Vitamina-T",
        rootMenuAbout: "Sobre_mí.log",
        modalTitleLeaving: "¿Ya te vas?",
        modalContentText: "¿Estás seguro de que deseas salir?",
        modalButtonCancel: "Cancelar",
        modalButtonShutdown: "Apagar",
        modalButtonGoogle: "Ir a ",
        modalTitleChangeLang: "Cambiar idioma",
        modalContentTextLang: "Por favor, haz click en un idioma",
        loaderTextLine1: "Haciendo petición... (Listo)",
        loaderTextLine2: "Estableciendo conexión... (Listo)",
        loaderTextLine3: "Iniciando TamaltronikSys v0.9... (Listo)",
        typeWriterArrayPhrases: [
            "¡Bienvenido a mi sitio!",
            "¡Soy Desarrollador Fullstack!",
            "¡Espero que conectemos!",
            "¡Gracias por visitar mi sitio!",
            "¡Trabajemos juntos!"
        ],
        typeWriterArrayPhrase1: "¡Bienvenido a mi sitio!",
        typeWriterArrayPhrase2: "¡Soy Desarrollador Fullstack!",
        typeWriterArrayPhrase3: "¡Espero que conectemos!",
        typeWriterArrayPhrase4: "¡Gracias por visitar mi sitio!",
        typeWriterArrayPhrase5: "¡Trabajemos juntos!",
        typeWriterPlaceholder: "¡Escribe algo y ENTER!",
        homePageTermArrayMsg: "Mensaje",
        homePageTermArrayEOF: "EOF",
        homePageTermArray: [
            ">IP detectada de usuario: [{{USER_IP}}]. Nivel de acceso: Visitante",
            ">Recibiendo transmisión entrante desde: message-from-tacoserver.garnatronix-host.com ()",
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <strong class="strong-eof">Mensaje</strong>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <div class="div-title-message">
                            <span class="error-glitch-text p-welcome" data-text="TamaltronikSys v0.9">TamaltronikSys v0.9</span>
                        </div>
                        <div class="div-incoming-message">
                            <div class="div-hacker">
                                <div class="div-lines-effect"></div>
                                <img class="img-matrix img-matrix-hidden" src="/assets/images/matrix-effect-ani.gif"/>
                                <img class="img-hacker img-hacker-hidden" src="/assets/images/hacker-img-2.png"/>
                                <img class="img-white-noise img-white-noise-hidden" src="/assets/images/white-noise-ani-2.gif"/>
                                <div class="div-scanner-line"></div>
                                <div class="div-scanlines"></div>
                                <span class="span-transmit span-transmit-hidden">┌──────────<strong class="strong-dot">·</strong>[ONLINE]─┐</span>
                                <span class="span-transmit-lower span-transmit-hidden">└────────────────────┘</span>
                                <span class="span-nosignal-hidden span-nosignal-transmit"><strong>┌────────────────────┐</strong></span>
                                <span class="span-nosignal-text-hidden span-nosignal-transmit">[NO SIGNAL]</span>
                                <span class="span-nosignal-lower-hidden span-nosignal-transmit"><strong>└────────────────────┘</strong></span>
                            </div>
                            <div class="div-content-message">
                                <span class="span-content">>Objetivo: Presentación de habilidades Full-Stack</span>
                                <span class="span-content">>El emisor de esta señal se especializa en desarrollo Fullstack y entornos escalables.</span>
                                <span class="span-content-subject">>Identidad del sujeto: <strong class="strong-restricted" data-text="[RESTRINGIDO]">[RESTRINGIDO]</strong></span>
                                <span class="span-content">>Para descifrar la Identidad, vaya a la sección "Sobre_mí.log".</span>
                                <span class="span-content">>Explore el sistema para obtener información adicional...</span>
                                <span class="span-content">>Sistema en constante mejora...</span>
                            </div> 
                        </div>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <strong class="strong-eof">EOF</strong>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            ">Fin del mensaje. Esperando instrucciones...",
        ],
        aboutPageFileName: "Sobre_mí.log",
        aboutPageLogPLoaded: "Archivo cargado: hecho",
        aboutPageLogPDecrypting: "Desencriptando - Usando método Tamal...",
        aboutPageLogPDecryptingStatus: "Estatus del desencriptado: hecho",
        aboutPageLogPDisplaying: "Mostrando contenido:",
        aboutPageFileContentPGreeting: "¡Hola! ¿Qué tal? ¡Soy Roberto Molina! ¡Es un gusto tenerte aquí!",
        aboutPageFileContentPWhoAmI: "Soy un Ingeniero Full-Stack con 8+ años de experiencia en aplicaciones de misión crítica. Mi especialidad es ser el puente tecnológico: domino la robustez de sistemas Legacy (C#, Java, SOAP) y los transformo con la agilidad de stacks modernos como .NET Core, APIs RESTful y React.",
        aboutPageFileContentPThinking: "Creo que para innovar hay que entender las bases. Me apasiona la arquitectura escalable, la mejora continua y resolver problemas complejos (incluyendo el eterno desafío de centrar un div)",
        aboutPageFileContentPExplore: "Explora las siguientes páginas para ver mi trayectoria y habilidades (Tip: Mueve el cursor del mouse (PC) o toca con tu dedo (celular) sobre las pantallas para interactuar con el sistema).",
        aboutPageFileContentPLetsMeet: "¿Tienes un desafío en mente? Mi buzón está abierto. ¡Construyamos algo juntos!",
        aboutPageFileContentPIssues: "Problemas detectados: ninguno",
        aboutPageFileContentPTamalMethod: "El método Tamal funcionó con éxito",
        aboutPageFileContentPNoInstructions: "En espera de instrucciones...",
        aboutPageProfExpTitle: "Experiencia Profesional",
        aboutPageExpUsedTechCap: "Tecnologías utilizadas",
        aboutPageExp1: "Neoris de México S. A. de C. V.",
        aboutPageExp1Duration: "Enero de 2022 - Marzo de 2025",
        aboutPageExp1DescriptionPoint1: " - Responsable del desarrollo, mantenimiento y soporte de estabilidad para un portafolio de sistemas de misión crítica (Moneygram, Envíos Nacionales), donde demostré adaptabilidad multi-lenguaje (políglota) trabajando con C# (.NET), PHP, JavasScript, Java, SQL Server, y PostgreSQL para Coppel.",
        aboutPageExp1DescriptionPoint2: " - Especialista técnico en la resolución de vulnerabilidades, mantenimiento de una aplicación Legacy (.NET Framework 1.1) de un área interna de Neoris",
        aboutPageExp1DescriptionPoint3: " - Ingeniería de datos a través de la creación de procedimientos almacenados, triggers y cursores para sistemas de facturación de Neoris España.",
        aboutPageExp2: "Neta Systems",
        aboutPageExp2Duration: "Octubre de 2021 - Enero de 2022",
        aboutPageExp2DescriptionPoint1: " - Responsable del mantenimiento y actualización técnica de servicios web críticos para el cliente EdenRed",
        aboutPageExp2DescriptionPoint2: " - Trabajé con la arquitectura Legacy basada en WCF (Windows Communication Foundation), utilizando C# y SQL Server, especializándome en la estabilización y actualización de código base a la versión .NET Framework 4.8",
        aboutPageExp3: "Stefanini México S. A. de C. V. – ExitusCredit",
        aboutPageExp3Duration: "Septiembre 2020 – Julio 2021",
        aboutPageExp3DescriptionPoint1: " - Desarrollo y mantenimiento de soluciones de integración para el sector de créditos y financiamiento, demostrando habilidad técnica en C#, SQL Server, Web API y Windows Services, además de ser clave en la integración de sistemas externos al consumir API RESTful y servicios SOAP de proveedores",
        aboutPageExp3DescriptionPoint2: " - Fui responsable del soporte Full-Stack, adquiriendo experiencia práctica en el manejo de flujos de Angular para realizar ajustes en frontend y asegurar la correcta funcionalidad de una aplicación para solicitar créditos",
        aboutPageExp4: "PASE Servicios Electrónicos S. A. de C. V",
        aboutPageExp4Duration: "Agosto 2018 – Febrero 2020",
        aboutPageExp4DescriptionPoint1: " - Desarrollo Full-Stack y mantenimiento de aplicaciones web críticas para la operación de la empresa en el sector de servicios y pagos electrónicos. Profundo dominio de stacks tradicionales robustos utilizando C#, ASP.NET (Web Forms/MVC) y jQuery para el frontend",
        aboutPageExp4DescriptionPoint2: " - Especialista en Bases de Datos al dar soporte operativo y resolver incidencias de negocio mediante el uso de queries complejas y procedimientos almacenados en Oracle (PL/SQL)",
        aboutPageExp5: "Actia de México",
        aboutPageExp5Duration: "Agosto 2017 – Julio 2018",
        aboutPageExp5DescriptionPoint1: " - Desarrollo Full-Stack de una aplicación web para la administración y generación de contenidos multimedia (streaming) para usuarios de transporte turístico",
        aboutPageExp5DescriptionPoint2: " - Trabajé con C#, ASP.NET, servicios web REST, y jQuery en el frontend",
        aboutPageExp5DescriptionPoint3: " - Experiencia en entornos híbridos con FireBase y despliegue para integrar ambientes Linux y generar los contenidos",
        aboutPageExp6: "AppliedSolutions",
        aboutPageExp6Duration: "Noviembre 2016 – Junio 2017",
        aboutPageExp6DescriptionPoint1: " - Creación y mantenimiento de aplicaciones de escritorio y servicios web para una cadena farmacéutica. Uso de C#, servicios web REST y SOAP y SQL Server",
        aboutPageExp6DescriptionPoint2: " - Mantenimiento de aplicación web para facturación y atención de operación de otro cliente del mismo rubro. Uso de C#, ASP.Net MVC, ReportingServices y SQL Server",
        aboutPageSpanPages: "Página:",
        aboutPageSpanDetails: "4212 bytes cargados",
        underConstructionPageTitle: "SISTEMA EN DESARROLLO",
        underConstructionPageStatus: "Estatus: Bloqueado",
        underConstructionPageTitleStatus: "Bloqueado",
        underConstructionPageLog1: "> Accediendo a nuevos módulos...",
        underConstructionPageLog2: "> Error: Sector bloqueado o en mantenimiento.",
        underConstructionPageLog3: "> Código de estado: 423 - EN CONSTRUCCION",
        underConstructionPageProgress: "Progreso: ",
        underConstructionPageMessage: "Estamos cocinando algo increíble. ¡Vuelve pronto!",
        underConstructionPageFooter: "Regresar al sistema principal",
        underConstructionCompilingModules: "Compilando módulos",
        underConstructionReturnHome: "Volver a Inicio"
    },
    en: {
        appTitleMode: "Portfolio Mode v1.0",
        rootMenuHome: "Home.jsx",
        rootMenuProjects: "Vitamin-T Projects",
        rootMenuAbout: "About_me.log",
        modalTitleLeaving: "Are you leaving already?",
        modalContentText: "Are you sure you want to leave?",
        modalButtonCancel: "Cancel",
        modalButtonShutdown: "Shutdown",
        modalButtonGoogle: "Go to ",
        modalTitleChangeLang: "Change language",
        modalContentTextLang: "Please, choose a language",
        loaderTextLine1: "Making request... (Done)",
        loaderTextLine2: "Establishing connection... (Done)",
        loaderTextLine3: "Booting TamaltronikSys v0.9...(Done)",
        typeWriterArrayPhrases: [
            "Welcome to my site!",
            "I am a Fullstack Developer!",
            "I hope we connect!",
            "Thanks for visiting my site!",
            "Let's work together!"
        ],
        typeWriterArrayPhrase1: "Welcome to my site!",
        typeWriterArrayPhrase2: "I am a Fullstack Developer!",
        typeWriterArrayPhrase3: "I hope we connect!",
        typeWriterArrayPhrase4: "Thanks for visiting my site!",
        typeWriterArrayPhrase5: "Let's work together!",
        typeWriterPlaceholder: "Type something & ENTER!",
        homePageTermArrayMsg: "Message",
        homePageTermArrayEOF: "EOF",
        homePageTermArray: [
            ">User IP detected: [{{USER_IP}}]. Access level: Guest",
            ">Receiving incoming transmission from: message-from-tacoserver.garnatronix-host.com ()",
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <strong class="strong-eof">Message</strong>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <div class="div-title-message">
                            <span class="error-glitch-text p-welcome" data-text="TamaltronikSys v0.9">TamaltronikSys v0.9</span>
                        </div>
                        <div class="div-incoming-message">
                            <div class="div-hacker">
                                <div class="div-lines-effect"></div>
                                <img class="img-matrix img-matrix-hidden" src="/assets/images/matrix-effect-ani.gif"/>
                                <img class="img-hacker img-hacker-hidden" src="/assets/images/hacker-img-2.png"/>
                                <img class="img-white-noise img-white-noise-hidden" src="/assets/images/white-noise-ani-2.gif"/>
                                <div class="div-scanner-line"></div>
                                <div class="div-scanlines"></div>
                                <span class="span-transmit span-transmit-hidden">┌──────────<strong class="strong-dot">·</strong>[ONLINE]─┐</span>
                                <span class="span-transmit-lower span-transmit-hidden">└────────────────────┘</span>
                                <span class="span-nosignal-hidden span-nosignal-transmit"><strong>┌────────────────────┐</strong></span>
                                <span class="span-nosignal-text-hidden span-nosignal-transmit">[NO SIGNAL]</span>
                                <span class="span-nosignal-lower-hidden span-nosignal-transmit"><strong>└────────────────────┘</strong></span>
                            </div>
                            <div class="div-content-message">
                                <span class="span-content">>Objective: Showing Fullstac skills</span>
                                <span class="span-content">>The sender of this signal specializes in Fullstack development and scalable environments.</span>
                                <span class="span-content-subject">>Subject's identity: <strong class="strong-restricted" data-text="[RESTRICTED]">[RESTRICTED]</strong></span>
                                <span class="span-content">>To find out the identity, go to the "About.log" section.</span>
                                <span class="span-content">>Explore the system in order to get more info...</span>
                                <span class="span-content">>Constantly improving system...</span>
                            </div> 
                        </div>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <strong class="strong-eof">EOF</strong>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            ">End of message. Waiting instructions...",
        ],
        aboutPageFileName: "About_me.log",
        aboutPageLogPLoaded: "File loaded: done",
        aboutPageLogPDecrypting: "Decrypting - Using Tamal method...",
        aboutPageLogPDecryptingStatus: "Decryption status: done",
        aboutPageLogPDisplaying: "Displaying content:",
        aboutPageFileContentPGreeting: "Hello! How's it going? My name is Roberto Molina! It's a pleasure to have you here!",
        aboutPageFileContentPWhoAmI: "I am a Full-Stack Engineer with 8+ years of experience in mission-critical applications. My specialty is being the technological bridge: I master the robustness of Legacy systems (C#, Java, SOAP) and transform them with the agility of modern stacks like .NET Core, RESTful APIs, and React.",
        aboutPageFileContentPThinking: "I believe that to innovate, one must understand the foundations. I am passionate about scalable architecture, continuous improvement, and solving complex problems (including the eternal challenge of centering a div).",
        aboutPageFileContentPExplore: "Explore the following pages to see my trajectory and skills (Tip: Move the mouse cursor (PC) or tap with your finger (mobile) on the screens to interact with the system).",
        aboutPageFileContentPLetsMeet: "Have a challenge in mind? My inbox is open. Let's build something together!",
        aboutPageFileContentPIssues: "Issues detected: none",
        aboutPageFileContentPTamalMethod: "The Tamal method worked successfully",
        aboutPageFileContentPNoInstructions: "Awaiting instructions...",
        aboutPageProfExpTitle: "Professional Experience",
        aboutPageExpUsedTechCap: "Technologies used",
        aboutPageExp1: "Neoris de México S. A. de C. V.",
        aboutPageExp1Duration: "January 2022 - March 2025",
        aboutPageExp1DescriptionPoint1: " - Responsible for the development, maintenance, and stability support for a portfolio of mission-critical systems (Moneygram, National Remittances), where I demonstrated multi-language adaptability (polyglot) working with C# (.NET), PHP, JavaScript, Java, SQL Server, and PostgreSQL for Coppel.",
        aboutPageExp1DescriptionPoint2: " - Technical specialist in vulnerability resolution and maintenance of a Legacy application (.NET Framework 1.1) for an internal area of Neoris.",
        aboutPageExp1DescriptionPoint3: " - Data engineering through the creation of stored procedures, triggers, and cursors for billing systems of Neoris Spain.",
        aboutPageExp2: "Neta Systems",
        aboutPageExp2Duration: "October 2021 - January 2022",
        aboutPageExp2DescriptionPoint1: " - Responsible for the maintenance and technical update of critical web services for the client EdenRed.",
        aboutPageExp2DescriptionPoint2: " - Worked with Legacy architecture based on WCF (Windows Communication Foundation), using C# and SQL Server, specializing in stabilization and updating the codebase to .NET Framework 4.8 version.",
        aboutPageExp3: "Stefanini México S. A. de C. V. – ExitusCredit",
        aboutPageExp3Duration: "September 2020 – July 2021",
        aboutPageExp3DescriptionPoint1: " - Development and maintenance of integration solutions for the credit and financing sector, demonstrating technical skill in C#, SQL Server, Web API, and Windows Services, as well as being key in integrating external systems by consuming RESTful APIs and SOAP services from providers.",
        aboutPageExp3DescriptionPoint2: " - Responsible for Full-Stack support, gaining hands-on experience in managing Angular flows to perform frontend adjustments and ensure the correct functionality of a loan application app.",
        aboutPageExp4: "PASE Servicios Electrónicos S. A. de C. V",
        aboutPageExp4Duration: "August 2018 – February 2020",
        aboutPageExp4DescriptionPoint1: " - Full-Stack development and maintenance of critical web applications for the company's operation in the electronic services and payments sector. Deep mastery of robust traditional stacks using C#, ASP.NET (Web Forms/MVC), and jQuery for the frontend.",
        aboutPageExp4DescriptionPoint2: " - Database Specialist providing operational support and resolving business incidents through the use of complex queries and stored procedures in Oracle (PL/SQL).",
        aboutPageExp5: "Actia de México",
        aboutPageExp5Duration: "August 2017 – July 2018",
        aboutPageExp5DescriptionPoint1: " - Full-Stack development of a web application for the administration and generation of multimedia content (streaming) for tourist transport users.",
        aboutPageExp5DescriptionPoint2: " - Worked with C#, ASP.NET, REST web services, and jQuery on the frontend.",
        aboutPageExp5DescriptionPoint3: " - Experience in hybrid environments with Firebase and deployment to integrate Linux environments and generate content.",
        aboutPageExp6: "AppliedSolutions",
        aboutPageExp6Duration: "November 2016 – June 2017",
        aboutPageExp6DescriptionPoint1: " - Creation and maintenance of desktop applications and web services for a pharmaceutical chain. Use of C#, REST/SOAP web services, and SQL Server.",
        aboutPageExp6DescriptionPoint2: " - Maintenance of a web application for billing and operational support for another client in the same industry. Use of C#, ASP.Net MVC, ReportingServices, and SQL Server.",
        aboutPageSpanPages: "Page:",
        aboutPageSpanDetails: "4022 bytes loaded",
        underConstructionPageTitle: "SYSTEM UNDER DEVELOPMENT",
        underConstructionPageStatus: "Status: Locked",
        underConstructionPageTitleStatus: "Locked",
        underConstructionPageLog1: "> Accessing new modules...",
        underConstructionPageLog2: "> Error: Sector locked or under maintenance.",
        underConstructionPageLog3: "> Status code: 423 - WORK_IN_PROGRESS",
        underConstructionPageProgress: "Progress: ",
        underConstructionPageMessage: "We are cooking something amazing. Come back soon!",
        underConstructionPageFooter: "Return to main system",
        underConstructionCompilingModules: "Compiling modules",
        underConstructionReturnHome: "Back to Home"
    },
    it: {
        appTitleMode: "Modo Portfolio v1.0",
        rootMenuHome: "Inizio.jsx",
        rootMenuProjects: "Progetti Vitamina-T",
        rootMenuAbout: "Informazioni.log",
        modalTitleLeaving: "Stai già partendo?",
        modalContentText: "Sei sicuro di voler uscire?",
        modalButtonCancel: "Annulla",
        modalButtonShutdown: "Spegnere",
        modalButtonGoogle: "Andare a ",
        modalTitleChangeLang: "Cambia lingua",
        modalContentTextLang: "Scegli una lingua, per favore",
        loaderTextLine1: "Richiesta in corso... (Fatto)",
        loaderTextLine2: "Connessione in corso... (Fatto)",
        loaderTextLine3: "Avvio sistema TamaltronikSys v0.9... (Fatto)",
        typeWriterArrayPhrases: [
            "Benvenuto sul mio sito!",
            "Sono uno Sviluppatore Fullstack!",
            "Spero che entreremo in contatto!",
            "Grazie per aver visitato il mio sito!",
            "Lavoriamo insieme!"
        ],
        typeWriterArrayPhrase1: "Benvenuto sul mio sito!",
        typeWriterArrayPhrase2: "Sono uno Sviluppatore Fullstack!",
        typeWriterArrayPhrase3: "Spero che entreremo in contatto!",
        typeWriterArrayPhrase4: "Grazie per aver visitato il mio sito!",
        typeWriterArrayPhrase5: "Lavoriamo insieme!",
        typeWriterPlaceholder: "Scrivi qualcosa e ENTER!",
        homePageTermArrayMsg: "Messaggio",
        homePageTermArrayEOF: "EOF",
        homePageTermArray: [
            ">IP Utente rilevato: [{{USER_IP}}]. Livello di accesso: Visitatore/Visitatrice",
            ">Ricezione della trasmissione in arrivo da: message-from-tacoserver.garnatronix-host.com ()",
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <strong class="strong-eof">Messaggio</strong>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <div class="div-title-message">
                            <span class="error-glitch-text p-welcome" data-text="TamaltronikSys v0.9">TamaltronikSys v0.9</span>
                        </div>
                        <div class="div-incoming-message">
                            <div class="div-hacker">
                                <div class="div-lines-effect"></div>
                                <img class="img-matrix img-matrix-hidden" src="/assets/images/matrix-effect-ani.gif"/>
                                <img class="img-hacker img-hacker-hidden" src="/assets/images/hacker-img-2.png"/>
                                <img class="img-white-noise img-white-noise-hidden" src="/assets/images/white-noise-ani-2.gif"/>
                                <div class="div-scanner-line"></div>
                                <div class="div-scanlines"></div>
                                <span class="span-transmit span-transmit-hidden">┌──────────<strong class="strong-dot">·</strong>[ONLINE]─┐</span>
                                <span class="span-transmit-lower span-transmit-hidden">└────────────────────┘</span>
                                <span class="span-nosignal-hidden span-nosignal-transmit"><strong>┌────────────────────┐</strong></span>
                                <span class="span-nosignal-text-hidden span-nosignal-transmit">[NO SIGNAL]</span>
                                <span class="span-nosignal-lower-hidden span-nosignal-transmit"><strong>└────────────────────┘</strong></span>
                            </div>
                            <div class="div-content-message">
                                <span class="span-content">>Obiettivo: Presentare competenze Full-Stack</span>
                                <span class="span-content">>Il mittente di questo segnale è specializzato nello sviluppo Fullstack e negli ambienti scalabili.</span>
                                <span class="span-content-subject">>Identità del soggetto: <strong class="strong-restricted" data-text="[LIMITATO]">[LIMITATO]</strong></span>
                                <span class="span-content">>Per scoprire l'Identità, vai a la sezione "Informazioni.log".</span>
                                <span class="span-content">>Esplorare il sistema per ottenere maggiori informazioni...</span>
                                <span class="span-content">>Sistema in constante miglioramento</span>
                            </div> 
                        </div>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            {
                isHTML: true, content:
                    `<div class="div-root-message">
                        <strong class="strong-eof">EOF</strong>
                    </div>`
            },
            {
                isHTML: true, content:
                    `<hr class="hr-line"/>`
            },
            ">Fine del messaggio. Istruzioni in attesa...",
        ],
        aboutPageFileName: "Informazioni.log",
        aboutPageLogPLoaded: "File caricato: fatto",
        aboutPageLogPDecrypting: "Decrittazione in corso - Uso del metodo Tamal...",
        aboutPageLogPDecryptingStatus: "Stato decrittazione: fatto",
        aboutPageLogPDisplaying: "Visualizzazione contenuto:",
        aboutPageFileContentPGreeting: "Ciao! Come va? Sono Roberto Molina! È un piacere averti qui!",
        aboutPageFileContentPWhoAmI: "Sono un Ingegnere Full-Stack con oltre 8 anni di esperienza in applicazioni mission-critical. La mia specialità è essere il ponte tecnologico: domino la robustezza dei sistemi Legacy (C#, Java, SOAP) e li trasformo con l'agilità di stack moderni come .NET Core, API RESTful e React.",
        aboutPageFileContentPThinking: "Credo che per innovare sia necessario comprendere le basi. Mi appassiona l'architettura scalabile, il miglioramento continuo e la risoluzione di problemi complessi (incluso l'eterno dilemma di come centrare un div).",
        aboutPageFileContentPExplore: "Esplora le pagine seguenti per vedere il mio percorso e le mie competenze (Suggerimento: Muovi il cursore del mouse (PC) o tocca con il dito (cellulare) sugli schermi per interagire con il sistema).",
        aboutPageFileContentPLetsMeet: "Hai una sfida in mente? La mia casella di posta è aperta. Costruiamo qualcosa insieme!",
        aboutPageFileContentPIssues: "Problemi rilevati: nessuno",
        aboutPageFileContentPTamalMethod: "Il metodo Tamal è stato eseguito con successo",
        aboutPageFileContentPNoInstructions: "In attesa di istruzioni...",
        aboutPageProfExpTitle: "Esperienza Professionale",
        aboutPageExpUsedTechCap: "Tecnologie utilizzate",
        aboutPageExp1: "Neoris de México S. A. de C. V.",
        aboutPageExp1Duration: "Gennaio 2022 - Marzo 2025",
        aboutPageExp1DescriptionPoint1: " - Responsabile dello sviluppo, manutenzione e supporto alla stabilità per un portafoglio di sistemi mission-critical (Moneygram, Envíos Nacionales), dove ho dimostrato adattabilità multi-linguaggio (poliglotta) lavorando con C# (.NET), PHP, JavaScript, Java, SQL Server e PostgreSQL per Coppel.",
        aboutPageExp1DescriptionPoint2: " - Specialista tecnico nella risoluzione di vulnerabilità e manutenzione di un'applicazione Legacy (.NET Framework 1.1) per un'area interna di Neoris.",
        aboutPageExp1DescriptionPoint3: " - Ingegneria dei dati attraverso la creazione di stored procedure, trigger e cursori per i sistemi di fatturazione di Neoris Spagna.",
        aboutPageExp2: "Neta Systems",
        aboutPageExp2Duration: "Ottobre 2021 - Gennaio 2022",
        aboutPageExp2DescriptionPoint1: " - Responsabile della manutenzione e dell'aggiornamento tecnico di servizi web critici per il cliente EdenRed.",
        aboutPageExp2DescriptionPoint2: " - Ho lavorato con l'architettura Legacy basata su WCF (Windows Communication Foundation), utilizzando C# e SQL Server, specializzandomi nella stabilizzazione e nell'aggiornamento del codice base alla versione .NET Framework 4.8.",
        aboutPageExp3: "Stefanini México S. A. de C. V. – ExitusCredit",
        aboutPageExp3Duration: "Settembre 2020 – Luglio 2021",
        aboutPageExp3DescriptionPoint1: " - Sviluppo e manutenzione di soluzioni di integrazione per il settore creditizio e finanziario, dimostrando competenze tecniche in C#, SQL Server, Web API e Windows Services, oltre ad essere stato fondamentale nell'integrazione di sistemi esterni consumando API RESTful e servizi SOAP di fornitori.",
        aboutPageExp3DescriptionPoint2: " - Responsabile del supporto Full-Stack, acquisendo esperienza pratica nella gestione dei flussi Angular per eseguire modifiche al frontend e garantire la corretta funzionalità di un'applicazione per la richiesta di prestiti.",
        aboutPageExp4: "PASE Servicios Electrónicos S. A. de C. V",
        aboutPageExp4Duration: "Agosto 2018 – Febbraio 2020",
        aboutPageExp4DescriptionPoint1: " - Sviluppo Full-Stack e manutenzione di applicazioni web critiche per l'operatività aziendale nel settore dei servizi e dei pagamenti elettronici. Padronanza profonda di stack tradizionali robusti utilizzando C#, ASP.NET (Web Forms/MVC) e jQuery per il frontend.",
        aboutPageExp4DescriptionPoint2: " - Specialista in Database fornendo supporto operativo e risolvendo incidenti di business tramite l'uso di query complesse e stored procedure in Oracle (PL/SQL).",
        aboutPageExp5: "Actia de México",
        aboutPageExp5Duration: "Agosto 2017 – Luglio 2018",
        aboutPageExp5DescriptionPoint1: " - Sviluppo Full-Stack di un'applicazione web per l'amministrazione e la generazione di contenuti multimediali (streaming) per utenti di trasporti turistici.",
        aboutPageExp5DescriptionPoint2: " - Ho lavorato con C#, ASP.NET, servizi web REST e jQuery nel frontend.",
        aboutPageExp5DescriptionPoint3: " - Esperienza in ambienti ibridi con Firebase e distribuzione per integrare ambienti Linux e generare contenuti.",
        aboutPageExp6: "AppliedSolutions",
        aboutPageExp6Duration: "Novembre 2016 – Giugno 2017",
        aboutPageExp6DescriptionPoint1: " - Creazione e manutenzione di applicazioni desktop e servizi web per una catena farmaceutica. Utilizzo di C#, servizi web REST/SOAP e SQL Server.",
        aboutPageExp6DescriptionPoint2: " - Manutenzione di un'applicazione web per la fatturazione e il supporto operativo di un altro cliente dello stesso settore. Utilizzo di C#, ASP.Net MVC, ReportingServices e SQL Server.",
        aboutPageSpanPages: "Pagina:",
        aboutPageSpanDetails: "4191 byte caricati",
        underConstructionPageTitle: "SISTEMA IN FASE DI SVILUPPO",
        underConstructionPageStatus: "Stato: Bloccato",
        underConstructionPageTitleStatus: "Bloccato",
        underConstructionPageLog1: "> Accesso ai nuovi moduli...",
        underConstructionPageLog2: "> Errore: Settore bloccato o in manutenzione.",
        underConstructionPageLog3: "> Codice di stato: 423 - LAVORI_IN_CORSO",
        underConstructionPageProgress: "Progresso: ",
        underConstructionPageMessage: "Stiamo preparando qualcosa di incredibile. Torna presto!",
        underConstructionPageFooter: "Torna al sistema principale",
        underConstructionCompilingModules: "Compilazione moduli",
        underConstructionReturnHome: "Tornare a Inizio"
    }
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('es');

    function changeLang(newLang) {
        setLang(newLang);
    }

    return (
        <LanguageContext.Provider value={{ cap: langTranslations[lang], changeLang, lang }}>
            {children}
        </LanguageContext.Provider>
    );
};


