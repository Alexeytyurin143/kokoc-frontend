import React from "react"
import styles from './CustomButton.module.scss'

export const CustomButton = ({ style, children, onClickHandler }) => {
    return (
        <button style={{ ...style }} className={styles.customButton} onClick={onClickHandler}>
            {children}
        </button>
    )
}