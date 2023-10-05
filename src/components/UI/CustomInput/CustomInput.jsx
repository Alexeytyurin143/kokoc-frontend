import React from 'react'
import styles from './CustomInput.module.scss'


const CustomInput = (props) => {
    return (
        <input className={styles.customInput} onChange={(event) => (

            props.setValue(typeof props.object == "object" ? (value) => (
                {
                    ...value,
                    [props.typeObject]: event.target.value
                }
            ) : event.target.value))}
            value={props.value}
            type={props.typeObject}
            placeholder={props.placeholder}
        />
    )
}

export default CustomInput
