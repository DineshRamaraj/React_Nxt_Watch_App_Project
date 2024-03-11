// import {formatDistanceToNow} from 'date-fns'
import ContextComponent from '../../Context'
import {
  VideoLink,
  VideoItemContainer,
  VideoImageContainer,
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

      /* const formatTime = formatDistanceToNow(new Date(publishedAt))
        .split(' ')
        .slice(1, 3)
        .join(' ') */

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoItemContainer isDarkTheme={isDarkTheme}>
            <VideoImageContainer>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            </VideoImageContainer>
            <ProfileAndContentContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <VideoContentContainer>
                <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                <ChannelAndViewAndDuration>
                  <VideoChannel isDarkTheme={isDarkTheme}>{name}</VideoChannel>
                  <VideoViewsAndDuration>
                    <VideoView isDarkTheme={isDarkTheme}>
                      {viewCount} views
                    </VideoView>
                    <VideoDuration isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </VideoDuration>
                  </VideoViewsAndDuration>
                </ChannelAndViewAndDuration>
              </VideoContentContainer>
            </ProfileAndContentContainer>
          </VideoItemContainer>
        </VideoLink>
      )
    }}
  </ContextComponent.Consumer>
)

export default VideoItem
