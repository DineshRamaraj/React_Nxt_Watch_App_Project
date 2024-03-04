import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ContextComponent from '../../Context'

import {
  NavigationContainer,
  NavBarItem,
  NavItem,
  NavBarContainer,
  NavBarContactContainer,
  NavContactHeading,
  NavContactImageContainer,
  NavContactImage,
  NavContactDescription,
} from './styledComponents'

const NavigationSideBar = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme, activeTabId, changeActiveTabId} = value

      const onClickHome = () => {
        changeActiveTabId('home')
      }

      const onClickTrending = () => {
        changeActiveTabId('trending')
      }

      const onClickGaming = () => {
        changeActiveTabId('gaming')
      }

      const onClickSaved = () => {
        changeActiveTabId('saved')
      }

      return (
        <NavigationContainer isDarkTheme={isDarkTheme}>
          <NavBarContainer>
            <NavBarItem
              to="/"
              isActive={activeTabId === 'home'}
              isDarkTheme={isDarkTheme}
              onClick={onClickHome}
            >
              <AiFillHome size={25} />
              <NavItem
                isActive={activeTabId === 'home'}
                isDarkTheme={isDarkTheme}
              >
                Home
              </NavItem>
            </NavBarItem>
            <NavBarItem
              to="/trending"
              isActive={activeTabId === 'trending'}
              onClick={onClickTrending}
              isDarkTheme={isDarkTheme}
            >
              <HiFire size={25} />
              <NavItem
                isActive={activeTabId === 'trending'}
                isDarkTheme={isDarkTheme}
              >
                Trending
              </NavItem>
            </NavBarItem>
            <NavBarItem
              to="/gaming"
              isActive={activeTabId === 'gaming'}
              onClick={onClickGaming}
              isDarkTheme={isDarkTheme}
            >
              <SiYoutubegaming size={25} />
              <NavItem
                isActive={activeTabId === 'gaming'}
                isDarkTheme={isDarkTheme}
              >
                Gaming
              </NavItem>
            </NavBarItem>
            <NavBarItem
              to="/saved"
              isActive={activeTabId === 'saved'}
              onClick={onClickSaved}
              isDarkTheme={isDarkTheme}
            >
              <MdPlaylistAdd size={25} />
              <NavItem
                isActive={activeTabId === 'saved'}
                isDarkTheme={isDarkTheme}
              >
                Saved Videos
              </NavItem>
            </NavBarItem>
          </NavBarContainer>
          <NavBarContactContainer>
            <NavContactHeading isDarkTheme={isDarkTheme}>
              CONTACT US
            </NavContactHeading>
            <NavContactImageContainer>
              <NavContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <NavContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <NavContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </NavContactImageContainer>
            <NavContactDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </NavContactDescription>
          </NavBarContactContainer>
        </NavigationContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default NavigationSideBar
