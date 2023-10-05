import './App.scss'
import { MainPageContainer } from './pages/MainPage/MainPage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PersonalContainer } from './pages/Personal/Personal'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Login } from './pages/Register/Login'
import { MissionsContainer } from './pages/Missions/Missions'
import { TabBar } from './components/TabBar/TabBar'
import { RegisterForm } from './pages/Register/RegisterForm'
import { RatingContainer } from './pages/Rating/Rating'
import { Stats } from './pages/Stats/Stats'


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className='App'>
                    <div className='App__wrapper'>
                        <Routes>
                            <Route path='/mainpage' Component={MainPageContainer} />
                            <Route path='/personal' Component={PersonalContainer} />
                            <Route path='/login' Component={Login} />
                            <Route path='/missions' Component={MissionsContainer} />
                            <Route path="/register" Component={RegisterForm} />
                            <Route path="/rating" Component={RatingContainer} />
                            <Route path="/stats" Component={Stats} />
                            <Route path='*' element={<Navigate to='/mainpage' />} />
                        </Routes>
                    </div>
                    <TabBar />
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App
