import React, { useContext, useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { CurrentUserContext } from "../../current-user";
import { Article } from "../../model";
import { ArticleStore } from "../../service";

export function MyBookmarksContainer() {
    const [bookmarkedArticles, setBookmarkedArticles] = useState([] as Article[]);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        setBookmarkedArticles(ArticleStore.listBookmarkedArticles(currentUser))
    }, [currentUser])

    return (
        <ArticleList articles={bookmarkedArticles} />
    )
}