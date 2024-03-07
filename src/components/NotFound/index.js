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
        <NotFoundContainer isDarkTheme={isDarkTheme} data-testid="not found">
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
            we are sorry, the page you requested could not be found.
          </NotFoundDescription>
        </NotFoundContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default NotFound
