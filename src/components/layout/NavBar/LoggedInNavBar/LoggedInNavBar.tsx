import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../../../containers";

function LoggedInNavBar() {
    const navigate = useNavigate();
    const { logout } = useAuth0();
    
    return (
        <>
            <li className="menu-item">
                <button onClick={onNewArticleClick}
                    className="px-8 py-1 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-800 rounded-md">
                    New Article
                </button>
            </li>
            <li className="menu-item" onClick={onMyBookmarks}>My Bookmarks</li>
            <li className="menu-item" onClick={onLogOutClick}>Log Out</li>
        </>
    )

    function onLogOutClick() {
        logout({returnTo: window.location.origin})
    }

    function onMyBookmarks() {
        navigate(PAGE_ROUTES.MY_BOOKMARKS);
    }

    function onNewArticleClick() {
        navigate(PAGE_ROUTES.NEW_ARTICLE);
    }
}

export default LoggedInNavBar;