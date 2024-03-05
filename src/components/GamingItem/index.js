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
    <GamingItemContainer>
      <GameLink to={`/gaming/${id}`}>
        <GameImage src={thumbnailUrl} alt={title} />
      </GameLink>
      <GameTitle>{title}</GameTitle>
      <GameViewCount>{viewCount} Watching Worldwide</GameViewCount>
    </GamingItemContainer>
  )
}

export default GamingItem
