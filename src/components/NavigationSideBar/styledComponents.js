import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding-top: 20px;
    background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
    width: 100%;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavBarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 30px;
  background-color: ${props => {
    if (props.isDarkTheme && props.isActive) {
      return '#383838'
    }
    if (props.isDarkTheme && !props.isActive) {
      return 'transparent'
    }
    if (!props.isDarkTheme && props.isActive) {
      return '#F1F5F9'
    }
    return 'transparent'
  }};
  color: ${props => (props.isActive ? '#ff0b37' : '#606060')};
  cursor: pointer;
  &:hover {
    transform: ${props => (props.isActive ? 'scale(1)' : 'scale(1.1)')};
    margin-left: ${props => (props.isActive ? '0px' : '5px')};
  }
  @media screen and (max-width: 769px) {
    &:hover {
      margin-left: ${props => (props.isActive ? '0px' : '20px')};
    }
  }
`

export const NavItem = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.isActive ? '16px' : '15px')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1C293A')};
  margin-left: 20px;
  font-weight: ${props => (props.isActive ? 500 : 400)};
`

export const NavBarContentContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-bottom: 0px;
  }
`

export const NavContentHeading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const NavContentImageContainer = styled.div`
  display: flex;
`

export const NavContentImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`

export const NavContentDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
