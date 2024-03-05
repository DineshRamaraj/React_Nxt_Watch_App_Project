import Cookies from 'js-cookie'
import {Component} from 'react'
import ContextComponent from '../../Context'
import GamingItem from '../GamingItem'
import FailureView from '../FailureView'
import LoadingView from '../Loading'

import {GamingContainer, GamingListContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingList()
  }

  convertResponseDataIntoMyData = data => ({
    id: data.id,
    title: data.title,
    thumbnailUrl: data.thumbnail_url,
    viewCount: data.view_count,
  })

  getGamingList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachItem =>
        this.convertResponseDataIntoMyData(eachItem),
      )
      //   console.log(updatedData)
      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => <LoadingView />

  renderFailureView = () => <FailureView />

  renderSuccessView = () => (
    <ContextComponent.Consumer>
      {value => {
        const {gamingList} = this.state
        const {isDarkTheme} = value
        return (
          <GamingListContainer isDarkTheme={isDarkTheme}>
            {gamingList.map(eachItem => (
              <GamingItem key={eachItem.id} gameItem={eachItem} />
            ))}
          </GamingListContainer>
        )
      }}
    </ContextComponent.Consumer>
  )

  renderMainViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <ContextComponent.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
                {this.renderMainViews()}
              </GamingContainer>
            )
          }}
        </ContextComponent.Consumer>
      </>
    )
  }
}

export default Gaming
