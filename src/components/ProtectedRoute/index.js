import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'

import {
  MainContainer,
  NavigationContainer,
  RouteContainer,
} from './styledComponents'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <MainContainer>
        <NavigationContainer>
          <NavigationSideBar />
        </NavigationContainer>
        <RouteContainer>
          <Route {...props} />
        </RouteContainer>
      </MainContainer>
    </>
  )
}

export default ProtectedRoute
