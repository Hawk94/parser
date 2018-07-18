import React from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {App} from 'components/App'

import {theme} from 'theme/globalStyle'

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  )
}

export default Root
