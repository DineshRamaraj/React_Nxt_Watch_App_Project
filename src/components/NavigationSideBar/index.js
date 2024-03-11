import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ContextComponent from '../../Context'

import {
  NavigationContainer,
  NavBarItem,
  NavLink,
  NavItem,
  NavBarContainer,
  NavBarContentContainer,
  NavContentHeading,
  NavContentImageContainer,
  NavContentImage,
  NavContentDescription,
} from './styledComponents'

const NavigationSideBar = props => {
  const {close} = props
  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme, activeTabId, changeActiveTabId} = value

        const onClickHome = () => {
          changeActiveTabId('home')
          // close()
        }

        const onClickTrending = () => {
          changeActiveTabId('trending')
          // close()
        }

        const onClickGaming = () => {
          changeActiveTabId('gaming')
          // close()
        }

        const onClickSaved = () => {
          changeActiveTabId('saved')
          // close()
        }

        return (
          <NavigationContainer isDarkTheme={isDarkTheme}>
            <NavBarContainer>
              <NavLink to="/">
                <NavBarItem
                  key="home"
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
              </NavLink>
              <NavLink to="/trending">
                <NavBarItem
                  key="trending"
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
              </NavLink>
              <NavLink to="/gaming">
                <NavBarItem
                  key="gaming"
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
              </NavLink>
              <NavLink to="/saved-videos">
                <NavBarItem
                  key="saved"
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
              </NavLink>
            </NavBarContainer>
            <NavBarContentContainer>
              <NavContentHeading isDarkTheme={isDarkTheme}>
                CONTACT US
              </NavContentHeading>
              <NavContentImageContainer>
                <NavContentImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <NavContentImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <NavContentImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </NavContentImageContainer>
              <NavContentDescription isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </NavContentDescription>
            </NavBarContentContainer>
          </NavigationContainer>
        )
      }}
    </ContextComponent.Consumer>
  )
}
export default NavigationSideBar
