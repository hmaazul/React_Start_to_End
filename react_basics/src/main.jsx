import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './Chai.jsx'

const username = 'for hmaazul'
const reactElement = React.createElement(
  'a',
  {
    href: 'https://gmail.com',
    target: '_blank'
  },
  'Open Gmail ! ',
  username
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
