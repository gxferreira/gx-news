import React, { ChangeEvent, FormEvent, useState } from "react";
import { Article, ARTICLE_CATEGORIES } from "../../model";
import { Button, Checklist, Select, TextArea, TextInput } from "../form";

export type SubmissionFormData = {
    title: string
    smallDescription: string
    content: string
    category: string
    published: boolean
}

type ArticleSubmissionProps = {
    article?: Article
    onSubmission: (submissionData: SubmissionFormData) => void
}

export function ArticleSubmission(
    {onSubmission, article}: ArticleSubmissionProps
) {
    const [submissionFormData, setSubmissionFormData] = useState<SubmissionFormData>(getFormInitialState());
    
    return (
        <form className="news-submission-container" 
            onSubmit={onSubmitForm}>
            <Checklist name="published" label="Published" 
                onChange={onFormElementChange}
                value={submissionFormData.published} />
            
            <TextInput name="title" label="Title" 
                onChange={onFormElementChange}
                value={submissionFormData.title} />
            
            <TextArea name="smallDescription" label="Small Description"
                onChange={onFormElementChange}
                value={submissionFormData.smallDescription}/>

            <Select name="category" label="Category" options={getCategoryOptions()}
                value={submissionFormData.category}
                onChange={onFormElementChange}
            />
            
            <TextArea name="content" label="Content"
                onChange={onFormElementChange}
                rows={12}
                value={submissionFormData.content} />

            <Button text="Submit" type="submit" />
        </form>
    )

    function onFormElementChange({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;

        setSubmissionFormData({
            ...submissionFormData, [target.name]: value
        })
    }

    function onSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmission(submissionFormData)
    }

    function getFormInitialState() {
        let defaultValue = {
            title: '',
            smallDescription: '',
            content: '',
            category: '',
            published: false
        }

        if (article) {
            return {
                ...article
            }
        }

        return defaultValue;
    }
}

function getCategoryOptions() {
    return ARTICLE_CATEGORIES.map((text) => ({ text }))
}