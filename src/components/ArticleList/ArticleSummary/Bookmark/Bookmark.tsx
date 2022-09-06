import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../../../current-user/CurrentUserContext";
import { Article } from "../../../../model";
import './Bookmark.scss';

type BookmarkProps = {
    article: Article
}

export function Bookmark({ article }: BookmarkProps) {
    const [bookmarked, setBookmarked] = useState(false)
    const {currentUser, currentUserDataService} = useContext(CurrentUserContext)

    useEffect(() => {
        if (currentUser?.bookmarks) {
            const { bookmarks } = currentUser;
            setBookmarked(bookmarks !== null && bookmarks.includes(article.id))
        }
    }, [currentUser])

    return (
        <div className="bookmark-icon-container" onClick={onBookmarkClick}>
            { currentUser? (bookmarked ? '★' : '☆'):'' }
        </div>
    )

    function onBookmarkClick() {
        if (bookmarked) {
            currentUserDataService.removeBookmark(article.id);
        } else {
            currentUserDataService.addBookmark(article.id);
        }
    }
}