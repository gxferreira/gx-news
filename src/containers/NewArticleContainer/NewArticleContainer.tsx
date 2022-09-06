import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleSubmission, SubmissionFormData } from "../../components/ArticleSubmission/ArticleSubmission";
import { CurrentUserContext } from "../../current-user";
import { PLACEHOLDER_IMAGE } from "../../model";
import { ArticleStore } from "../../service";
import { PAGE_ROUTES } from "../page-routes";
import './NewArticleContainer.scss';

function NewArticleContainer() {
    const navigate = useNavigate();
    const { currentUser } = useContext(CurrentUserContext);

    return (
        <ArticleSubmission onSubmission={onSubmission} />
    )
    
    function onSubmission(articleFormData: SubmissionFormData) {
        const user = currentUser?.userAuth0Id;
        
        ArticleStore.add({
            ... articleFormData,
            image: PLACEHOLDER_IMAGE,
            user: user
        });
        
        navigate(PAGE_ROUTES.ARTICLE_LIST);
    }
}

export default NewArticleContainer;