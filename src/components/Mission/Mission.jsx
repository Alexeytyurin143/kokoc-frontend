import React, { useEffect, useState } from 'react'
import styles from './Mission.module.scss'
import missionIcon from '../../assets/mission_icon.svg'

export const Mission = ({ title, done, onClickHandler, active, value, changedBalanceHandler, price, mainBalance }) => {

    const [isButtonActive, setIsButtonActive] = useState(!done);

    if (value <= active) {
        done = true
    }

    const getPrice = (event) => {
        changedBalanceHandler(mainBalance+price)
        done = false
        setIsButtonActive(false)
        console.log(event)
    }

    return (
        <div className={styles.mission} onClick={done? () => {} : onClickHandler}>
            <div className={styles.mission__title}>{title}</div>
            <img src={missionIcon} alt='Иконка кроссовка' className={styles.mission__icon} />
            <div className={styles.mission__prize}>
                Награда: 100руб
            </div>
            <div>
                {active} / {value}
            </div>
            <div className={styles.mission__done}>
                {done ? isButtonActive ? <div> Выполнено: <button href='#' onClick={(event) => getPrice(event)}>Забрать награду</button></div> : null : 'Не выполнено'}
            </div>
            <span className={styles.mission__click}>
                Нажми на меня)
            </span>
        </div>
    )
}
