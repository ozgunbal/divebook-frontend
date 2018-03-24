const isCookieExist = !!localStorage.getItem('token');

const isLoggedIn = (state = isCookieExist, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            localStorage.setItem('token', action.token);
            return true;
        case 'LOGGED_OUT':
            localStorage.removeItem('token');
            return false;
        default:
            return state
    }
};

export default isLoggedIn;