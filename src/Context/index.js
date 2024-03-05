import React from 'react'

const ContextContainer = React.createContext({
  isDarkTheme: true,
  clickRetryApp: () => {},
})

export default ContextContainer
