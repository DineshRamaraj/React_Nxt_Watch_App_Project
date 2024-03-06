import ContextComponent from '../../Context'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NotFoundContainer isDarkTheme={isDarkTheme}>
          <NotFoundImage
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
            }
            alt="not found"
          />
          <NotFoundHeading isDarkTheme={isDarkTheme}>
            Page Not Found
          </NotFoundHeading>
          <NotFoundDescription isDarkTheme={isDarkTheme}>
            We are sorry, the page you required could not found.
          </NotFoundDescription>
        </NotFoundContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default NotFound
