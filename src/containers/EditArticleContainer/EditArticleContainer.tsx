import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArticleSubmission, SubmissionFormData } from "../../components";
import { Article } from "../../model";
import { ArticleStore } from "../../service";
import { PAGE_ROUTES } from "../page-routes";

export function EditArticleContainer() {
    const { state }: { state: any } = useLocation();
    const navigate = useNavigate()
    const article: Article = state.article;
    
    return (
        <ArticleSubmission article={article}
            onSubmission={onSubmission}
        />
    )

    function onSubmission(articleFormData: SubmissionFormData) {
        const newArticle: Article = Object.assign(
            article, articleFormData
        );
        
        ArticleStore.updateArticle(newArticle);

        navigate(PAGE_ROUTES.ARTICLE_LIST);
    }
}