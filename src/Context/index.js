import React from 'react'

const ContextContainer = React.createContext({
  isDarkTheme: true,
  activeTabId: 'hello',
  savedVideosList: [],
  clickRetryApp: () => {},
  toggleDarkMode: () => {},
  changeActiveTabId: () => {},
  addSavedVideoItem: () => {},
})

export default ContextContainer
