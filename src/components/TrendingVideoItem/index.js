import {formatDistanceToNow} from 'date-fns'
import ContextComponent from '../../Context'
import {
  VideoItemContainer,
  VideoLink,
  VideoImage,
  ProfileAndContentContainer,
  ProfileImage,
  VideoContentContainer,
  VideoTitle,
  ChannelAndViewAndDuration,
  VideoChannel,
  VideoViewsAndDuration,
  VideoView,
  VideoDuration,
} from './styledComponents'

const VideoItem = props => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {
        id,
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videoDetails
      const {name, profileImageUrl} = channel
      const formatTime = formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1, 3)
        .join(' ')
      return (
        <VideoItemContainer isDarkTheme={isDarkTheme}>
          <VideoLink to={`/videos/${id}`}>
            <VideoImage src={thumbnailUrl} alt={title} />
          </VideoLink>
          <ProfileAndContentContainer>
            <ProfileImage src={profileImageUrl} alt={name} />
            <VideoContentContainer>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <ChannelAndViewAndDuration>
                <VideoChannel isDarkTheme={isDarkTheme}>{name}</VideoChannel>
                <VideoViewsAndDuration>
                  <VideoView isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </VideoView>
                  <VideoDuration isDarkTheme={isDarkTheme}>
                    {formatTime} ago
                  </VideoDuration>
                </VideoViewsAndDuration>
              </ChannelAndViewAndDuration>
            </VideoContentContainer>
          </ProfileAndContentContainer>
        </VideoItemContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default VideoItem
