import React, {useState} from 'react'
import styles from './Trains.module.scss'
import { CalendarItem } from '../Calendar/CalendarItem/CalendarItem'
import { Modal } from '../Modal/Modal'
import { TrainsFormContainer } from './TrainsForm'


export const Trains = ({changedTrains, trains, mainData}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className={styles.trains}>
            <div className={styles.trains__title}>
                Ваши тренировки:
            </div>

            <a href="#" className={styles.trains__add} onClick={() => setModalActive(true)}>
                Добавить тренировку
            </a>

            <div className={styles.trains__calendar}>
                {trains.map((train, i) => <CalendarItem day={train.date} done={true} money={train.balanceTrain} activity={train.activity} key={i}/>)}
            </div>


            <Modal active={modalActive} setActive={setModalActive}>
                Новая тренировка
                <TrainsFormContainer changedTrains={changedTrains} trains={trains}  Modal = {setModalActive} mainData = {mainData}/>
            </Modal>
        </div>
    )
}