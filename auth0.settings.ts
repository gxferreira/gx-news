import { Auth0ProviderOptions } from "@auth0/auth0-react";

/**
 * REPLACE THOSE FIELDS WITH
 * AUTH0 DATA
 */
const domain = '{DOMAIN}';
const clientId = '{CLIENT_ID}'


const audience = `https://${domain}/api/v2/`;

const AUTH0_SETTINGS: Auth0ProviderOptions = {
    domain, audience, clientId,
    redirectUri: window.location.origin,
    scope: 'read:current_user update:current_user_metadata'
}

export default AUTH0_SETTINGS;