import styled from 'styled-components'

export const MainTrending = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
`

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  height: 73vh;
  max-height: 100vh;
  padding: 20px;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  padding: 20px;
  padding-left: 30px;
  border-radius: 10px;
`

export const BannerIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0F0F0F' : '#E1E9F0')};
`

export const BannerHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  padding-left: 20px;
  color: ${props => (props.isDarkTheme ? '#F9FBFC' : '#1D293B')};
`

export const VideoListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 50vh;
  margin-top: 20px;
  list-style-type: none;
  padding-left: 0px;
`
