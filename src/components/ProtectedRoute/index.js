import {Route} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import Login from '../LoginForm'

import {MainContainer} from './styledComponents'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Route to="/login" component={Login} />
  }
  return (
    <>
      <Header />
      <MainContainer>
        <NavigationSideBar />
        <Route {...props} />
      </MainContainer>
    </>
  )
}

export default ProtectedRoute
