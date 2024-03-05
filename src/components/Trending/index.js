import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import ContextComponent from '../../Context'
import TrendingVideoItem from '../TrendingVideoItem'
import FailureView from '../FailureView'
import NoSearchResult from '../NoSearchResult'

import {
  TrendingContainer,
  LoadingContainer,
  VideoListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

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
      console.log(updatedData)
      this.setState({
        trendingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => <FailureView />

  renderLoadingView = () => (
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

  renderSuccessView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {trendingList} = this.state
        const {isDarkTheme} = value
        if (trendingList.length) {
          return (
            <VideoListContainer isDarkTheme={isDarkTheme}>
              {trendingList.map(eachItem => (
                <TrendingVideoItem key={eachItem.id} videoDetails={eachItem} />
              ))}
            </VideoListContainer>
          )
        }
        return <NoSearchResult />
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
              <TrendingContainer isDarkTheme={isDarkTheme}>
                {this.renderMainViews()}
              </TrendingContainer>
            )
          }}
        </ContextComponent.Consumer>
      </>
    )
  }
}

export default Trending
