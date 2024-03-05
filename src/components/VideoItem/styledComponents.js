import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 30px;
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

export const VideoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`

export const VideoImage = styled.img`
  width: 100%;
  min-height: 280px;
  flex-grow: 1;
  border-radius: 4px;
  @media screen and (min-width: 576px) {
    min-height: 180px;
  }
`

export const ProfileAndContentContainer = styled.div`
  display: flex;
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  align-self: flex-start;
  margin-top: 15px;
`

export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#dbeff5' : '#242C43')};
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoChannel = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isDarkTheme ? '500' : '400')};
  color: #455568;
  margin: 5px 0px;
`

export const VideoViewsAndDuration = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoView = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkTheme ? '500' : '400')};
  color: #455568;
  margin-top: 5px;
`

export const VideoDuration = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkTheme ? '500' : '400')};
  color: #455568;
  margin-top: 5px;
  margin-left: 10px;
`
