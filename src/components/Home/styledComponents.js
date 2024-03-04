import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  min-height: 100vh;
  width: 100%;
  padding: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 400px;
  max-width: 60%;
  border: 1px solid #424242;
  height: 40px;
  border-radius: 5px;
`

export const SearchInput = styled.input`
  padding: 5px 25px;
  background-color: transparent;
  width: 80%;
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#424242')};
  outline: none;
`

export const SearchIcon = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#F4F4F4')};
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  border-left: 1px solid #424242;
  cursor: pointer;
  border-radius: 0px 5px 5px 0px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImage = styled.img`
  width: 40%;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #1c293a;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #465568;
`

export const FailureRetryButton = styled.button`
  font-size: 14px;
  font-family: 'Roboto';
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
