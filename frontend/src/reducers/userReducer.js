
export const registerNewUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
            }
        case 'USER_REGISTER_FAILED':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
            }
        case 'USER_LOGIN_FAILED':
            return {
                ...state, 
                loading: false,
                error: true
            }

            case 'USER_LOGOUT':
                return {
                    ...state,
                    
                }
        default:
            return state
    }
}