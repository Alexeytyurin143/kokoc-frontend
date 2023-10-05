import React from 'react'
import { SettingsBlock } from './SettingsBlock/SettingsBlock'
import { SettingsItem } from './SettingsItem/SettingsItem' 
import { endSession } from '../../session'
import { useNavigate } from 'react-router'

export const SettingsContainer = ({user}) => {

    const navigate = useNavigate()
    const exitFromAccount = () => {
        alert('Вы уверены?')
        endSession()
        navigate('/mainpage')
    }

    return (
        <div>
            <SettingsBlock title='Компания'>
                <SettingsItem name={user.fundname ? user.fundname : 'Отсутствует'}  />
            </SettingsBlock>
            <SettingsBlock title='Ваш фонд'>
                <SettingsItem name={user.fundname ? user.fundname : 'Отсутствует'} />
            </SettingsBlock>
            <a href='' style={{ color: 'red'}} onClick={() => exitFromAccount()}>
                Выйти
            </a>
        </div>
    )
}

