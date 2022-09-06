export interface Article {
    id: string;
    title: string;
    smallDescription: string;
    category: string;
    content: string;
    image: string;
    user?: string;
    published: boolean;
}