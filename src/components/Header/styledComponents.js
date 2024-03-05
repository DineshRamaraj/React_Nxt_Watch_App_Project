import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 10px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (min-width: 576px) {
    padding: 0px 40px;
  }
`

export const LogoLink = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const WebsiteLogo = styled.img`
  width: 100%;
`

export const SmNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DarkModeButton = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const HamburgerMenuButton = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 15px;
`

export const MenuPopupContainer = styled.div`
  width: 300px;
  min-height: 100vh;
`

export const LogoutButton = styled.button`
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 15px;
`

export const MdNavbarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    display: flex;
    align-items: center;
  }
`
export const MdProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 25px;
  cursor: pointer;
`

export const MdLogoutButton = styled.button`
  padding: 5px 20px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  margin-left: 25px;
  border-radius: 5px;
  cursor: pointer;
`
export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#ffffff')};
  box-shadow: 0px 0px 15px 2px
    ${props => (props.isDarkTheme ? 'transparent' : '#94a3b8')};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopupHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
`

export const PopupButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`

export const PopupCancel = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #616e7c;
  color: #616e7c;
  border-radius: 5px;
  cursor: pointer;
`

export const PopupConfirm = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  padding: 8px 20px;
  background-color: #3b82f6;
  color: #ffffff;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
`
