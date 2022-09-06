import React, { useContext, useEffect, useState } from "react";
import { ArticleSummary, CategoryFilter } from "../../components";
import { ArticleList } from "../../components/ArticleList/ArticleList";
import { CurrentUserContext } from "../../current-user";
import { Article } from "../../model";
import { ArticleStore } from "../../service";
import './HomeContainer.scss'

export function HomeContainer() {
    const [articleList, setArticleList] = useState([] as Article[]);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        setArticleList(ArticleStore.listVisibleArticles(currentUser))
    }, [currentUser])

    return (
        <div className="article-list-container">
            <CategoryFilter onCategorySelection={onCategorySelection} />
            <ArticleList articles={articleList} />
        </div>
    )

    function getArticleList() {
        return (
            <div className="article-list">{
                (articleList as Article[]).map(
                    (article, index) => 
                        <ArticleSummary article={article} key={index} />
                )
            }</div>
        )
    }

    function getNoArticles() {
        return (
            <div className="no-articles">
                No articles found!
            </div>
        )
    }

    function onCategorySelection(category?: string) {
        setArticleList(
            ArticleStore.listByCategory(currentUser, category)
        )
    }
}