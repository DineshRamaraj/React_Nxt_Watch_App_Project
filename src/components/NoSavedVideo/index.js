import ContextComponent from '../../Context'
import {
  NoSavedVideoContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedDescription,
} from './styledComponents'

const NoSavedVideo = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NoSavedVideoContainer isDarkTheme={isDarkTheme}>
          <NoSavedImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <NoSavedHeading isDarkTheme={isDarkTheme}>
            No saved videos found
          </NoSavedHeading>
          <NoSavedDescription isDarkTheme={isDarkTheme}>
            you can save your videos while watching them
          </NoSavedDescription>
        </NoSavedVideoContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default NoSavedVideo
