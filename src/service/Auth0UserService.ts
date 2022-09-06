import AUTH0_SETTINGS from "../auth0.settings";

const USERS_ENDPOINT = `https://${AUTH0_SETTINGS.domain}/api/v2`;

export const Auth0APIService = {
    getUser, updateUserMetadata
}

function getUser(auth0Token: string, userAuth0Id: string) {
    const getUserURL = `${USERS_ENDPOINT}/users/${userAuth0Id}`;

    const requestOptions = {
        headers: getRequestHeaders(auth0Token),
    }

    return fetch(getUserURL, requestOptions)
        .then(
            (response) => response.json()
        ).catch((error) => {
            console.error('Error loading getting user!')
            throw error;
        })
}

async function updateUserMetadata(auth0Token: string, userAuth0Id: string, newMetadata: {[prop: string]: any}) {

    const headers = {
        ...getRequestHeaders(auth0Token),
        'Content-Type': 'application/json'
    }

    const url = `${USERS_ENDPOINT}/users/${userAuth0Id}`

    const requestOptions = {
        method: 'PATCH', headers,
        body: JSON.stringify({
            user_metadata: newMetadata   
        })
    }

    return fetch(url, requestOptions);
}

function getRequestHeaders(token: string) {
    return {
        Authorization: `Bearer ${token}` 
    }
}
