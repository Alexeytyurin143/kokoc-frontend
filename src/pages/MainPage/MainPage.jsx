import React from 'react'
import { MainInfo } from '../../components/MainInfo/MainInfo'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'
import { isLoggedIn } from '../../session'
import { connect } from 'react-redux'
import { changedTrains } from '../../redux/main-reducer'
import { Trains } from '../../components/Trains/Trains'
import { getSession } from '../../session'
import { requestGetUser } from '../../redux/registration-reducer'

const MainPage = ({ steps, balance, trains, km, changedTrains, user, requestGetUser}) => {

    useEffect(() => {
        requestGetUser(getSession().email)
    }, [])


    const mainData = {
        totalSteps: steps,
        totalMoney: user.balance,
        km: km,
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/login')
        }
    })

    return (
        <div className='mainPage'>
            <MainInfo {...mainData} />
            <Trains trains={trains} changedTrains={changedTrains}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    steps: state.main.steps,
    balance: state.main.balance,
    trains: state.main.trains,
    km: state.main.km,
    user: state.registration.user,
})

export const MainPageContainer = connect(mapStateToProps, { changedTrains,requestGetUser })(MainPage)