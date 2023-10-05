import React from 'react'
import styles from './SettingsItem.module.scss'

export const SettingsItem = ({ name, style }) => {
    return (
        <div className={styles.settingsItem} style={{ ...style }}>
            {name}
        </div>
    )
}
