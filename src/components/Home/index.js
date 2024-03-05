import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import ContextComponent from '../../Context'
import Header from '../Header'
import NavigationSideBar from '../NavigationSideBar'
import VideoItem from '../VideoItem'
import {
  MainContainer,
  HomeMainContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
  LoadingContainer,
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
    viewCount: data.viewCount,
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

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        alt="failure"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again
      </FailureDescription>
      <FailureRetryButton>Retry</FailureRetryButton>
    </FailureContainer>
  )

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
        const {videoList} = this.state
        const {isDarkTheme} = value
        console.log(videoList)
        return (
          <VideoListContainer isDarkTheme={isDarkTheme}>
            {videoList.map(eachItem => (
              <VideoItem key={eachItem.id} videoDetails={eachItem} />
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

  renderHomeView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <HomeMainContainer isDarkTheme={isDarkTheme}>
            {/* <PremiumBanner /> */}
            <SearchContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                isDarkTheme={isDarkTheme}
              />
              <SearchIcon isDarkTheme={isDarkTheme}>
                <IoIosSearch
                  size={22}
                  color={isDarkTheme ? '#909090' : '#000000'}
                />
              </SearchIcon>
            </SearchContainer>
            {this.renderMainViews()}
          </HomeMainContainer>
        )
      }}
    </ContextComponent.Consumer>
  )

  render() {
    // const {videoList} = this.state
    // console.log(videoList)
    return (
      <>
        <Header />
        <MainContainer>
          <NavigationSideBar />
          {this.renderHomeView()}
        </MainContainer>
      </>
    )
  }
}

export default Home
