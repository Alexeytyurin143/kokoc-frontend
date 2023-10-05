import React from 'react'
import styles from './MainInfo.module.scss'

export const MainInfo = ({ totalSteps, totalMoney, km }) => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.stepsBlock}>
                    Всего шагов <div>{totalSteps}</div>
                </div>
                <div className={styles.stepsBlock}>
                    Всего км <div>{km}</div>
                </div>
            </div>
            <div className={styles.todayMoney}>
                Вы заработали <span>{totalMoney}₽</span>&nbsp;всего
            </div>
        </>
    )
}
