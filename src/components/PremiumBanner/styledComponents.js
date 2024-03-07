import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

export const BannerImage = styled.img`
  width: 140px;
  height: 35px;
`

export const BannerHeading = styled.p`
font-family: "Roboto"
font-size: 24px;
color: #000000;
margin-bottom: 15px;
`

export const BannerButton = styled.button`
  align-self: flex-start;
  padding: 8px 20px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
`

export const BannerCloseContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

export const BannerCloseButton = styled.button`
  border-radius: 4px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
