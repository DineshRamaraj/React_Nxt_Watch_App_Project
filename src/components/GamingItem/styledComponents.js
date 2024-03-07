import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const GamingItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 10px;
  padding-bottom: 40px;
  @media screen and (min-width: 400px) {
    width: 50%;
  }
  @media screen and (min-width: 576px) {
    width: 33%;
  }

  @media screen and (min-width: 768px) {
    width: 33%;
  }

  @media screen and (min-width: 900px) {
    width: 25%;
    padding-right: 15px;
  }

  @media screen and (min-width: 1100px) {
    width: 20%;
    padding-right: 20px;
  }
`

export const GameImage = styled.img`
  width: 100%;
`

export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 5px;
  color: ${props => (props.isDarkTheme ? '#F8FAFC' : '#203152')};
  @media screen and (min-width: 900px) {
    font-size: 18px;
  }
`

export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
  margin-top: 5px;
  color: ${props => (props.isDarkTheme ? '#3A6789' : '#756F77')};
  @media screen and (min-width: 900px) {
    font-size: 14px;
  }
`
