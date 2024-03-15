import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
// import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {Component} from 'react'
import ContextComponent from '../../Context'
import Failure from '../Failure'
import LoadingView from '../Loading'
import {
  VideoDetailContainer,
  VideoContentContainer,
  VideoContainer,
  VideoTitle,
  VideoViewAndLikeButtonContainer,
  VideoViewsAndDuration,
  VideoView,
  VideoDuration,
  VideoLikeAndSaveContainer,
  VideoButtons,
  VideoButtonText,
  HrLine,
  ChannelProfileAndName,
  ChannelProfileImage,
  ChannelNameAndSubscriber,
  ChannelName,
  ChannelSubscriber,
  VideoDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsData: {},
  }

  componentDidMount() {
    this.getDataFormServer()
  }

  convertDbResponseToMyResponse = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    viewCount: data.view_count,
    publishedAt: data.published_at,
    description: data.description,
    isLiked: false,
    isDisLiked: false,
  })

  getDataFormServer = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.convertDbResponseToMyResponse(data.video_details)
      this.setState({
        videoDetailsData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getDataFormServer()
  }

  renderFailureView = () => <Failure onRetry={this.onRetry} />

  renderLoadingView = () => <LoadingView />

  onClickLikeButton = () => {
    this.setState(prevState => ({
      videoDetailsData: {
        ...prevState.videoDetailsData,
        isLiked: !prevState.videoDetailsData.isLiked,
        isDisLiked: false,
      },
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({
      videoDetailsData: {
        ...prevState.videoDetailsData,
        isLiked: false,
        isDisLiked: !prevState.videoDetailsData.isDisLiked,
      },
    }))
  }

  renderSuccessView = () => {
    const {videoDetailsData} = this.state
    const {
      id,
      title,
      videoUrl,
      //   thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
      isLiked,
      isDisLiked,
    } = videoDetailsData
    const {name, profileImageUrl, subscriberCount} = channel

    // const formatTime = formatDistanceToNow(new Date(publishedAt))
    //   .split(' ')
    //   .slice(1, 3)
    //   .join(' ')

    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme, addSavedVideoItem, savedVideosList} = value

          const textColor = isDarkTheme ? '#64748b' : '#231f20'
          const index = savedVideosList.findIndex(
            eachItem => eachItem.id === id,
          )

          let isSaved

          if (index === -1) {
            isSaved = false
          } else {
            isSaved = true
          }

          const saveIconColor = isSaved ? '#2563eb' : textColor

          const onClickSavedButton = () => {
            addSavedVideoItem(videoDetailsData)
          }

          return (
            <>
              <VideoContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height="100%"
                  key="video_url"
                />
              </VideoContainer>
              <VideoContentContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoViewAndLikeButtonContainer>
                  <VideoViewsAndDuration>
                    <VideoView isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </VideoView>
                    <VideoDuration isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </VideoDuration>
                  </VideoViewsAndDuration>
                  <VideoLikeAndSaveContainer>
                    <VideoButtons
                      type="button"
                      onClick={this.onClickLikeButton}
                    >
                      <BiLike
                        size={20}
                        color={isLiked ? '#2563eb' : '#64748b'}
                      />
                      <VideoButtonText
                        isDarkTheme={isDarkTheme}
                        isLiked={isLiked}
                      >
                        Like
                      </VideoButtonText>
                    </VideoButtons>

                    <VideoButtons
                      type="button"
                      onClick={this.onClickDisLikeButton}
                    >
                      <BiDislike
                        size={20}
                        color={isDisLiked ? '#2563eb' : '#64748b'}
                      />
                      <VideoButtonText
                        isDarkTheme={isDarkTheme}
                        isDisLiked={isDisLiked}
                      >
                        Dislike
                      </VideoButtonText>
                    </VideoButtons>
                    <VideoButtons type="button" onClick={onClickSavedButton}>
                      <MdPlaylistAdd size={20} color={saveIconColor} />
                      <VideoButtonText
                        isDarkTheme={isDarkTheme}
                        isSaved={isSaved}
                      >
                        {isSaved ? 'Saved' : 'Save'}
                      </VideoButtonText>
                    </VideoButtons>
                  </VideoLikeAndSaveContainer>
                </VideoViewAndLikeButtonContainer>
                <HrLine isDarkTheme={isDarkTheme} />
                <ChannelProfileAndName isDarkTheme={isDarkTheme}>
                  <ChannelProfileImage
                    src={profileImageUrl}
                    alt="channel logo"
                    isDarkTheme={isDarkTheme}
                  />
                  <ChannelNameAndSubscriber isDarkTheme={isDarkTheme}>
                    <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                    <ChannelSubscriber isDarkTheme={isDarkTheme}>
                      {subscriberCount} Subscribers
                    </ChannelSubscriber>
                    <VideoDescription isDarkTheme={isDarkTheme}>
                      {description}
                    </VideoDescription>
                  </ChannelNameAndSubscriber>
                </ChannelProfileAndName>
              </VideoContentContainer>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }

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
    // const {videoDetailsData} = this.state
    // console.log('video', videoDetailsData)
    return (
      <>
        <ContextComponent.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <VideoDetailContainer
                isDarkTheme={isDarkTheme}
                data-testid="videoItemDetails"
              >
                {this.renderMainViews()}
              </VideoDetailContainer>
            )
          }}
        </ContextComponent.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
