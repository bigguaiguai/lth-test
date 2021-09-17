

const BASE_API = process.env.REACT_APP_BASE_API;

const api = {
    login: BASE_API + '/login/login',
    register: BASE_API + '/login/register',
}

export {api}