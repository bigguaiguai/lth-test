const initial = {
    num: 0
}

const numReducer = function (state = initial, action) {
    switch (action.type) {
        case 'ADD': {
            return {
                num: state.num + 1
            }
        }
        case 'REDUCE': {
            return {
                num: state.num - 1
            }
        }
        case 'RIDE': {
            return {
                num: state.num * state.num
            }
        }
        default:
            return state
    }
}

export default numReducer;