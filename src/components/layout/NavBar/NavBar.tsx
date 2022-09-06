import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../../containers";
import LoggedInNavBar from "./LoggedInNavBar/LoggedInNavBar";
import './NavBar.scss';
import { Profile } from "./Profile/Profile";

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
                <Profile />
            </ul>
        </nav>
    )

    function onLogoClick() {
        navigate(PAGE_ROUTES.ARTICLE_LIST)
    }

    function onSignInClick() {
        return 
    }
}