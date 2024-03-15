import ContextComponent from '../../Context'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

const Failure = props => {
  const {onRetry} = props

  const onRetryButton = () => {
    onRetry()
  }

  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <FailureRetryButton type="button" onClick={onRetryButton}>
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </ContextComponent.Consumer>
  )
}

export default Failure
