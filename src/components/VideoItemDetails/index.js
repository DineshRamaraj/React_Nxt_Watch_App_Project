import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {Component} from 'react'
import ContextComponent from '../../Context'
import FailureView from '../FailureView'
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
  VideoLikeButton,
  VideoLikeItem,
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

  renderFailureView = () => <FailureView />

  renderLoadingView = () => <LoadingView />

  renderSuccessView = () => {
    const {videoDetailsData} = this.state
    const {
      title,
      videoUrl,
      //   thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetailsData
    const {name, profileImageUrl, subscriberCount} = channel

    const formatTime = formatDistanceToNow(new Date(publishedAt))
      .split(' ')
      .slice(1, 3)
      .join(' ')

    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme, addSavedVideoItem} = value
          const onClickSavedButton = () => {
            addSavedVideoItem(videoDetailsData)
          }
          return (
            <>
              <VideoContainer>
                <ReactPlayer url={videoUrl} width="100%" />
              </VideoContainer>
              <VideoContentContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <VideoViewAndLikeButtonContainer>
                  <VideoViewsAndDuration>
                    <VideoView isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </VideoView>
                    <VideoDuration isDarkTheme={isDarkTheme}>
                      {formatTime} ago
                    </VideoDuration>
                  </VideoViewsAndDuration>
                  <VideoLikeAndSaveContainer>
                    <VideoLikeButton type="button">
                      <BiLike size={20} color="#7E939F" />
                      <VideoLikeItem isDarkTheme={isDarkTheme}>
                        Like
                      </VideoLikeItem>
                    </VideoLikeButton>
                    <VideoLikeButton type="button">
                      <BiDislike size={20} color="#7E939F" />
                      <VideoLikeItem isDarkTheme={isDarkTheme}>
                        Dislike
                      </VideoLikeItem>
                    </VideoLikeButton>
                    <VideoLikeButton type="button" onClick={onClickSavedButton}>
                      <MdPlaylistAdd size={20} color="#7E939F" />
                      <VideoLikeItem isDarkTheme={isDarkTheme}>
                        Save
                      </VideoLikeItem>
                    </VideoLikeButton>
                  </VideoLikeAndSaveContainer>
                </VideoViewAndLikeButtonContainer>
                <HrLine isDarkTheme={isDarkTheme} />
                <ChannelProfileAndName isDarkTheme={isDarkTheme}>
                  <ChannelProfileImage
                    src={profileImageUrl}
                    alt={name}
                    isDarkTheme={isDarkTheme}
                  />
                  <ChannelNameAndSubscriber isDarkTheme={isDarkTheme}>
                    <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                    <ChannelSubscriber isDarkTheme={isDarkTheme}>
                      {subscriberCount} subscribers
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
    const {videoDetailsData} = this.state
    console.log(videoDetailsData)
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
