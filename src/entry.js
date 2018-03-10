import React from 'react'
import { render } from 'react-dom'

import Viewer from "../node_modules/react-popups/src/Viewer.jsx"
// var { Router } = require('react-router')
// var routes = require('./routes.jsx')
// 
// var createHistory = require('history/lib/createHashHistory')
// var history = createHistory({ queryKey: false })
// 
// render(<Router history={history}>{routes}</Router>, document.getElementById('app'))

render(<Viewer/>, document.getElementById('app'))
