import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import {Component} from 'react'

import ContextComponent from '../../Context'
import TrendingVideoItem from '../TrendingVideoItem'
import Failure from '../Failure'
import LoadingView from '../Loading'

import {
  MainTrending,
  TrendingContainer,
  BannerContainer,
  BannerIconContainer,
  BannerHeading,
  VideoListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

// let isFailure = apiStatusConstants.failure

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingList()
  }

  convertResponseDataIntoMyData = data => ({
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
  })

  getTrendingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
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
        trendingList: updatedData,
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
              <HiFire size={30} color={isDarkTheme ? '#FF021B' : '#ff031c'} />
            </BannerIconContainer>
            <BannerHeading isDarkTheme={isDarkTheme}>Trending</BannerHeading>
          </BannerContainer>
        )
      }}
    </ContextComponent.Consumer>
  )

  renderLoadingView = () => <LoadingView />

  onRetry = () => {
    this.getTrendingList()
  }

  renderFailureView = () => <Failure onRetry={this.onRetry} />

  renderSuccessView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {trendingList} = this.state
        const {isDarkTheme} = value
        return (
          <VideoListContainer isDarkTheme={isDarkTheme}>
            {trendingList.map(eachItem => (
              <TrendingVideoItem key={eachItem.id} videoDetails={eachItem} />
            ))}
          </VideoListContainer>
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
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MainTrending isDarkTheme={isDarkTheme} data-testid="trending">
              {this.renderBanner()}
              <TrendingContainer isDarkTheme={isDarkTheme}>
                {this.renderMainViews()}
              </TrendingContainer>
            </MainTrending>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default Trending
