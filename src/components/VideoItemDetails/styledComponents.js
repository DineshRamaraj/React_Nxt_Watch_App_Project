import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#F9F9F9')};
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#dbeff5' : '#242C43')};
  margin-bottom: 3px;
`

export const VideoViewsAndDuration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoView = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: ${props => (props.isDarkTheme ? '500' : '400')};
  color: #3a6789;
  list-style: disc inside;
  display: list-item;
  margin-left: 5px;
  margin-top: 5px;
  @media screen and (min-width: 576px) {
    margin-left: 0px;
    list-style: none;
    font-size: 14px;
  }
`

export const VideoDuration = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: ${props => (props.isDarkTheme ? '500' : '400')};
  color: #3a6789;
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

export const VideoLikeButton = styled.div`
  background-color: 'transparent';
  display: flex;
  flex-direction: row;
  border: none;
`

export const VideoLikeItem = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
`

export const HrLine = styled.hr`
  color: ${props => (props.isDarkTheme ? '#455568' : '#E6E5E5')};
`

export const ChannelProfileAndName = styled.div`
  display: flex;
  align-items: center;
`

export const ChannelProfileImage = styled.img`
  width: 40px;
  height: 40px;
`

export const ChannelNameAndSubscriber = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`

export const ChannelName = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
`

export const ChannelSubscriber = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`
