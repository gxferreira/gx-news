import { v4 as uuid } from "uuid";
import { CurrentUserType } from "../current-user";
import { Article } from "../model";

const ARTICLES_STORAGE_KEY = 'articles'

const ArticleStore = {
    listAll,
    listVisibleArticles,
    listByCategory,
    getArticle,
    add,
    updateArticle,
    listBookmarkedArticles
}

export default ArticleStore;

function listAll(): Article[] {
    const storedArticles = localStorage.getItem(ARTICLES_STORAGE_KEY);
    
    if (storedArticles) {
        return JSON.parse(storedArticles);
    }

    return [];
}

function listVisibleArticles(currentUser?: CurrentUserType) {
    return listAll()
        .filter((article) => visibleArticlesFilter(article));

    function visibleArticlesFilter({user, published}: Article) {
        if (published === true) {
            return true;
        }

        return user === currentUser?.userAuth0Id;
    }
}

function listByCategory(currentUser?: CurrentUserType, categoryToFilter?: string) {
    const articles = listVisibleArticles(currentUser);

    if (categoryToFilter) {
        return articles.filter(
            ({category}) => categoryToFilter === category
        )
    }

    return articles;
}

function getArticle(articleId: string, currentUser?: CurrentUserType) {
    const {[0]: article} =  listVisibleArticles(currentUser)
        .filter(({id}) => id === articleId)

    if(!article) {
        console.warn('Article not found for user!');
    }

    return article;
}

function listBookmarkedArticles(currentUser: CurrentUserType) {
    return listVisibleArticles(currentUser)
        .filter(({id}) => currentUser?.bookmarks?.includes(id));
}

function add(article: Omit<Article, "id">) {
    const articleToStore = {
        id: uuid(),
        ...article
    };

    localStorage.setItem(
        ARTICLES_STORAGE_KEY,
        JSON.stringify([...listAll(), articleToStore])
    )
}

function updateArticle(updatedArticle: Article) {
    const newCollection = [...listAll()];
    const articleIndex = newCollection.findIndex(
        ({id}) => id === updatedArticle.id
    )

    newCollection[articleIndex] = updatedArticle;
    localStorage.setItem(
        ARTICLES_STORAGE_KEY, JSON.stringify(newCollection)
    )
}
