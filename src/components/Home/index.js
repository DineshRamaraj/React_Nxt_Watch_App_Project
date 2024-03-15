import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import {Component} from 'react'

import ContextComponent from '../../Context'
import VideoItem from '../VideoItem'
import Failure from '../Failure'
import NoSearchResult from '../NoSearchResult'
import LoadingView from '../Loading'
import PremiumBanner from '../PremiumBanner'

import {
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  VideoListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    banner: true,
  }

  componentDidMount() {
    this.getVideoListData()
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

  getVideoListData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickBannerClose = () => {
    this.setState({banner: false})
  }

  renderLoadingView = () => <LoadingView />

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideoListData)
  }

  renderFailureView = () => <Failure onRetry={this.onRetry} />

  renderSuccessView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {videoList} = this.state
        const {isDarkTheme} = value
        return (
          <>
            {videoList.length ? (
              <VideoListContainer isDarkTheme={isDarkTheme}>
                {videoList.map(eachItem => (
                  <VideoItem key={eachItem.id} videoDetails={eachItem} />
                ))}
              </VideoListContainer>
            ) : (
              <NoSearchResult onRetry={this.onRetry} />
            )}
          </>
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

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickSearch = event => {
    if (event.key === 'Enter' || event.type === 'click') {
      this.getVideoListData()
    }
  }

  render() {
    const {searchInput, banner} = this.state
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
              {banner ? (
                <PremiumBanner clickBannerClose={this.clickBannerClose} />
              ) : (
                ''
              )}
              <SearchContainer>
                <SearchInput
                  id="search"
                  type="search"
                  placeholder="Search"
                  isDarkTheme={isDarkTheme}
                  value={searchInput}
                  onChange={this.changeSearchInput}
                  onKeyDown={this.clickSearch}
                />
                <SearchIconButton
                  data-testid="searchButton"
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={this.clickSearch}
                >
                  <IoIosSearch
                    size={22}
                    color={isDarkTheme ? '#909090' : '#000000'}
                  />
                </SearchIconButton>
              </SearchContainer>
              {this.renderMainViews()}
            </HomeContainer>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}

export default Home
