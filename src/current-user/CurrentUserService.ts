import { User } from "@auth0/auth0-react";
import { Auth0APIService } from "../service/Auth0UserService";
import { CurrentUserType } from "./CurrentUserType";

type Options = {
    auth0Token: string 
    user: User
    updateUserState: (user: CurrentUserType) => void
}

export const CurrentUserDataService = ({ user, updateUserState, auth0Token }: Options) => {
    if (!user.sub) {
        throw new Error('User Auth0 id not found!');
    }

    let currentUser = {
        userAuth0Id: user.sub,
        bookmarks: [] as string[]
    };

    loadBookmarks();

    return {
        addBookmark: addBookmark,
        removeBookmark: removeBookmark
    }

    async function addBookmark(newBookmark: string) {
        const { bookmarks, userAuth0Id } = currentUser;

        const newBookmarks = [...(currentUser.bookmarks || []), newBookmark];
        
        updateBookmarksMetadata(userAuth0Id, newBookmarks);
    }

    async function removeBookmark(bookmarkToRemove: string) {
        const { bookmarks, userAuth0Id } = currentUser;

        const newBookmarks = bookmarks.filter((b) => b !== bookmarkToRemove);

        updateBookmarksMetadata(userAuth0Id, newBookmarks);
    }

    async function loadBookmarks() {
        const auth0UserData = await Auth0APIService.getUser(auth0Token, currentUser.userAuth0Id)

        if (auth0UserData && auth0UserData.user_metadata && auth0UserData.user_metadata.bookmarks) {
            const bookmarks = auth0UserData.user_metadata.bookmarks;
            updateUser(
                { ...currentUser, bookmarks }
            )
        } else {
            console.warn('Bookmarks couldn\'t be loaded');
        }
    }

    function updateUser(newUser: Required<CurrentUserType>) {
        if (newUser) {
            currentUser = newUser;
            updateUserState(currentUser);
        }
    }

    async function updateBookmarksMetadata(userAuth0Id: string, bookmarks: string[]) {
        try {
            await Auth0APIService.updateUserMetadata(
                auth0Token, userAuth0Id, {
                    bookmarks
                }
            )
    
            updateUser({
                ...currentUser, bookmarks
            })          
        } catch(e) {
            console.error('Error updating bookmark data!');
            throw e;
        }
    }
}