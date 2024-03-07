import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ContextContainer from '../../Context'

import {
  MainLoginContainer,
  LoginContainer,
  LoginImage,
  FormContainer,
  InputContainer,
  CheckboxInputContainer,
  Input,
  CheckboxInput,
  Label,
  CheckboxLabel,
  CustomerButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    showSubmitError: false,
    errorMsg: '',
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login/'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      //   console.log(data.jwt_token)
      this.onSubmitSuccess(data.jwt_token)
    } else {
      //   console.log(data.error_msg)
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  render() {
    const {
      username,
      password,
      isChecked,
      showSubmitError,
      errorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ContextContainer.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <MainLoginContainer isDarkTheme={isDarkTheme}>
              <LoginContainer isDarkTheme={isDarkTheme}>
                <LoginImage
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormContainer onSubmit={this.submitForm}>
                  <InputContainer>
                    <Label htmlFor="username" isDarkTheme={isDarkTheme}>
                      USERNAME
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUserName}
                      isDarkTheme={isDarkTheme}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="password" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </Label>
                    <Input
                      id="password"
                      type={isChecked ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                      isDarkTheme={isDarkTheme}
                    />
                  </InputContainer>
                  <CheckboxInputContainer isDarkTheme={isDarkTheme}>
                    <CheckboxInput
                      id="checkbox"
                      type="checkbox"
                      checked={isChecked}
                      onChange={this.onClickCheckbox}
                      isDarkTheme={isDarkTheme}
                    />
                    <CheckboxLabel htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxInputContainer>
                  <CustomerButton type="submit">Login</CustomerButton>
                  {showSubmitError ? <ErrorMsg>*{errorMsg}</ErrorMsg> : ''}
                </FormContainer>
              </LoginContainer>
            </MainLoginContainer>
          )
        }}
      </ContextContainer.Consumer>
    )
  }
}
export default Login
