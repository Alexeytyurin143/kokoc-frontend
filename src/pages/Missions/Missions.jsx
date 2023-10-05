import React from 'react'
import { useState } from 'react'
import { Mission } from '../../components/Mission/Mission'
import styles from './Missions.module.scss'
import { Modal } from '../../components/Modal/Modal'
import { connect } from 'react-redux'
import { changedBalance } from '../../redux/main-reducer'

export const Missions = ({steps, balance, changedBalance}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className={styles.missions}>
            <Mission title='Пройти 15000 шагов' mainBalance = {balance} active={steps} done={false} onClickHandler={() => setModalActive(true)} value = {15000} changedBalanceHandler={changedBalance} price = {100}/>
            <Modal active={modalActive} setActive={setModalActive}>
                <p style={{fontSize: 24}}>
                    Чтобы получить приз, 
                    <br />
                    запиши тренировку на главной странице
                </p>
            </Modal>
        </div>
    )
}


const mapStateToProps = (state) => ({
    steps: state.main.steps,
    balance: state.main.balance,
    km: state.main.km
})

export const MissionsContainer = connect(mapStateToProps, {changedBalance})(Missions)