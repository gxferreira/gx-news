import React from "react";
import { Article } from "../../model";
import { ArticleSummary } from "./ArticleSummary";
import './ArticleList.scss';

type ArticleListProps = {
    articles: Article[]
}

export function ArticleList({ articles }: ArticleListProps) {

    if (articles && articles.length) {
        return getArticleList()
    }
    
    return getNoArticles()

    function getArticleList() {
        return (
            <div className="article-list">{
                (articles as Article[]).map(
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
}