import {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
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

  changeActiveTabId = () => {
    const {match} = this.props
    const {params} = match
    console.log(params.id)

    // this.setState({activeTabId: })
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
          <Route exact path="=/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
        </Switch>
      </ContextComponents.Provider>
    )
  }
}

export default withRouter(App)
