import Loader from 'react-loader-spinner'
import ContextComponent from '../../Context'
import {LoadingContainer} from './styledComponents'

const Loading = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <LoadingContainer isDarkTheme={isDarkTheme} data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDarkTheme ? '#ffffff' : '#000000'}
            height="50"
            width="50"
          />
        </LoadingContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default Loading
