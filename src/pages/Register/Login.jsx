import React, { useState } from 'react'
import styles from './Register.module.scss'
import { CustomButton } from '../../components/UI/CustomButton/CustomButton'
import CustomInput from '../../components/UI/CustomInput/CustomInput'
import { useNavigate } from 'react-router'
import { signInUser } from '../../firebase'
import { startSession } from '../../session'

export const Login = () => {

    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const goToRegisterUser = () => {
        navigate('/register')
    }

    const goToLogin = async (event) => {
        event.preventDefault()
        try {
            let response = await signInUser(userForm.email, userForm.password)
            startSession(response.user)
            setTimeout(() => {
                navigate('/mainpage')
                location.reload()
            }, 500)
        } catch (e) {
            console.log(e)
            alert(e);
        }
    }

    return (
        <form className={styles.register} onSubmit={goToLogin}>
            <div className={styles.register__title}>Вход</div>
            <div className={styles.register__form}>
                <CustomInput
                    setValue={setUserForm}
                    object={userForm}
                    typeObject='email'
                    placeholder='Введите имя email'
                />
                <CustomInput
                    setValue={setUserForm}
                    object={userForm}
                    typeObject='password'
                    placeholder='Введите пароля'
                />
                <CustomButton style={{ marginBottom: 10, width: 100 }}>
                    Войти
                </CustomButton>
                <div className={styles.register__noAccount}>


                    <div className={styles.register__noAccount__title}>
                        Нет аккаунта?
                    </div>

                    <a onClick={() => goToRegisterUser()} href='#'>
                        Регистрация
                    </a>
                </div>
            </div>
        </form>
    )
}