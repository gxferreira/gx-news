import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "../../../containers";
import { Article } from "../../../model";
import { Bookmark } from "./Bookmark/Bookmark";
import { DraftIndicator } from "../../DraftIndicator/DraftIndicator";
import './ArticleSummary.scss';

export type ArticleSummaryProps = {
    article: Article
}

export function ArticleSummary(props: ArticleSummaryProps) {
    const navigate = useNavigate();
    const { image, smallDescription, title, category } = props.article;

    return (
        <div className="summary-container">
           <div className="image-container">
                <DraftIndicator article={props.article} />
                <img src={image} alt={title} />
            </div>
            <div className="info">
                <div className="title">{title}<br/><small>{category}</small></div>
                <div className="small-description">{smallDescription}</div>

                <div className="info-buttons">
                    <Bookmark article={props.article} />

                    <button onClick={() => onReadClick(props.article)}
                        className="px-8 py-1 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-800 rounded-md self-end">
                        Read
                    </button>
                </div>
            </div>
        </div>
    )

    function onReadClick({ id }: Article) {
        navigate(`${PAGE_ROUTES.ARTICLE_VIEW.replace(/:id/, id)}`);
    }
}