import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  height: 90vh;
  max-height: 100vh;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
`

export const VideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin-top: 20px;
`
