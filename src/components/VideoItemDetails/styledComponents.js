import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
`

export const VideoContainer = styled.div`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 576px) {
    height: 400px;
  }
  @media screen and (min-width: 900px) {
    height: 450px;
  }
`

export const VideoContentContainer = styled.div`
  padding: 10px;
  min-height: 30vh;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#dbeff5' : '#242C43')};
  margin-bottom: 3px;
`

export const VideoViewAndLikeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoViewsAndDuration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoView = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  color: #7e939f;
  margin-left: 5px;
  margin-top: 5px;
  @media screen and (min-width: 576px) {
    margin-left: 0px;
    font-size: 14px;
  }
`

export const VideoDuration = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  color: #7e939f;
  margin-left: 10px;
  margin-top: 5px;
  list-style: disc inside;
  display: list-item;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export const VideoLikeAndSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoButtons = styled.button`
  background-color: 'transparent';
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  margin-right: 30px;
  cursor: pointer;
`

export const VideoButtonText = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
  color: ${props => {
    if (props.isSaved || props.isLiked || props.isDisLiked) {
      return '#2563eb'
    }
    return '#64748b'
  }};
`

export const HrLine = styled.hr`
  color: ${props => (props.isDarkTheme ? '#455568' : '#E6E5E5')};
  border: 1px solid #7e939f;
  border-radius: 15px;
`

export const ChannelProfileAndName = styled.div`
  display: flex;
  padding: 20px 0px;
`

export const ChannelProfileImage = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-start;
`

export const ChannelNameAndSubscriber = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 5px 0px;
  color: ${props => (props.isDarkTheme ? '#dbeff5' : '#242C43')};
`

export const ChannelSubscriber = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  color: #7e939f;
  margin: 0px;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.5;
  margin-top: 30px;
  color: ${props => (props.isDarkTheme ? '#dbeff5' : '#242C43')};
`
