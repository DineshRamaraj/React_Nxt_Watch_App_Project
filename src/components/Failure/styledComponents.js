import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
  }
`

export const FailureImage = styled.img`
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

export const FailureHeading = styled.h1`
  text-align: center;
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#F8FBFC' : '#1c293a')};
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`

export const FailureDescription = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#91A1AD' : '#465568')};
  margin: 0px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const FailureRetryButton = styled.button`
  font-size: 16px;
  font-family: 'Roboto';
  background-color: #4a47e0;
  color: #ffffff;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  margin-top: 30px;
`
