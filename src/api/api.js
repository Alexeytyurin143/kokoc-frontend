import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://45.95.234.99:8080',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const mainAPI = {
    getAllFunds() {
        return instance.get('/api/funds/getAllFunds')
    },

    getAllCompanies() {
        return instance.get('/api/companies/getAllCompanies')
    },

    saveUser(object) {
        return instance.post('/api/users/saveUser', object)
    },

    getAllUsers() {
        return instance.get('/api/users/getAllUsers')
    },

    showUserInfo(email) {
        return instance.get(`/api/users/showUserInfo/${email}`)
    }, 

    activity(object) {
        return instance.post('/api/users/activity', object)
    }
}
