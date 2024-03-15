import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import {Component} from 'react'
import ContextComponent from '../../Context'
import GamingItem from '../GamingItem'
import LoadingView from '../Loading'
import Failure from '../Failure'
import {
  MainGaming,
  GamingContainer,
  BannerContainer,
  BannerIconContainer,
  BannerHeading,
  GamingListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  convertResponseDataIntoMyData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  })

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem =>
        this.convertResponseDataIntoMyData(eachItem),
      )
      //   console.log(updatedData)

      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderBanner = () => (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <BannerContainer isDarkTheme={isDarkTheme} data-testid="banner">
            <BannerIconContainer isDarkTheme={isDarkTheme}>
              <SiYoutubegaming
                size={30}
                color={isDarkTheme ? '#FF021B' : '#ff031c'}
              />
            </BannerIconContainer>
            <BannerHeading isDarkTheme={isDarkTheme}>Gaming</BannerHeading>
          </BannerContainer>
        )
      }}
    </ContextComponent.Consumer>
  )

  renderLoadingView = () => <LoadingView />

  onRetry = () => {
    this.getGamingList()
  }

  renderFailureView = () => <Failure onRetry={this.onRetry} />

  renderSuccessView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {gamingList} = this.state
        const {isDarkTheme} = value
        return (
          <GamingListContainer isDarkTheme={isDarkTheme}>
            {gamingList.map(eachItem => (
              <GamingItem key={eachItem.id} gameItem={eachItem} />
            ))}
          </GamingListContainer>
        )
      }}
    </ContextComponent.Consumer>
  )

  renderMainViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <ContextComponent.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <MainGaming isDarkTheme={isDarkTheme} data-testid="gaming">
                {this.renderBanner()}
                <GamingContainer isDarkTheme={isDarkTheme}>
                  {this.renderMainViews()}
                </GamingContainer>
              </MainGaming>
            )
          }}
        </ContextComponent.Consumer>
      </>
    )
  }
}

export default Gaming
