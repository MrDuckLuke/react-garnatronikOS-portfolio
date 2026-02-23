import { NavLink } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
    return (
        <>
            <title>Error 404...</title>
            <div>
                <div className="error-container">
                    <p className="error-glitch-text error-text" data-text="Error">Error</p>
                    <p className="error-glitch-text error-code-text" data-text="404">404</p>
                    <p className="error-glitch-text" data-text="No se encontró el sitio">No se encontró el sitio</p>
                </div>
                <div>

                </div>
                <div className="error-return-home">
                    <NavLink to="/">
                        <span>Volver al inicio</span>
                    </NavLink>

                </div>
            </div>
        </>
    )
};