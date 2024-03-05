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
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure"
          />
          <NoSearchHeading isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </NoSearchHeading>
          <NoSearchDescription isDarkTheme={isDarkTheme}>
            We are having some trouble to complete your request. Please try
            again
          </NoSearchDescription>
          <NoSearchRetryButton type="button">Retry</NoSearchRetryButton>
        </NoSearchContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default NoSearchResult
