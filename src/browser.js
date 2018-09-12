import React from 'react'
import { hydrate } from "react-dom"

import Loader from './components/Loader'

hydrate(
	<Loader path={window.location.pathname == '/' ? 'index' : window.location.pathname.replace(/^\//, '')} />, 
	document.getElementById("__reacty")
)