
const SET_STEPS = 'SET_STEPS'
const SET_BALANCE = 'SET_BAlANCE'
const SET_TRAINS = 'SET_TRAINS'
const SET_KM = 'SET_KM'

const initialState = {
    steps: 0,
    km: 0,
    balance: 0,
    trains: [],
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STEPS:
            return { ...state, steps: action.steps }
        case SET_KM:
            return { ...state, km: action.km }
        case SET_BALANCE:
            return { ...state, balance: action.balance }
        case SET_TRAINS:
            return { ...state, trains: action.trains }
        default:
            return state
    }
}

const setSteps = (steps) => ({ type: SET_STEPS, steps })
const setBalance = (balance) => ({ type: SET_BALANCE, balance })
const setTrains = (trains) => ({ type: SET_TRAINS, trains })
const setKm = (km) => ({ type: SET_KM, km })

export const changedTrains = (trains, train) => dispatch => {
    console.log(trains, train, Number(train.kilometers))
    dispatch(setTrains(trains))
    dispatch(setKm(Number(train.kilometers)))
    dispatch(setBalance(train.balance))
    dispatch(setSteps(train.steps))
}

export const changedBalance = (balance) => dispatch => {
    console.log(balance)
    dispatch(setBalance(balance))
}