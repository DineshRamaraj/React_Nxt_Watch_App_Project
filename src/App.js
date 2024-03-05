import {Component} from 'react'
import {Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import ContextComponents from './Context'
import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTabId: 'home',
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveTabId = value => {
    this.setState({activeTabId: value})
  }

  render() {
    const {isDarkTheme, activeTabId} = this.state
    return (
      <ContextComponents.Provider
        value={{
          isDarkTheme,
          activeTabId,
          toggleDarkMode: this.toggleDarkMode,
          changeActiveTabId: this.changeActiveTabId,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
        </Switch>
      </ContextComponents.Provider>
    )
  }
}

export default App
