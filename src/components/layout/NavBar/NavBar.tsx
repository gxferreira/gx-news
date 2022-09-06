import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../../containers";
import LoggedInNavBar from "./LoggedInNavBar/LoggedInNavBar";
import './NavBar.scss';

const logo  = require('./logo.png');

export function NavBar() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo-container" onClick={onLogoClick}>
                <img src={ logo } alt="Logo" />
            </div>
            <ul className="menu">
                {isAuthenticated && <>
                    <LoggedInNavBar />
                </>}
                {!isAuthenticated && <>
                    <li className="menu-item" onClick={onSignInClick}>Sign In</li>
                </>}
            </ul>
        </nav>
    )

    function onLogoClick() {
        navigate(PAGE_ROUTES.ARTICLE_LIST)
    }

    function onSignInClick() {
        return loginWithRedirect({redirectUri: window.location.origin});
    }
}