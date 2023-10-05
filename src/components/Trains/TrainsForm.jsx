import React, { useState } from 'react'
import styles from './Trains.module.scss'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import { CustomButton } from '../../components/UI/CustomButton/CustomButton'
import { CustomSelect } from '../UI/CustomSelect/CustomSelect'
import { activitiesList } from '../../data/data'
import validator from 'validator'
import { connect } from 'react-redux'
import { requestPostActivity } from '../../redux/registration-reducer'
import { getSession } from '../../session'


const TrainsForm = ({ trains, changedTrains, Modal, balance, steps, km }) => {

    const [trainsUserForm, setTrainsUserForm] = useState({
        email: getSession().email,
        time: '',
        distance: '',
        activity: '',
        choice: 0,
        a: 0,
        run: 0,
        cycle: 0,
        pulse: 150,
    })

    const onSubmitHandler = event => {
        event.preventDefault()
        if (validator.isEmpty(trainsUserForm.date)) {
            alert('Введите дату')
        } else if (validator.isEmpty(trainsUserForm.kilometers)) {
            alert('Введите пройденный путь')
        } else if (validator.isEmpty(trainsUserForm.activity)) {
            alert('Добавьте активность')
        } else {
            console.log(trainsUserForm)
            requestPostActivity(trainsUserForm)
            const newTrain = { ...trainsUserForm, kilometers: km + Number(trainsUserForm.kilometers), steps: steps + (Number(trainsUserForm.kilometers) * 1300), balance: balance + (5 * Number(trainsUserForm.kilometers)), balanceTrain: 5 * Number(trainsUserForm.kilometers) }
            trains.push(newTrain)
            changedTrains(trains, newTrain)
            Modal(false)
        }
    }

    return (
        <form className={styles.trainsForm} onSubmit={(event) => onSubmitHandler(event)}>
            <CustomInput
                setValue={setTrainsUserForm}
                object={trainsUserForm}
                typeObject='date'
                placeholder='Введите дату тренировки'
            />
            <CustomSelect
                options={activitiesList}
                onChange={(event) => setTrainsUserForm((value) => ({ ...value, activity: event.value }))}
            />
            <CustomInput
                setValue={setTrainsUserForm}
                object={trainsUserForm}
                typeObject='kilometers'
                placeholder='Введите количество км'
            />
            <CustomButton>
                Добавить
            </CustomButton>
        </form>
    )
}

const mapStateToProps = (state) => ({
    steps: state.main.steps,
    km: state.main.km
})

export const TrainsFormContainer = connect(mapStateToProps, { requestPostActivity })(TrainsForm)