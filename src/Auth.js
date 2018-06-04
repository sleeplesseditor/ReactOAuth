import auth0, { WebAuth } from 'auth0-js';

class Auth { 
    auth0 = new WebAuth({ 
        domain: 'react-secure-co.eu.auth0.com',
        clientID: 'iHstkM4DgV5NLPFEdZRpPdtF1cbL1zJi',
        redirectUri: 'http://localhost:1234/callback',
        responseType: 'token'
    });

    login = () => {
        this.auth0.authorize();
    }

    handleAuthentication = () => {

    }

    logout = () => {

    }

    isAuthenticated() {
        return false;
    }
}

export default Auth;