import {IoCloseOutline} from 'react-icons/io5'

import {
  BannerContainer,
  BannerContentContainer,
  BannerImage,
  BannerHeading,
  BannerButton,
  BannerCloseContainer,
  BannerCloseButton,
} from './styledComponents'

const PremiumBanner = props => {
  const {clickBannerClose} = props
  const onBannerClose = () => {
    clickBannerClose()
  }

  return (
    <BannerContainer data-testid="banner">
      <BannerContentContainer>
        <BannerImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerHeading>
        <BannerButton type="button">GET IT NOW</BannerButton>
      </BannerContentContainer>
      <BannerCloseContainer>
        <BannerCloseButton
          type="button"
          onClick={onBannerClose}
          data-testid="close"
        >
          <IoCloseOutline size={25} />
        </BannerCloseButton>
      </BannerCloseContainer>
    </BannerContainer>
  )
}
export default PremiumBanner
