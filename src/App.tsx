import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import AUTH0_SETTINGS from './auth0.settings';
import { Footer, NavBar } from './components';
import { ArticleViewContainer, HomeContainer, NewArticleContainer, PAGE_ROUTES } from './containers';
import { EditArticleContainer } from './containers/EditArticleContainer/EditArticleContainer';
import { MyBookmarksContainer } from './containers/MyBookmarksContainer';
import { CurrentUserContext, CurrentUserDataService, CurrentUserType } from './current-user';

const { 
  NEW_ARTICLE, 
  ARTICLE_LIST, 
  ARTICLE_VIEW,
  EDIT_ARTICLE,
  MY_BOOKMARKS
} = PAGE_ROUTES;

function App() {
  const [currentUser, setCurrentUser] = useState(null as CurrentUserType);
  const [currentUserDataService, setCurrentUserDataService] = useState({} as ReturnType<typeof CurrentUserDataService>);
  const {user, getAccessTokenSilently} = useAuth0()
  let auth0Token = null;

  useEffect(() => {
    if(user) {
      onUserChange()
    }
  }, [user, getAccessTokenSilently])

  return (
    <div className="App text-center">
      <CurrentUserContext.Provider value={{
        currentUser, currentUserDataService
      }}>
        <header>
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path={ARTICLE_LIST}
              element = { <HomeContainer /> }
            />
            <Route path={NEW_ARTICLE} 
              element = { <NewArticleContainer /> }
            />
            <Route path={ARTICLE_VIEW} 
              element = { <ArticleViewContainer />}
            />
            <Route path={EDIT_ARTICLE}
              element = {<EditArticleContainer />}
            />
            <Route path={MY_BOOKMARKS}
              element={<MyBookmarksContainer />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </CurrentUserContext.Provider>
    </div>
  );

  function onUserChange() {
    getAccessTokenSilently({
      audience: AUTH0_SETTINGS.audience,
      scope: "read:current_user",
    }).then(onTokenResponse)

    function onTokenResponse(token: string) {
      auth0Token = token;
      
      if (user && user.sub) {
        setCurrentUserDataService(
          CurrentUserDataService({
            auth0Token, user, 
            updateUserState: setCurrentUser
          })
        )
      }
    }
  }
}

export default App;
