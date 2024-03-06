import ContextComponent from '../../Context'
import SavedVideoItem from '../SavedVideoItem'
import NoSavedVideo from '../NoSavedVideo'
import {SavedVideosContainer, VideoListContainer} from './styledComponents'

const SavedVideos = () => (
  <>
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value
        // console.log('SavedVideo ', savedVideosList.length)
        if (savedVideosList.length) {
          return (
            <SavedVideosContainer isDarkTheme={isDarkTheme} data-testid="saved">
              <VideoListContainer isDarkTheme={isDarkTheme}>
                {savedVideosList.map(eachItem => (
                  <SavedVideoItem key={eachItem.id} videoDetails={eachItem} />
                ))}
              </VideoListContainer>
            </SavedVideosContainer>
          )
        }
        return <NoSavedVideo />
      }}
    </ContextComponent.Consumer>
  </>
)

export default SavedVideos
