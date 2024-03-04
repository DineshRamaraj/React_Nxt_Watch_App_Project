import styled from 'styled-components'

export const NavigationContainer = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    // display: block;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0px 0px 10px;
    background-color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
    min-width: 250px;
    max-width: 22%;
    height: 100vh;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavBarItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 30px;
  background-color: ${props => {
    if (props.isDarkTheme && props.isActive) {
      return '#313131'
    }
    if (props.isDarkTheme && !props.isActive) {
      return 'transparent'
    }
    if (!props.isDarkTheme && props.isActive) {
      return '#ebebeb'
    }
    return 'transparent'
  }};
  color: ${props => (props.isActive ? '#ff0b37' : '#7e858e')};
  cursor: pointer;
  &:hover {
    transform: ${props => (props.isActive ? 'scale(1)' : 'scale(1.1)')};
    margin-left: ${props => (props.isActive ? '0px' : '5px')};
  }
`

export const NavItem = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.isActive ? '16px' : '15px')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 20px;
  font-weight: ${props => (props.isActive ? 500 : 400)};
`

export const NavBarContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const NavContactHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const NavContactImageContainer = styled.div`
  display: flex;
`

export const NavContactImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`

export const NavContactDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`