const isCookieExist = /userid=/.test(document.cookie);

const isLoggedIn = (state = isCookieExist, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return true;
        case 'LOGGED_OUT':
            return false;
        default:
            return state
    }
};

export default isLoggedIn;