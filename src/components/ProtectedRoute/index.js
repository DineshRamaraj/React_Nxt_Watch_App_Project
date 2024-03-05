import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'

import {MainContainer} from './styledComponents'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
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
