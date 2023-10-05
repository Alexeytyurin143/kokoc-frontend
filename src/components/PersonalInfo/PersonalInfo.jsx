import React from 'react'
import styles from './PersonalInfo.module.scss'
import avatarImg from '../../assets/avatar.png'

export const PersonalInfo = ({ username, email }) => {
    return (
        <div className={styles.personalInfo}>
            <div className={styles.avatar}>
                <img src={avatarImg} alt='Аватарка' />
            </div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    )
}
