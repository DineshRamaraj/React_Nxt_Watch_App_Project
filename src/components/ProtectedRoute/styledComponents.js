import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavigationContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    min-width: 250px;
    max-width: 20%;
    min-height: 90vh;
  }
`

export const RouteContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
`
