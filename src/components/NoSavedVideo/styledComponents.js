import styled from 'styled-components'

export const NoSavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    min-height: 80vh;
  }
`

export const NoSavedImage = styled.img`
  width: 70%;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 900px) {
    width: 60%;
  }
  @media screen and (min-width: 1000px) {
    width: 30%;
  }
`

export const NoSavedHeading = styled.h1`
  text-align: center;
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#F8FBFC' : '#1c293a')};
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`

export const NoSavedDescription = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#91A1AD' : '#465568')};
  margin: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
