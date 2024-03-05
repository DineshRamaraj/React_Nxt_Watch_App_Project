import ContextComponent from '../../Context'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

const FailureView = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme, clickRetryApp} = value
      return (
        <FailureContainer>
          <FailureImage
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure"
          />
          <FailureHeading isDarkTheme={isDarkTheme}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureDescription isDarkTheme={isDarkTheme}>
            We are having some trouble to complete your request. Please try
            again
          </FailureDescription>
          <FailureRetryButton type="button" onClick={clickRetryApp}>
            Retry
          </FailureRetryButton>
        </FailureContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default FailureView
