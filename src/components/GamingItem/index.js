import ContextComponent from '../../Context'

import {
  GamingItemContainer,
  GameLink,
  GameImage,
  GameTitle,
  GameViewCount,
} from './styledComponents'

const GamingItem = props => {
  const {gameItem} = props
  const {id, title, thumbnailUrl, viewCount} = gameItem
  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingItemContainer>
            <GameLink to={`/videos/${id}`}>
              <GameImage src={thumbnailUrl} alt={title} />
            </GameLink>
            <GameTitle isDarkTheme={isDarkTheme}>{title}</GameTitle>
            <GameViewCount isDarkTheme={isDarkTheme}>
              {viewCount} Watching Worldwide
            </GameViewCount>
          </GamingItemContainer>
        )
      }}
    </ContextComponent.Consumer>
  )
}

export default GamingItem
