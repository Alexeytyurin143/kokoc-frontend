import React, { useEffect } from 'react'
import styles from './Rating.module.scss'
import { connect } from 'react-redux'
import { requestAllUsers } from '../../redux/registration-reducer'

const Rating = ({ allUsers, requestAllUsers }) => {

    useEffect(() => {
        requestAllUsers()
    }, [])

    console.log(allUsers)

    allUsers.sort((a, b) => b.balance - a.balance)

    return (
        <div className={styles.rating}>
            <div className={styles.rating__title}>
                Топ пользователей:
            </div>
            <div className={styles.rating__list}>
                {allUsers.length > 0 ?
                    allUsers.map((user, i) => <div className={styles.rating__list__item} style={i === 0 ? { color: 'gold' } : { color: 'grey' }}>
                        <div>
                            {i+1} место
                        </div>
                        <div >
                            {user.username}
                        </div>
                        <div>
                            {user.balance} руб
                        </div>
                    </div>)
                    : <div className={styles.rating__nothing}>Нет пользователей</div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    allUsers: state.registration.allUsers,
})

export const RatingContainer = connect(mapStateToProps, { requestAllUsers })(Rating)
