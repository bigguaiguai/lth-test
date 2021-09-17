const initial = {
    userName: '',
}

const userReducer = function (state = initial, action) {
    switch (action.type) {
        case 'getUserName': {
            return {
                userName: state.userName
            }
        }
        default:
            return state
    }
}

export default userReducer;