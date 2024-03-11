import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {BsMoon} from 'react-icons/bs'
import {FiMenu, FiLogOut, FiSun} from 'react-icons/fi'
import {IoClose} from 'react-icons/io5'
import NavigationSideBar from '../NavigationSideBar'
import ContextComponent from '../../Context'

import {
  HeaderContainer,
  LogoLink,
  WebsiteLogo,
  NavbarItem,
  SmNavbarContainer,
  MdNavbarContainer,
  DarkModeButton,
  HamburgerMenuButton,
  MenuPopupContainer,
  SmMenuCloseButton,
  SmMenuContainer,
  LogoutButton,
  MdProfileImage,
  MdLogoutButton,
  LogoutContainer,
  PopupContainer,
  PopupHeading,
  PopupButtonContainer,
  PopupCancel,
  PopupConfirm,
} from './styledComponents'

const Header = props => (
  <ContextComponent.Consumer>
    {value => {
      const {
        isDarkTheme,
        toggleDarkMode,
        hamburgerMenu,
        changeActiveTabId,
      } = value

      const onClickToggleDarkMode = () => {
        toggleDarkMode()
      }

      const onClickMenuButton = () => {
        hamburgerMenu()
      }

      const onClickHome = () => {
        changeActiveTabId('home')
      }

      const logoutButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <LogoLink to="/" onClick={onClickHome}>
            <WebsiteLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </LogoLink>
          <SmNavbarContainer>
            <NavbarItem>
              <DarkModeButton
                type="button"
                onClick={onClickToggleDarkMode}
                data-testid="theme"
                isDarkTheme={isDarkTheme}
              >
                {isDarkTheme ? <FiSun size={25} /> : <BsMoon size={25} />}
              </DarkModeButton>
            </NavbarItem>
            <NavbarItem>
              <Popup
                modal
                trigger={
                  <HamburgerMenuButton
                    type="button"
                    onClick={onClickMenuButton}
                    isDarkTheme={isDarkTheme}
                  >
                    <FiMenu size={25} />
                  </HamburgerMenuButton>
                }
                className="popup-content"
              >
                {close => (
                  <MenuPopupContainer isDarkTheme={isDarkTheme}>
                    <SmMenuCloseButton>
                      <IoClose size={25} onClick={() => close()} />
                    </SmMenuCloseButton>
                    <SmMenuContainer>
                      <NavigationSideBar close={close} />
                    </SmMenuContainer>
                  </MenuPopupContainer>
                )}
              </Popup>
            </NavbarItem>
            <NavbarItem>
              <LogoutContainer>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                      <FiLogOut size={25} />
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupHeading isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </PopupHeading>
                      <PopupButtonContainer>
                        <PopupCancel
                          type="button"
                          onClick={() => close()}
                          isDarkTheme={isDarkTheme}
                        >
                          Cancel
                        </PopupCancel>
                        <PopupConfirm type="button" onClick={logoutButton}>
                          Confirm
                        </PopupConfirm>
                      </PopupButtonContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </LogoutContainer>
            </NavbarItem>
          </SmNavbarContainer>
          <MdNavbarContainer>
            <NavbarItem>
              <DarkModeButton
                type="button"
                onClick={onClickToggleDarkMode}
                data-testid="theme"
                isDarkTheme={isDarkTheme}
              >
                {isDarkTheme ? <FiSun size={25} /> : <BsMoon size={25} />}
              </DarkModeButton>
            </NavbarItem>
            <NavbarItem>
              <MdProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </NavbarItem>
            <NavbarItem>
              <LogoutContainer>
                <Popup
                  modal
                  trigger={
                    <MdLogoutButton type="button" isDarkTheme={isDarkTheme}>
                      Logout
                    </MdLogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupHeading isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </PopupHeading>
                      <PopupButtonContainer>
                        <PopupCancel
                          type="button"
                          onClick={() => close()}
                          isDarkTheme={isDarkTheme}
                          data-testid="close"
                        >
                          Cancel
                        </PopupCancel>
                        <PopupConfirm type="button" onClick={logoutButton}>
                          Confirm
                        </PopupConfirm>
                      </PopupButtonContainer>
                    </PopupContainer>
                  )}
                </Popup>
              </LogoutContainer>
            </NavbarItem>
          </MdNavbarContainer>
        </HeaderContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default withRouter(Header)
