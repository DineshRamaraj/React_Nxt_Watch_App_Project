import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
`

export const NotFoundImage = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const NotFoundHeading = styled.h1`
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#F8FBFC' : '#1c293a')};
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`

export const NotFoundDescription = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#91A1AD' : '#465568')};
  margin: 0px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
