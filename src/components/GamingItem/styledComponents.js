import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GamingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    width: 33%;
  }

  @media screen and (min-width: 768px) {
    width: 33%;
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
`

export const GameViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`
