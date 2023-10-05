import React from 'react'
import styles from './SettingsBlock.module.scss'

export const SettingsBlock = ({ children, title }) => {
    return (
        <div className={styles.settingsBlock}>
            <div className={styles.title}>{title}</div>
            <div className={styles.settings}>{children}</div>
        </div>
    )
}
