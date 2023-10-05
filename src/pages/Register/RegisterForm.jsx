import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './Register.module.scss'
import { useNavigate } from 'react-router'
import validator from 'validator'
import { startSession } from '../../session'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import { CustomButton } from '../../components/UI/CustomButton/CustomButton'
import { CustomSelect } from '../../components/UI/CustomSelect/CustomSelect'
import { requestData, requestPostUser } from '../../redux/registration-reducer'
import { connect } from 'react-redux'
import { createUser } from '../../firebase'
import { activitiesList } from '../../data/data'

const Register = ({ requestData, requestPostUser, companies, funds }) => {
    const [userForm, setUserForm] = useState({
        username: '',
        password: '',
        company: '',
        balance: 0,
        activity: '',
        calories: 0,
        email: '',
        charity: '',
        weight: 0,
        height: 0,
        age: 0,
        sex: "male"
    })

    const navigate = useNavigate()

    useEffect(() => {
        requestData()
    }, [])

    const goBack = () => {
        navigate('*')
    }

    const submitHandler = async (event) => {
        event.preventDefault()

        if (validator.isEmpty(userForm.username)) {
            alert('Введите имя')
        } else if (!validator.isEmail(userForm.email)) {
            alert('Вы не ввели E-mail')
        } else if (!validator.isStrongPassword(userForm.password, { minSymbols: 0 })) {
            alert('Пароль должен состоять из одной строчной, прописной буквы и цифры, не менее 8 символов')
        } else {
            try {
                let response = await createUser(userForm.email, userForm.password)
                startSession(response.user)
                setTimeout(() => {
                    navigate('/mainpage')
                    location.reload()
                    requestPostUser(userForm)
                }, 500)
            } catch (e){
                console.log(e)
                alert(e);
            }
        }
    }

    const companiesList = companies.map((company) => ({ value: company.companyname, label: company.companyname }))
    const fundsList = funds.map((fund) => ({ value: fund.fundname, label: fund.fundname }))

    return (
        <div className={styles.registerForm}>
            <a onClick={() => goBack()} href='#'>
                Назад
            </a>

            <form onSubmit={submitHandler} className={styles.registerForm__container}>
                <div className={styles.description}>Введите имя</div>
                <CustomInput setValue={setUserForm} object={userForm} typeObject='username' placeholder='Введите имя' />

                <div className={styles.description}>Выберите копманию</div>
                <CustomSelect
                    options={companiesList}
                    onChange={(event) => setUserForm((value) => ({ ...value, company: event.value }))}
                />

                <div className={styles.description}>Выберите активность</div>
                <CustomSelect
                    options={activitiesList}
                    onChange={(event) => setUserForm((value) => ({ ...value, activity: event.value }))}
                />

                <div className={styles.description}>Выберите благотворительный фонд</div>
                <CustomSelect
                    options={fundsList}
                    onChange={(event) => setUserForm((value) => ({ ...value, charity: event.value }))}
                />

                <div className={styles.description}>Введите почту</div>
                <CustomInput setValue={setUserForm} object={userForm} typeObject='email' placeholder='Введите почту' />

                <div className={styles.description}>Введите пароль</div>
                <CustomInput
                    setValue={setUserForm}
                    object={userForm}
                    typeObject='password'
                    placeholder='Введите пароль'
                />

                <CustomButton onClickHandler={() => console.log(userForm)}>Зарегистрироваться</CustomButton>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    companies: state.registration.companies,
    funds: state.registration.funds,
})

export const RegisterForm = connect(mapStateToProps, { requestData, requestPostUser })(Register)
