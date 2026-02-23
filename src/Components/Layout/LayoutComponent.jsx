import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import FooterComponent from "../Footers/FooterComponent";
import BorderHeaderComponent from "../Headers/BorderHeaderComponent";
import ContentHeaderComponent from "../Headers/ContentHeaderComponent";
import ContentFooterComponent from "../Footers/ContentFooterComponent";


import './LayoutComponent.css';
import LoaderComponent from "../Loader/LoaderComponent";

export default function LayoutComponent({ openModal, isModalOpen, onClose }) {
    return (
        <>
            <BorderHeaderComponent />
            <div className="div-main">
                <div className="div-side">

                </div>
                <div className="div-container">
                    <div className="div-subcontainer">
                        <ContentHeaderComponent />
                        <div className="div-main-container">
                            <div className="div-final-container">
                                <Suspense fallback={<LoaderComponent />}>
                                    <Outlet />
                                </Suspense>
                            </div>
                        </div>
                        <ContentFooterComponent />
                    </div>
                </div>
                <div className="div-side">

                </div>
            </div >
            <FooterComponent openModal={openModal} isModalOpen={isModalOpen} onClose={onClose} />
        </>
    );
}