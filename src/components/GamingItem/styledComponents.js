import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 10px;
  padding-bottom: 40px;
  flex-grow: 1;
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

export const GameLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const GameImage = styled.img`
  width: 100%;
`

export const GameTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 5px;
  color: ${props => (props.isDarkTheme ? '#F8FAFC' : '#203152')};
`

export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px;
  margin-top: 5px;
  color: ${props => (props.isDarkTheme ? '#3A6789' : '#756F77')};
`
