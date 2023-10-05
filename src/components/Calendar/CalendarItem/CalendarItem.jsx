import React from 'react'
import styles from './CalendarItem.module.scss'
import doneIcon from '../../../assets/done.svg'
import notDoneIcon from '../../../assets/notdone.svg'

export const CalendarItem = ({ day, done, money, activity}) => {
    return (
        <div className={styles.calendarItem}>
            <div>
                <div className={styles.day}>{day}</div>
                <div className={styles.activity}>
                    {activity}
                </div>
                <div className={styles.money}>{done ? `${money}₽` : `Пропущено`}</div>
            </div>
            <div className={styles.done}>
                {done ? <img src={doneIcon} alt='Выполнено' /> : <img src={notDoneIcon} alt='Не выполнено' />}
            </div>
        </div>
    )
}
