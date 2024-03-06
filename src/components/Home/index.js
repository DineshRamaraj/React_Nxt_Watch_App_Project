import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import {Component} from 'react'

import ContextComponent from '../../Context'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import NoSearchResult from '../NoSearchResult'
import LoadingView from '../Loading'

import {
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
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

  renderLoadingView = () => <LoadingView />

  renderFailureView = () => <FailureView />

  renderSuccessView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {videoList} = this.state
        const {isDarkTheme} = value
        if (videoList.length) {
          return (
            <VideoListContainer isDarkTheme={isDarkTheme}>
              {videoList.map(eachItem => (
                <VideoItem key={eachItem.id} videoDetails={eachItem} />
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

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickSearch = () => {
    this.getVideoListData()
  }

  render() {
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {searchInput} = this.state
          return (
            <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
              {/* <PremiumBanner /> */}
              <SearchContainer>
                <SearchInput
                  id="search"
                  type="search"
                  placeholder="Search"
                  isDarkTheme={isDarkTheme}
                  value={searchInput}
                  onChange={this.changeSearchInput}
                />
                <SearchIcon
                  data-testid="searchButton"
                  type="button"
                  isDarkTheme={isDarkTheme}
                  onClick={this.clickSearch}
                >
                  <IoIosSearch
                    size={22}
                    color={isDarkTheme ? '#909090' : '#000000'}
                  />
                </SearchIcon>
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
