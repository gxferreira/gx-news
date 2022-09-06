import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components";
import { DraftIndicator } from "../../components/DraftIndicator/DraftIndicator";
import { CurrentUserContext } from "../../current-user";
import { Article } from "../../model";
import { ArticleStore } from "../../service";
import { PAGE_ROUTES } from "../page-routes";
import './ArticleViewContainer.scss';

export function ArticleViewContainer() {
    const { id } = useParams();
    const navigate = useNavigate()
    const { currentUser } = useContext(CurrentUserContext);
    const [ article, setArticle ] = useState<Article | null>(null);

    useEffect(() => {
        if(id && currentUser) {
            setArticle(ArticleStore.getArticle(id, currentUser))
        }
    }, [currentUser])
                                                                                                                                                                                                                                   
    return (article &&
        <article className="article-view-container">
            <h2>
                <div className="title-container">{article.title}</div>
                <DraftIndicator article={article} />
            </h2>
            <div className="article-description">
                {article.smallDescription}
            </div>
            <p>{article.content}</p>
            
            <div className="edit-button-container">
                {(currentUser?.userAuth0Id === article.user) && 
                    <Button text="Edit" type="button" onClick={() => onEditButtonClick(article)} />
                }
            </div>
        </article>
    )

    function onEditButtonClick(article: Article) {
        navigate(PAGE_ROUTES.EDIT_ARTICLE, {
            state: { article }
        })
    }
}