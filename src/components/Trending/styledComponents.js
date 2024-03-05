import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  height: 90vh;
  max-height: 100vh;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#F9F9F9')};
`

export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 50vh;
  margin-top: 20px;
`
