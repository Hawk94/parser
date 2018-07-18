import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'components/Root'
import registerServiceWorker from './registerServiceWorker'

import {store} from 'config/store'

const root: ?Element = document.getElementById('root')

if (root != null) {
  ReactDOM.render(<Root store={store} />, root)
  registerServiceWorker()
}
