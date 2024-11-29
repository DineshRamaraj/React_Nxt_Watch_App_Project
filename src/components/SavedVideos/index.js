import {MdPlaylistAdd} from 'react-icons/md'
import ContextComponent from '../../Context'
import SavedVideoItem from '../SavedVideoItem'
import NoSavedVideo from '../NoSavedVideo'

import {
  MainSavedVideoContainer,
  BannerContainer,
  BannerIconContainer,
  BannerHeading,
  VideoListContainer,
} from './styledComponents'

const renderBanner = () => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <BannerContainer isDarkTheme={isDarkTheme} data-testid="banner">
          <BannerIconContainer isDarkTheme={isDarkTheme}>
            <MdPlaylistAdd
              size={30}
              color={isDarkTheme ? '#FF021B' : '#ff031c'}
            />
          </BannerIconContainer>
          <BannerHeading isDarkTheme={isDarkTheme}>Saved Videos</BannerHeading>
        </BannerContainer>
      )
    }}
  </ContextComponent.Consumer>
)

const SavedVideos = () => (
  <>
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value
        return (
          <>
            {savedVideosList.length !== 0 ? (
              <MainSavedVideoContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
              >
                {renderBanner()}
                <VideoListContainer isDarkTheme={isDarkTheme}>
                  {savedVideosList.map(eachItem => (
                    <SavedVideoItem key={eachItem.id} videoDetails={eachItem} />
                  ))}
                </VideoListContainer>
              </MainSavedVideoContainer>
            ) : (
              <MainSavedVideoContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
              >
                {savedVideosList.length > 0 && renderBanner()}
                <NoSavedVideo />
              </MainSavedVideoContainer>
            )}
          </>
        )
      }}
    </ContextComponent.Consumer>
  </>
)

export default SavedVideos
