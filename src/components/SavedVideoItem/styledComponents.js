import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    width: 100%;
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 230px;
  }
`

export const VideoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const VideoImageContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 55%;
  }
  @media screen and (min-width: 900px) {
    width: 45%;
  }
  @media screen and (min-width: 1100px) {
    width: 35%;
  }
`

export const VideoImage = styled.img`
  width: 100%;
  border-radius: 4px;
  height: 250px;
  @media screen and (min-width: 576px) {
    height: 200px;
  }

  @media screen and (min-width: 1100px) {
    height: 210px;
  }
`

export const ProfileAndContentContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 45%;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  align-self: flex-start;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 10px;
  @media screen and (min-width: 576px) {
    padding-left: 10px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#dbeff5' : '#242C43')};
  margin-bottom: 3px;

  @media screen and (min-width: 576px) {
    font-weight: 600;
  }

  @media screen and (min-width: 900px) {
    font-size: 16px;
  }
`

export const ChannelAndViewAndDuration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoChannel = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkTheme ? '700' : '500')};
  color: #3a6789;
  margin-top: 5px;
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
  //   font-size: 12px;
  //   font-weight: ${props => (props.isDarkTheme ? '500' : '400')};
  color: #3a6789;
  margin-left: 10px;
  margin-top: 5px;
  list-style: disc inside;
  display: list-item;
  //   @media screen and (min-width: 576px) {
  //     font-size: 14px;
  //   }
`
