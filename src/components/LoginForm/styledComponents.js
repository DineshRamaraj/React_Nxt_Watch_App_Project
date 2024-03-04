import styled from 'styled-components'

export const MainLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#ffffff')};
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 50px 10px;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  box-shadow: 0px 0px 15px 2px
    ${props => (props.isDarkTheme ? 'transparent' : '#94a3b8')};
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 400px;
  }
`

export const LoginImage = styled.img`
  width: 100px;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    width: 140px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

export const CheckboxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 3px;
  cursor: pointer;
  margin-top: 3px;
  margin-left: 5px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const Input = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  border: 1px solid #475569;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  padding: 12px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`

export const CheckboxInput = styled.input`
  border-radius: 5px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const CustomerButton = styled.button`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ffffff;
  background-color: #3b82f6;
  border: 0px;
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  color: #ff0000;
`
