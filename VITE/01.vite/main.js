import './style.css'

import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1> como estas </h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
