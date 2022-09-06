import React from "react";
import { Article } from "../../model";
import './DraftIndicator.scss';

export function DraftIndicator(props: {article: Article}) {
    const { published } = props.article;

    return (
        <>
            {!published && <div className="draft-indicator">Draft</div>}
        </>
    )
}