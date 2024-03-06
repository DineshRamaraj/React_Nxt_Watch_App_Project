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
  SmNavbarContainer,
  MdNavbarContainer,
  DarkModeButton,
  HamburgerMenuButton,
  MenuPopupContainer,
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
      const {isDarkTheme, toggleDarkMode, hamburgerMenu} = value

      const onClickToggleDarkMode = () => {
        toggleDarkMode()
      }

      const onClickMenuButton = () => {
        hamburgerMenu()
      }

      const logoutButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <LogoLink to="/">
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
            <DarkModeButton
              type="button"
              onClick={onClickToggleDarkMode}
              data-testid="theme"
              isDarkTheme={isDarkTheme}
            >
              {isDarkTheme ? <FiSun size={25} /> : <BsMoon size={25} />}
            </DarkModeButton>

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
                <MenuPopupContainer>
                  <IoClose onClick={() => close()} />
                  <NavigationSideBar />
                </MenuPopupContainer>
              )}
            </Popup>
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
                  <PopupContainer>
                    <PopupHeading>
                      Are you sure you want to logout?
                    </PopupHeading>
                    <PopupButtonContainer>
                      <PopupCancel type="button" onClick={() => close()}>
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
          </SmNavbarContainer>
          <MdNavbarContainer>
            <DarkModeButton
              type="button"
              onClick={onClickToggleDarkMode}
              data-testid="theme"
              isDarkTheme={isDarkTheme}
            >
              {isDarkTheme ? <FiSun size={25} /> : <BsMoon size={25} />}
            </DarkModeButton>
            <MdProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
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
                  <PopupContainer>
                    <PopupHeading>
                      Are you sure you want to logout?
                    </PopupHeading>
                    <PopupButtonContainer>
                      <PopupCancel type="button" onClick={() => close()}>
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
          </MdNavbarContainer>
        </HeaderContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default withRouter(Header)
