
const BASE_API = process.env.REACT_APP_BASE_API 
const api = {
    addPerson : BASE_API + '/users/addPerson',
    removePerson : BASE_API + '/users/removePerson',
    updatePerson : BASE_API + '/users/updatePerson',
    getPerson : BASE_API + '/users/getPerson',
    getPersonDetail : BASE_API + '/users/getPersonDetail',
}

export {api};