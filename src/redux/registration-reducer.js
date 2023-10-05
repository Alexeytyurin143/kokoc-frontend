import { mainAPI } from '../api/api'

const SET_COMPANIES = 'SET_COMPANIES'
const SET_FUNDS = 'SET_FUNDS'
const SET_ALL_USERS = 'SET_ALL_USERS'
const POST_USER = 'POST_USER'

const initialState = {
    companies: [{companyname: "Кокос Group"}],
    funds: [{fundname: 'Фонд Константина Хабенского'}],
    user: {},
    allUsers: [],
}

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES:
            return { ...state, companies: action.companies }

        case SET_FUNDS:
            return { ...state, funds: action.funds }

        case SET_ALL_USERS:
            return { ...state, allUsers: action.allUsers }

        case POST_USER:
            return { ...state, user: action.user }

        default:
            return state
    }
}

const setCompanies = (companies) => ({ type: SET_COMPANIES, companies })
const setFunds = (funds) => ({ type: SET_FUNDS, funds })
const setAllUsers = (allUsers) => ({ type: SET_ALL_USERS, allUsers })
const postUser = (user) => ({ type: POST_USER, user })

export const requestData = () => async (dispatch) => {
    const responseCompanies = await mainAPI.getAllCompanies()
    const responseFunds = await mainAPI.getAllFunds()

    if (responseCompanies.status === 200 && responseFunds.status === 200) {
        dispatch(setCompanies(responseCompanies.data))
        dispatch(setFunds(responseFunds.data))
    } else {
        console.log(responseCompanies)
        console.log(responseFunds)
    }
}

export const requestAllUsers = () => async (dispatch) => {
    const response = await mainAPI.getAllUsers()
    if (response.status === 200) {
        dispatch(setAllUsers(response.data))
    } else {
        console.log(response)
    }
}

export const requestPostUser = (object) => async (dispatch) => {
    const response = await mainAPI.saveUser(object)
    if (response.status === 200) {
        dispatch(postUser(response.data))
        console.log(response.data)
    } else {
        console.log(response)
    }
}

export const requestGetUser = (email) => async dispatch => {
    const response = await mainAPI.showUserInfo(email)
    if (response.status === 200) {
        dispatch(postUser(response.data))
        console.log(response.data)
    } else {
        console.log(response)
    }
}

export const requestPostActivity = (object) => async (dispatch) => {
    const response = await mainAPI.activity(object)

    console.log(response)
}