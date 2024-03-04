import {Route} from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from '../LoginForm'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    return <Route to="/login" component={Login} />
  }
  return <Route {...props} />
}

export default ProtectedRoute
