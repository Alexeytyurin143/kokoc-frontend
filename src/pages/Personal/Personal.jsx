import React, { useEffect } from 'react'
import { PersonalInfo } from '../../components/PersonalInfo/PersonalInfo'
import { SettingsContainer } from '../../components/Settings/Settings'
import { getSession } from '../../session'

import { connect } from 'react-redux'
import { requestGetUser } from '../../redux/registration-reducer'

const Personal = ({requestGetUser, user}) => {
    useEffect(() => {
        requestGetUser(getSession().email)
    }, [])

    return (
        <div className='personal'>
            <PersonalInfo username={user.username} email={user.email} />
            <SettingsContainer user={user}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    user: state.registration.user,
})

export const PersonalContainer = connect(mapStateToProps, { requestGetUser })(Personal)