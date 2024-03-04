import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    padding: 0px 10px 10px 0px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 900px) {
    width: 33%;
  }
`

export const VideoImage = styled.img`
  width: 100%;
`

//   ProfileAndContentContainer,
//   ProfileImage,
//   VideoContentContainer,
//   VideoTitle,
//   VideoChannel,
//   VideoViewsAndDuration,
//   VideoView,
//   VideoDuration,

export const ProfileAndContentContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  align-self: flex-start;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: '#ffffff';
`

export const VideoChannel = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
`

export const VideoViewsAndDuration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoView = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
`

export const VideoDuration = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
`
