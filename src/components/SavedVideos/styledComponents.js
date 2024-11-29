import styled from 'styled-components'

export const MainSavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;
  min-height: 70vh;
  max-height: 90vh;
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
  padding-left: 20px;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
`

export const VideoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 0px;
  list-style: none;
  padding: 20px;
  overflow-y: auto;
`
