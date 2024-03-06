import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ContextComponents from './Context'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTabId: 'home',
    savedVideosList: [],
  }

  componentDidMount() {
    const {location} = this.props
    const {pathname} = location
    if (pathname === '/') {
      this.setState({activeTabId: 'home'})
    } else if (pathname === '/trending') {
      this.setState({activeTabId: 'trending'})
    } else if (pathname === '/gaming') {
      this.setState({activeTabId: 'gaming'})
    } else if (pathname === '/saved') {
      this.setState({activeTabId: 'saved'})
    } else {
      this.setState({activeTabId: 'home'})
    }
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTabId = value => {
    this.setState({activeTabId: value})
  }

  addSavedVideoItem = savedItem => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, savedItem],
    }))
  }

  render() {
    const {isDarkTheme, activeTabId, savedVideosList} = this.state
    return (
      <ContextComponents.Provider
        value={{
          isDarkTheme,
          activeTabId,
          savedVideosList,
          toggleDarkMode: this.toggleDarkMode,
          changeActiveTabId: this.changeActiveTabId,
          addSavedVideoItem: this.addSavedVideoItem,
        }}
      >
        <Switch>
          <Route exact path="=/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved" component={SavedVideos} />
          <ProtectedRoute path="/videos/:id" component={VideoItemDetails} />
        </Switch>
      </ContextComponents.Provider>
    )
  }
}

export default withRouter(App)
