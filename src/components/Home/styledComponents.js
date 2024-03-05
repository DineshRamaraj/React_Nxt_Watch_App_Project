import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  height: 90vh;
  max-height: 100vh;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #424242;
  height: 40px;
  border-radius: 5px;
  max-width: 100%;
  @media screen and (min-width: 576px) {
    min-width: 400px;
    max-width: 70%;
  }
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
  @media screen and (min-width: 900px) {
    max-width: 50%;
  }
`

export const SearchInput = styled.input`
  padding: 10px;
  padding-left: 25px;
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

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#F9F9F9')};
`

export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 50vh;
  margin-top: 20px;
`
