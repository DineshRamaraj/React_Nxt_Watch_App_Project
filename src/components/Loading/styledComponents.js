import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#F9F9F9')};
`
