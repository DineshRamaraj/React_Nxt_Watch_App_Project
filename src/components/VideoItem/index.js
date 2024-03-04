import ContextComponent from '../../Context'
import {
  VideoItemContainer,
  VideoImage,
  ProfileAndContentContainer,
  ProfileImage,
  VideoContentContainer,
  VideoTitle,
  VideoChannel,
  VideoViewsAndDuration,
  VideoView,
  VideoDuration,
} from './styledComponents'

const VideoItem = dinesh => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = dinesh
      const {
        channel,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videoDetails
      const {name, profileImageUrl} = channel
      return (
        <VideoItemContainer isDarkTheme={isDarkTheme}>
          <VideoImage src={thumbnailUrl} alt={title} />
          <ProfileAndContentContainer>
            <ProfileImage src={profileImageUrl} alt={name} />
            <VideoContentContainer>
              <VideoTitle>{title}</VideoTitle>
              <VideoChannel>{name}</VideoChannel>
              <VideoViewsAndDuration>
                <VideoView>{viewCount}</VideoView>
                <VideoDuration>{publishedAt}</VideoDuration>
              </VideoViewsAndDuration>
            </VideoContentContainer>
          </ProfileAndContentContainer>
        </VideoItemContainer>
      )
    }}
  </ContextComponent.Consumer>
)

export default VideoItem
