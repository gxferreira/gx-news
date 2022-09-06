import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { PROFILE_PLACEHOLDER } from "./profile.placeholder";
import './Profile.scss';

export function Profile() {
    const {user, isAuthenticated, logout, loginWithRedirect} = useAuth0()
    const [profileImage, setProfileImage] = useState(PROFILE_PLACEHOLDER)

    useEffect(() => {
        if (user?.picture) {
            setProfileImage(user?.picture);
        }
    }, [user])

    return (
        <li className="profile-container">
            <img src={profileImage} />
            {getProfileButton()}   
        </li>
    )

    function getProfileButton() {
        const className = `profile-button ${isAuthenticated && 'logged'}`;
        const text = isAuthenticated ? 'Out':'Log In';

        return (
            <button className={className} onClick={onClick}>
                {text}
            </button>
        )

        function onClick() {
            const { origin } = window.location;

            if (isAuthenticated) {
                logout({returnTo: origin})
            } else {
                loginWithRedirect({redirectUri: origin});
            }
        }
    }
}