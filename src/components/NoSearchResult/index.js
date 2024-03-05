import ContextComponent from '../../Context'
import {
  NoSearchContainer,
  NoSearchImage,
  NoSearchHeading,
  NoSearchDescription,
  NoSearchRetryButton,
} from './styledComponents'

const NoSearchResult = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NoSearchContainer>
          <NoSearchImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoSearchHeading isDarkTheme={isDarkTheme}>
            No Search results found
          </NoSearchHeading>
          <NoSearchDescription isDarkTheme={isDarkTheme}>
            Try different key words or remove search filter
          </NoSearchDescription>
          <NoSearchRetryButton type="button">Retry</NoSearchRetryButton>
        </NoSearchContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default NoSearchResult
